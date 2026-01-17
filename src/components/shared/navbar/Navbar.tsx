"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "../logo/Logo";
import LogInButton from "@/components/auth/LogInButton";
import Image from "next/image";


export const Header = () => {
  const router = useRouter();
  const { isAuthenticated, logout, user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "Dashboard", url: "/dashboard/overview" },
    { title: "About", url: "/about" },
  ];

  const handleNavigation = (url: string) => {
    router.push(url);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 bg-[#ebfdf5] z-50 w-full border-b shadow-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-1">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center  gap-4">
          {/* Cart Button - Always Visible */}
          {isAuthenticated && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleNavigation("/cart")}
              className="text-white hover:text-green-600 cursor-pointer bg-green-600 rounded-full hover:bg-green-00 transition"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          )}

          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2  text-sm text-gray-600">
                {user?.image ? (
                  <>
                    <div className="rounded-full overflow-hidden border-green-400 border-2 w-9 h-9 flex justify-center items-center">
                      <Image
                        src={`${user?.image}`}
                        width={40}
                        height={40}
                        alt="user image"
                      />
                    </div>
                  </>
                ) : (
                  <User className="h-4 w-4 text-green-600" />
                )}

                {/* <span>{user?.role}</span> */}
              </div>
              <Button
                size="sm"
                onClick={logout}
                className="bg-red-500 cursor-pointer hover:bg-red-600 text-white"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <LogInButton></LogInButton>
              <Button
                size="sm"
                onClick={() => handleNavigation("/register")}
                className="bg-green-600 cursor-pointer hover:bg-green-700 text-white"
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
        {/* ======> mobile */}
        <div className="md:hidden flex items-center gap-1">
          {/* Mobile device for cart icon */}
          <div className="md:hidden flex justify-end">
            {isAuthenticated && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleNavigation("/cart")}
                className=" bg-green-600 text-white rounded-full hover:text-green-600 hover:bg-green-50 transition"
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
            )}
          </div>
          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-green-600"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] bg-gray-50">
              <SheetHeader>
                <Logo></Logo>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-6">
                {/* Mobile Nav */}
                <nav className="flex flex-col gap-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.url}
                      onClick={() => handleNavigation(item.url)}
                      className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>

                {/* Mobile Auth */}
                <div className="border-t pt-4 space-y-2 px-2">
                  {isAuthenticated ? (
                    <>
                      <div className="pr-3 flex items-center gap-2">
                        {user?.image ? (
                          <>
                            <div className="rounded-full overflow-hidden border-green-400 border-2 w-9 h-9 flex justify-center items-center">
                              <Image
                                src={`${user?.image}`}
                                width={40}
                                height={40}
                                alt="user image"
                              />
                            </div>
                          </>
                        ) : (
                          <User className="h-4 w-4 text-green-600" />
                        )}
                        <div>
                          <div className="text-sm font-medium text-green-700">
                            {user?.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {user?.email}
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-2 border-red-500 text-red-600 hover:bg-red-50"
                        onClick={logout}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <LogInButton></LogInButton>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => handleNavigation("/register")}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
