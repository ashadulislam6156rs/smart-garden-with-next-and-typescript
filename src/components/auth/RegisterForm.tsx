"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  User,
  MailIcon,
  LockKeyhole,
  Eye,
  EyeOff,
  Phone,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import Link from "next/link";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  gender: string;
  role: string;
  contactNumber: string;
  photoURL: FileList;
};

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
//   const [role, setRole] = useState("Student");
//   const [gender, setGender] = useState("Male");

  const {
    register,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <>
      {/* Google Sign Up */}
      <div className="flex justify-center items-center">
        <Button variant="outline" className="w-full">
          <FcGoogle className="w-5 h-5" />
          Sign up with Google
        </Button>
      </div>

      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300" />
        <span className="mx-3 text-sm text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      {/* Form */}

      <form className="flex flex-col md:flex-row justify-center gap-5">
        {/* Left Side */}
        <div className="grid w-full max-w-sm gap-6">
          <div>
            <Label className="mb-2">Full name</Label>
            <InputGroup>
              <InputGroupInput
                {...register("fullName", { required: true })}
                type="text"
                placeholder="Enter full name"
              />
              <InputGroupAddon>
                <User />
              </InputGroupAddon>
            </InputGroup>
            {errors.fullName && (
              <p className="text-red-500 pt-2 font-semibold">
                Full Name is required
              </p>
            )}
          </div>

          <div>
            <Label className="mb-2">Password</Label>
            <InputGroup>
              <InputGroupInput
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters!",
                  },
                  validate: {
                    hasUpper: (value) =>
                      /[A-Z]/.test(value) ||
                      "Must include at least 1 uppercase letter!",
                    hasLow: (value) =>
                      /[a-z]/.test(value) ||
                      "Must include at least 1 lowercase letter!",
                    hasNum: (value) =>
                      /\d/.test(value) || "Must include at least 1 number!",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
              />
              <InputGroupAddon>
                <LockKeyhole />
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
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Label className="mb-2">Phone</Label>
            <InputGroup>
              <InputGroupInput type="text" placeholder="+880.." />
              <InputGroupAddon>
                <Phone />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid w-full max-w-sm gap-6">
          <div>
            <Label className="mb-2">Email</Label>
            <InputGroup>
              <InputGroupInput
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email"
              />
              <InputGroupAddon>
                <MailIcon />
              </InputGroupAddon>
            </InputGroup>
            {errors.email && (
              <p className="text-red-500 pt-2 font-semibold">
                Email is required
              </p>
            )}
          </div>
          <div>
            <Label className="mb-2">Gender</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue
                  {...register("gender", { required: true })}
                  placeholder="Select a gender"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className="text-red-500 pt-2 font-semibold">
                Gender is required
              </p>
            )}
          </div>

          <div>
            <Label className="mb-2" htmlFor="picture">
              Upload image
            </Label>
            <Input id="picture" type="file" />
          </div>
        </div>
      </form>

      <p className="text-center text-sm text-base-content/70 mt-4">
        Already have an account?{" "}
        <Link
          href={"/login"}
          className="text-primary font-bold hover:underline transition-colors"
        >
          Log In
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
