"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/app/loading";

// Define a type for the image data
type ImageData = {
  Image: string;
  city: string;
};

const images: ImageData[] = [
  { Image: "/carousal/taj.jpg", city: "Agra" },
  { Image: "/carousal/redfort.jpg", city: "Delhi" },
  // { Image: "/carousal/HawaMahal.jpg", city: "Rajasthan" },
  { Image: "/carousal/GoldenTemple.jpg", city: "Amritsar" },
  { Image: "/carousal/temple.jpg", city: "Andhra Pradesh" },
];

export function HeroSection() {
  const [autoplayPlugin, setAutoplayPlugin] = React.useState<ReturnType<typeof Autoplay>>(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [data, setData] = React.useState<ImageData[]>([]); // State to store fetched data
  const [error, setError] = React.useState<string | null>(null); // Error handling state
  const [isLoaded, setIsLoaded] = React.useState(false); // Track if data is loaded

  React.useEffect(() => {
    // Simulate a 1-second loading delay and fetch data
    const fetchData = async () => {
      try {
        // Simulate fetching data (replace with actual API call)
        const response = await new Promise<{ success: boolean; data: ImageData[] }>((resolve) =>
          setTimeout(() => resolve({ success: true, data: images }), 500)
        );
        if (response.success) {
          setData(response.data); // Store fetched data
          setIsLoaded(true); // Mark data as loaded
        } else {
          setError("Failed to load data");
        }
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    setSelectedIndex(api.selectedScrollSnap());

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const resetAutoplay = (delay: number) => {
    const newPlugin = Autoplay({ delay, stopOnInteraction: true });
    setAutoplayPlugin(newPlugin);
  };

  const stopAutoplay = () => resetAutoplay(3000);
  const restoreAutoplay = () => resetAutoplay(2000);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto relative">
      {/* Hero */}
      {isLoaded ? (
        <Carousel
          plugins={[autoplayPlugin]}
          opts={{ loop: true }}
          setApi={setApi}
          onMouseEnter={stopAutoplay}
          onMouseLeave={restoreAutoplay}
          className="w-full relative"
        >
          <CarouselContent>
            {data?.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-0 rounded-none border-none">
                  <CardContent className="relative h-[50%] md:h-[50vh] xl:h-[75vh] p-0 overflow-hidden flex items-center justify-start before:content-[''] before:absolute before:inset-0 before:shadow-[inset_0_0_100px_60px_rgba(0,0,0,0.3)] before:z-[5]">
                    {/* Image layer using Next.js Image */}
                    <Image
                      src={item.Image}
                      alt={`image`}
                      fill
                      className="object-fit w-full h-full z-0"
                      priority
                    />

                    {/* Optional overlay (for darker text background) */}
                    <div className="absolute inset-0  z-10" />

                    {/* Hero Text */}
                    <div className="relative z-20 px-4 sm:px-10 py-8 text-white space-y-6 sm:space-y-8 animate-fade-in">
                      {/* Heading */}
                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow">
                        Welcome to{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                          Bae Travels
                        </span>
                      </h1>

                      {/* Subheading */}
                      <div className="text-3xl sm:text-5xl font-bold leading-tight drop-shadow-lg">
                        Explore The World
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-md md:text-lg font-light leading-relaxed max-w-lg">
                        Live the trips exploring the world — discover paradises,
                        <br className="hidden sm:block" />
                        islands, mountains and more. Start your unforgettable
                        journey today.
                      </p>

                      {/* CTA Button */}
                      <Button
                        asChild
                        className="button-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-md text-sm sm:text-md shadow-lg hover:scale-105 transform transition-all duration-300 group"
                      >
                        <Link
                          href="/contact"
                          className="flex items-center gap-2"
                        >
                          Plan Trip
                          <Image
                            width={20}
                            height={20}
                            src="/svg/arrow_right_icon.svg"
                            alt="Arrow right"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="loader"><Loader /></div> {/* Loading spinner or text */}
        </div>
      )}

      {/* Pagination for the carousel */}
      <div className="absolute bottom-4 right-0 transform translate-x-[-5%] gap-3 text-center z-20 hidden sm:flex">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-16 h-16 rounded overflow-hidden border-1 relative cursor-pointer shadow-md group ${
              selectedIndex === index
                ? "ring-2 ring-black"
                : "hover:ring-2 hover:ring-black"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${item.Image})` }}
            />
            <span className="absolute bottom-1 left-1 right-1 text-[10px] font-semibold px-1 py-0.5 rounded text-white">
              {item.city}
            </span>
          </div>
        ))}
      </div>

      <div className="gap-3 text-center z-20 sm:hidden flex items-center justify-center mt-2">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded overflow-hidden border-1 relative cursor-pointer shadow-md group ${
              selectedIndex === index
                ? "ring-1 ring-black bg-black"
                : "border-gray-300 hover:ring-2 hover:ring-black opacity-75"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
