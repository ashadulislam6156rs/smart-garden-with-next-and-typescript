"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { Calendar, Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "../logo/Logo";
import LogInButton from "@/components/auth/LogInButton";

export const Header = () => {
  const router = useRouter();
  const { isAuthenticated, logout, user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);


  const menuItems = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
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
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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
        <div className="hidden md:flex items-center gap-4">
          {/* Cart Button - Always Visible */}
          {isAuthenticated && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleNavigation("/cart")}
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          )}

          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="h-4 w-4 text-green-600" />
                <span className="font-semibold text-green-700">
                  {user?.name}
                </span>
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
              <SheetTitle className="flex items-center gap-2 text-green-700 font-bold">
                <Calendar className="h-5 w-5 text-green-600" />
                EventHub
              </SheetTitle>
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

              {/* Mobile Cart Button */}
              {isAuthenticated && (
                <Button
                  variant="ghost"
                  className="w-full flex items-center gap-2 justify-start text-gray-700 hover:text-green-700 hover:bg-green-100"
                  onClick={() => handleNavigation("/cart")}
                >
                  <ShoppingCart className="h-5 w-5 text-green-600" />
                  Cart
                </Button>
              )}

              {/* Mobile Auth */}
              <div className="border-t pt-4 space-y-2">
                {isAuthenticated ? (
                  <>
                    <div className="px-3">
                      <div className="text-sm font-medium text-green-700">
                        {user?.name}
                      </div>
                      <div className="text-xs text-gray-500">{user?.email}</div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-red-500 text-red-600 hover:bg-red-50"
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="w-full border-blue-500 text-blue-600 hover:bg-blue-50"
                      onClick={() => handleNavigation("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => handleNavigation("/signup")}
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
    </header>
  );
};
