"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Mehta",
    image: "/testimonials/aarav.jpg",
    rating: 5,
    review:
      "Amazing experience! Everything was organized perfectly and the views were breathtaking.",
  },
  {
    name: "Emily Clark",
    image: "/testimonials/emily.jpg",
    rating: 4,
    review:
      "Had a lovely time exploring with this travel agency. Highly recommend!",
  },
  {
    name: "Rajiv Kapoor",
    image: "/testimonials/rajiv.jpg",
    rating: 5,
    review:
      "Truly a trip to remember. Fantastic planning and super helpful guides.",
  },
  {
    name: "Sofia Martinez",
    image: "/testimonials/sofia.jpg",
    rating: 5,
    review:
      "Couldn’t have asked for a better travel agency. Everything went smoothly.",
  },
  {
    name: "Liam Nguyen",
    image: "/testimonials/liam.jpg",
    rating: 4,
    review:
      "The destinations were beautiful and the arrangements were top-notch.",
  },
];

const autoplayOptions = {
  delay: 3000,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
};

export default function TestimonialCarousel() {
  const plugin = useRef(Autoplay(autoplayOptions));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [plugin.current]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  if (!isClient) return null;

  return (
    <Card className="px-6 pt-8 pb-6 mx-4 mb-10 sm:m-10 border border-gray-200 shadow-inner">
      <h2 className="text-xl font-semibold text-gray-800">
        Customer Testimonials
      </h2>
      <CardContent className="px-0">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="embla__slide flex-shrink-0 w-[80%] sm:w-[60%] md:w-[33%] px-3"
              >
                <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-xl shadow-md h-full">
                  <div className="flex items-center mb-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-lg text-gray-900 dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-yellow-500">{"🌟".repeat(t.rating)}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-zinc-200 italic">
                    "{t.review}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center gap-4 mt-6">
          {/* <Button
            onClick={scrollPrev}
            className="bg-gray-100 hover:bg-gray-300 dark:bg-zinc-700 px-3 py-1 rounded-full"
          >
            <FaAngleLeft className="text-black dark:text-white" />
          </Button>
          <Button
            onClick={scrollNext}
            className="bg-gray-100 hover:bg-gray-300 dark:bg-zinc-700 px-3 py-1 rounded-full"
          >
            <FaAngleRight className="text-black dark:text-white" />
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );
}

