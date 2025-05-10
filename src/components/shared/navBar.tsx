"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { HiOutlineMenu } from "react-icons/hi";
import clsx from "clsx";
import { Button } from "../ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="bg-white text-gray-800 fixed top-0 z-50 shadow-md w-full">
      <div className="flex items-center justify-between px-4 py-3 md:px-10 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Bae Travels Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-bold text-black">Bae Travels</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6">
          <nav className="flex gap-7 xl:gap-10 text-sm font-semibold">
            {navItems.map(({ name, href }) => {
              const isActive =
                href === "/blog"
                  ? pathname.startsWith("/blog")
                  : pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "transition-colors duration-200 hover:text-cyan-700",
                    isActive ? "text-cyan-700" : "text-gray-800"
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Button
            asChild
            className="text-cyan-700 bg-white border-1 border-cyan-700 px-5 py-2 text-sm font-semibold rounded-sm hover:bg-cyan-700 hover:text-white transition"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="sm:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              aria-label="Toggle menu"
              className="text-2xl text-cyan-800"
            >
              <HiOutlineMenu />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white text-gray-900 w-64 py-6 px-5"
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map(({ name, href }) => {
                  const isActive =
                    href === "/blog"
                      ? pathname.startsWith("/blog")
                      : pathname === href;

                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={handleNavClick}
                      className={clsx(
                        "text-[14px] font-medium transition-colors duration-200",
                        isActive ? "text-cyan-700" : "hover:text-cyan-700"
                      )}
                    >
                      {name}
                    </Link>
                  );
                })}

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className="text-cyan-700 text-center bg-white border-1 border-cyan-700 px-5 py-2 text-sm font-semibold rounded-sm hover:bg-cyan-700 hover:text-white transition"
                >
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
