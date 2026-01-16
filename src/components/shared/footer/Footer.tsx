import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import Logo from "../logo/Logo";
import ScrollToTop from "../ScrollToTop";


const footerSections = [
  {
    title: "Quick Links",
    links: [
      { title: "Products", href: "#" },
      { title: "About", href: "#" },
      { title: "Pricing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", href: "#" },
      { title: "Newsletter", href: "#" },
      { title: "Support", href: "#" },
    ],
  },
];


export const Footer = () => {
  return (
    <footer className="bg-[#ebfdf5] text-gray-700 border-t border-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        {/* Top Grid */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10">
          {/* Logo + Description */}
          <div className="col-span-full xl:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              SmartGarden connects customers with gardening products through a
              structured system where admins process orders and delivery
              personnel ensure doorstep delivery.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map(({ title, links }) => (
            <div key={title}>
              <h6 className="font-semibold text-gray-900 dark:text-white">
                {title}
              </h6>
              <ul className="mt-6 space-y-3">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2">
            <h6 className="font-semibold text-gray-900 dark:text-white">
              Stay up to date
            </h6>
            <form className="mt-6 flex items-center gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="grow max-w-64 bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-500"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="border-gray-200 dark:border-gray-700" />

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5">
          {/* Copyright */}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="/"
              target="_blank"
              className="hover:text-green-600 dark:hover:text-green-400"
            >
              SmartGarden
            </Link>
            . All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5 text-gray-500 dark:text-gray-400">
              <Link
                href="#"
                target="_blank"
                className="hover:text-blue-500 dark:hover:text-blue-400"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-pink-500 dark:hover:text-pink-400"
              >
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-purple-500 dark:hover:text-purple-400"
              >
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          <ScrollToTop></ScrollToTop>
            <div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
