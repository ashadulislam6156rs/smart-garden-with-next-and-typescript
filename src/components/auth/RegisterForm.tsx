"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  User,
  MailIcon,
  LockKeyhole,
  Eye,
  EyeOff,
  Phone,
  ImageIcon,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import registerUser from "../../../scripts/registerUser";
import axios from "axios";
import { Spinner } from "../ui/spinner";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

type FormValues = {
  fullName: string;
  email: string;
  password?: string | null;
  gender?: string;
  role: string;
  phone?: number;
  photoURL?: FileList | null;
};

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  //  TypeScript compatible password validation
  const passwordValidation = {
    required: "Password is required",
    minLength: { value: 6, message: "Password must be at least 6 characters!" },
    validate: {
      hasUpper: (v: string | null | undefined) =>
        /[A-Z]/.test(v ?? "") || "Must include at least 1 uppercase letter!",
      hasLow: (v: string | null | undefined) =>
        /[a-z]/.test(v ?? "") || "Must include at least 1 lowercase letter!",
      hasNum: (v: string | null | undefined) =>
        /\d/.test(v ?? "") || "Must include at least 1 number!",
    },
  };

  const handleUserRegister = async (data: FormValues) => {
    setLoading(true);
    try {
      let finalPhotoURL = "";

      if (data.photoURL && data.photoURL.length > 0) {
        const formData = new FormData();
        formData.append("image", data.photoURL[0]);

        const imgResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API_KEY}`,
          formData,
        );
        finalPhotoURL = imgResponse.data.data.url;
      }

      const userData = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        gender: data.gender,
        role: "Client",
        phone: data.phone,
        photoURL: finalPhotoURL,
      };

      await registerUser(userData);
      toast.success("Registration Successful!");
      setLoading(false);

      // User direct login
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: "/products",
      });
      if (res?.error) {
        toast.error("Invalid email or password!");
      }
    } catch (error: unknown) {
      setLoading(false);
      if (error instanceof Error) {
        toast.error("Registration failed:");
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  return (
    <>
      {/* Google Sign Up */}
      <div className="flex justify-center items-center mb-3">
        <Button
          variant="outline"
          className="w-full max-w-sm flex items-center justify-center gap-2"
        >
          <FcGoogle className="w-5 h-5" />
          Sign up with Google
        </Button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-500 font-medium">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <form onSubmit={handleSubmit(handleUserRegister)} className="space-y-3">
        <div className="flex flex-col md:flex-row justify-center gap-5">
          {/* Left Side */}
          <div className="grid w-full max-w-sm gap-3">
            {/* Full Name */}
            <div>
              <Label className="mb-2 text-sm font-semibold text-gray-700">
                Full name
              </Label>
              <InputGroup>
                <InputGroupInput
                  {...register("fullName", { required: true })}
                  type="text"
                  placeholder="Enter full name"
                />
                <InputGroupAddon>
                  <User className="text-emerald-500" />
                </InputGroupAddon>
              </InputGroup>
              {errors.fullName && (
                <p className="text-red-500 pt-2 text-sm font-medium">
                  Full Name is required
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label className="mb-2 text-sm font-semibold text-gray-700">
                Password
              </Label>
              <InputGroup>
                <InputGroupInput
                  {...register("password", passwordValidation)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                />
                <InputGroupAddon>
                  <LockKeyhole className="text-emerald-500" />
                </InputGroupAddon>
                <InputGroupAddon
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  align="inline-end"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </InputGroupAddon>
              </InputGroup>
              {errors.password && (
                <p className="text-red-500 pt-2 text-sm font-medium">
                  {errors.password.message as string}
                </p>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="grid w-full max-w-sm gap-3">
            {/* Email */}
            <div>
              <Label className="mb-2 text-sm font-semibold text-gray-700">
                Email
              </Label>
              <InputGroup>
                <InputGroupInput
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                />
                <InputGroupAddon>
                  <MailIcon className="text-emerald-500" />
                </InputGroupAddon>
              </InputGroup>
              {errors.email && (
                <p className="text-red-500 pt-2 text-sm font-medium">
                  Email is required
                </p>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">
                Gender
              </Label>
              <div className="rounded-xl border border-gray-200 p-2">
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex items-center gap-8"
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Male" id="r1" />
                        <Label htmlFor="r1">Male</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Female" id="r2" />
                        <Label htmlFor="r2">Female</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Others" id="r3" />
                        <Label htmlFor="r3">Others</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>
              {errors.gender && (
                <p className="text-red-500 text-sm font-medium">
                  Gender is required
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Phone */}
        <div>
          <Label className="mb-2 text-sm font-semibold text-gray-700">
            Phone
          </Label>
          <InputGroup>
            <InputGroupInput
              type="tel"
              {...register("phone", { required: true })}
              placeholder="+880.."
            />
            <InputGroupAddon>
              <Phone className="text-emerald-500" />
            </InputGroupAddon>
          </InputGroup>
          {errors.phone && (
            <p className="text-red-500 pt-2 text-sm font-medium">
              Phone number is required
            </p>
          )}
        </div>

        {/* Upload Image */}
        <div>
          <Label className="block text-sm font-semibold text-gray-700 mb-2">
            Upload Image (Optional)
          </Label>
          <label className="block cursor-pointer">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-2 text-center bg-gray-50 hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300">
              <ImageIcon className="w-5 h-5 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">
                Click to upload photo
              </p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
            </div>
            <input
              type="file"
              {...register("photoURL")}
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>

        {/* Submit */}
        {loading ? (
          <Button size="sm" variant="outline" disabled>
            <Spinner />
            Submit
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full mt-6 h-11 text-sm font-semibold"
          >
            Create Account
          </Button>
        )}
      </form>

      {/* Already have account */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <Link
          href={"/login"}
          className="text-emerald-600 font-bold hover:underline transition-colors"
        >
          Sign In
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
