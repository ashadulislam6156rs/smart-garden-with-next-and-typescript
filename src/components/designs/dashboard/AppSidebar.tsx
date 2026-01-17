"use client";

import * as React from "react";
import { LifeBuoy, Send, Settings2, Blocks } from "lucide-react";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./NavMain";
import { NavSecondary } from "./NavSecondary";
import { NavUser } from "./NavUser";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {


    const { user } = useAuth();

    const data = {
      user: {
        name: user?.name || "",
        email: user?.email || "",
        avatar: user?.image || "",
      },
      navMain: [
        {
          title: "Products Management",
          url: "dashboard",
          icon: Blocks,
          isActive: true,
          items: [
            {
              title: "Create product",
              url: "/dashboard/create-product",
            },
            {
              title: "All products",
              url: "/dashboard/all-products",
            },
            // {
            //   title: "Order history",
            //   url: "#",
            // },
          ],
        },
        // {
        //   title: "Users Management",
        //   url: "#",
        //   icon: FaUsers,
        //   items: [
        //     {
        //       title: "Manage role",
        //       url: "#",
        //     },
        //     {
        //       title: "All Users",
        //       url: "#",
        //     },
        //     {
        //       title: "Report clients",
        //       url: "#",
        //     },
        //   ],
        // },
        // {
        //   title: "Order Management",
        //   url: "#",
        //   icon: MdOutlineShoppingCartCheckout,
        //   items: [
        //     {
        //       title: "Order approve/reject",
        //       url: "#",
        //     },
        //     {
        //       title: "Delivery man assign",
        //       url: "#",
        //     },
        //     {
        //       title: "Order status update",
        //       url: "#",
        //     },
        //   ],
        // },
        // {
        //   title: "Settings",
        //   url: "#",
        //   icon: Settings2,
        //   items: [
        //     {
        //       title: "General",
        //       url: "#",
        //     },
        //     {
        //       title: "Edit profile",
        //       url: "#",
        //     },
        //   ],
        // },
      ],
      // navSecondary: [
      //   {
      //     title: "Support",
      //     url: "#",
      //     icon: LifeBuoy,
      //   },
      //   {
      //     title: "Feedback",
      //     url: "#",
      //     icon: Send,
      //   },
      // ],
    };

    

  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image
                    alt="logo"
                    src={"/favicon.ico"}
                    width={35}
                    height={35}
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Smart Garden</span>
                  <span className="truncate text-xs">Easy Ordering</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data?.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
