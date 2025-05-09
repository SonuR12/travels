import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const socialIcons = [
    { src: "/svg/facebook.svg", alt: "Facebook", href: "https://facebook.com" },
    { src: "/svg/twitter.svg", alt: "Twitter", href: "https://twitter.com" },
    {
      src: "/svg/instagram.svg",
      alt: "Instagram",
      href: "https://instagram.com",
    },
    { src: "/svg/linkedin.svg", alt: "LinkedIn", href: "https://linkedin.com" },
  ];

  // const link = [
  //   { href: "/", label: "Home" },
  //   { href: "/about", label: "About" },
  //   { href: "/blog", label: "Blog" },
  //   { href: "/contact", label: "Contact" },
  // ];

  const touch = [
    {
      href: "mailto:support@BaeTravels.com",
      label: "support@BaeTravels.com",
      icon: "/svg/gmail.svg",
      alt: "gmail",
    },
    {
      href: "tel:+919876543210",
      label: "+91 9876543210",
      icon: "/svg/call.svg",
      alt: "phone",
    },
    {
      href: "/https://www.google.com/maps?q=Delhi,+India",
      label: " Delhi, India",
      icon: "/svg/location.svg",
      alt: "location",
    },
  ];

  return (
    <footer className="bg-cyan-950/90 backdrop-blur-md text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-20">
        {/* Brand + About */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Bae Travels</h2>
          <p className="text-sm text-cyan-500 leading-relaxed w-3/4">
            Your next adventure begins here. Explore the world with tailored
            travel experiences and 24/7 expert guidance.
          </p>
          <div className="mt-6 flex gap-3">
            {socialIcons.map((icon, i) => (
              <Link
                href={icon.href}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-cyan-700 hover:bg-cyan-800 text-white hover:text-cyan-400 transition hover:scale-110 p-2"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={25}
                    height={25}
                    className="object-fill"
                  />
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Group: Quick Links + Get in Touch */}
        <div className="flex flex-col sm:flex-row gap-8 flex-2 justify-between w-full sm:w-auto">
          {/* Quick Links
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-1 text-cyan-200 text-sm">
              {link.map((item, i) => (
                <li key={i}>
                  <Button
                    asChild
                    variant="link"
                    className="text-cyan-500 hover:text-cyan-400 p-0 h-auto text-sm font-normal transition"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="text-sm text-cyan-500 space-y-3">
              {touch.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Image
                    height={20}
                    width={20}
                    src={item.icon}
                    alt={item.alt}
                    className="inline-block"
                    priority
                  />
                  {""}
                  <Link
                    href={item.href}
                    className="hover:text-cyan-400 transition hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-cyan-800 pt-6 text-sm text-cyan-500 text-center">
        © {new Date().getFullYear()} Bae Travels. All rights reserved.
      </div>
    </footer>
  );
}
