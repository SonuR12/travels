"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/ui/loader"; // Import the Loader component
import ContactForm from "@/components/shared/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a 0.5-second loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    // Show the Loader component while loading
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-zinc-900">
        <Loader />
      </div>
    );
  }

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

  return (
    <div className="w-full min-h-screen bg-white dark:bg-zinc-900 px-4 py-20 md:px-20 text-gray-800 dark:text-white">
      {/* Header */}
      <div className="text-left mb-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-700 dark:text-cyan-400">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-zinc-300">
          We&apos;d love to hear from you. Send us a message or reach out using the
          info below.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}

        <ContactForm />

        {/* Contact Info */}
        <div className="flex flex-col justify-center text-center sm:text-left items-center md:items-start space-y-8 w-full">
          <div>
            <h3 className="text-xl font-semibold mb-1 flex items-center justify-center md:justify-start gap-2">
              <Image
                height={20}
                width={20}
                src="/svg/location.svg"
                alt="location"
              />
              Address
            </h3>
            <Link
              href="https://www.google.com/maps?q=123+Travel+Lane,+Wander+City,+Earth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-zinc-300 hover:text-cyan-500 transition hover:underline"
            >
              123 Travel Lane, Wander City, Earth
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1 flex items-center justify-center md:justify-start gap-2">
              <Image
                height={25}
                width={25}
                src="/svg/call.svg"
                alt="phone"
              />
              Phone
            </h3>
            <Link
              href="tel:+919905757864"
              className="text-gray-600 dark:text-zinc-300 hover:text-cyan-500 transition hover:underline"
            >
              +91 99057 57864
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1 flex items-center justify-center md:justify-start gap-2">
              <Image
                height={25}
                width={25}
                src="/svg/gmail.svg"
                alt="email"
              />
              Email
            </h3>
            <Link
              href="mailto:support@baetravels.com"
              className="text-gray-600 dark:text-zinc-300 hover:text-cyan-500 transition hover:underline"
            >
              support@baetravels.com
            </Link>
          </div>

          <div className="pt-6">
            <h3 className="text-xl font-semibold mb-2 text-center md:text-left">🌐 Follow Us</h3>
            <div className="flex gap-4 items-center justify-center md:justify-start">
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
                    className="rounded-full border border-gray-200 hover:bg-gray-200 text-white transition hover:scale-110 hover:cursor-pointer p-2"
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
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16 w-full">
        <Card className=" border border-gray-200 shadow-inner p-0">
          <CardContent className="p-0">
            <iframe
              title="Google Map"
              className="w-full h-72 rounded-xl shadow-xl border-none"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.094822415757!2d144.96305781532114!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43cbbf4e09%3A0xb6f5a8aef73a8697!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1613982912372!5m2!1sen!2sin"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
