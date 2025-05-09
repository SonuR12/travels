"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader"; // Import the Loader component

const posts = [
  {
    title: "Discover the Hidden Gems of India",
    slug: "hidden-gems-india",
    date: "May 5, 2025",
    image: "/images/taj.jpg",
    excerpt:
      "Explore lesser-known destinations that offer breathtaking beauty and rich culture...",
    tag: "Travel Tips",
    readTime: "5 min read",
  },
  {
    title: "Top 10 Temples You Must Visit in South India",
    slug: "temples-south-india",
    date: "April 28, 2025",
    image: "/images/temple.jpg",
    excerpt:
      "South India is a treasure trove of architectural wonders. Here are ten must-visit temples...",
    tag: "Spiritual",
    readTime: "7 min read",
  },
  {
    title: "A Foodie's Guide to Indian Street Food",
    slug: "indian-street-food",
    date: "April 20, 2025",
    image: "/images/redfort.jpg",
    excerpt:
      "From spicy chaat to sweet jalebis, here's what you must try in the bustling streets of India...",
    tag: "Food & Culture",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
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
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <Loader />
      </div>
    );
  }

  return (
    <main className="px-4 md:px-12 bg-gray-50 py-20 min-h-screen">
      {/* Hero */}
      <section className="text-left mb-12">
        <h1 className="text-4xl font-bold text-cyan-700">Bae Travels Blog</h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          Dive into inspiring stories, travel tips, and cultural discoveries
          from across India. Your next adventure starts here.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow  border border-gray-200 duration-300 overflow-hidden p-0"
          >
            <div className="relative h-60 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>{post.tag}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-lg font-semibold text-cyan-800">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-4">
              <Button
                asChild
                size="lg"
                className="button-gradient text-white group self-center bg-cyan-700 hover:bg-cyan-800"
              >
                <Link href={`/blog/${post.slug}`}>
                  Read more
                  <Image
                    width={20}
                    height={20}
                    src="/svg/arrow_right_icon.svg"
                    alt="Arrow right"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
