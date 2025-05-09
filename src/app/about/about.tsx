"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Loader from "@/components/ui/loader";
import Image from "next/image";
import Footer from "@/components/shared/footer";


const AboutPage = () => {
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

  const data = [
    {
      title: "Customer First",
      desc: "Our top priority is making sure you have a smooth and happy journey.",
      emoji: "🤝",
    },
    {
      title: "Sustainable Travel",
      desc: "We promote responsible and eco-friendly tourism across the globe.",
      emoji: "🌱",
    },
    {
      title: "Affordable Luxury",
      desc: "We deliver unforgettable experiences at prices you’ll love.",
      emoji: "💸",
    },
  ];

  return (
    <>
    <div className="w-full bg-white px-4 md:px-12 py-20 text-gray-800">
      {/* Header Section */}
      <div className="text-left max-w-3xl mb-12">
        <h1 className="text-5xl font-extrabold text-cyan-700">
          About Bae Travels
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your ultimate travel companion — helping you explore, discover, and
          create unforgettable memories.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">🌍 Our Mission</h2>
          <p className="text-muted-foreground text-lg">
            At <span className="font-bold text-cyan-700">Bae Travels</span>, our
            mission is to make travel accessible, enjoyable, and stress-free for
            everyone. Whether you&apos;re planning a solo trip, romantic getaway, or
            family vacation — we&apos;ve got your back.
          </p>
        </div>
        <Image
        height={400}
        width={400}
          src="/images/mission.jpg"
          alt="Mission"
          className="rounded-xl shadow-lg object-cover w-full h-[280px]"
        />
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          💡 Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((val, idx) => (
            <Card
              key={idx}
              className="text-center hover:shadow-lg transition-all border border-gray-200 shadow-inner"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-2">{val.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                <p className="text-muted-foreground">{val.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          👨‍👩‍👧‍👦 Meet Our Team
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
          A group of passionate travel experts, explorers, and planners,
          dedicated to curating experiences that leave a mark.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="flex flex-col items-center space-y-3">
              <Image
              height={100}
              width={100}
                src={`/images/team${id}.jpg`}
                alt={`Team member ${id}`}
                className="w-28 h-28 object-cover rounded-full shadow-md flex justify-center items-center text-center"
              />
              <div>
                <h4 className="font-semibold">Member {id}</h4>
                <p className="text-sm text-muted-foreground">Travel Expert</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-12">
        <h3 className="text-2xl font-semibold mb-2">
          Ready to start your next adventure?
        </h3>
        <p className="text-muted-foreground mb-4">
          Explore our handpicked travel packages and plan your dream trip today!
        </p>
        <Button
          asChild
          className="px-8 py-5 text-white bg-cyan-700 hover:bg-cyan-800 transition duration-200"
        >
          <Link href="/contact">Plan Trip</Link>
        </Button>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;
