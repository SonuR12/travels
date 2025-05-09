import React from "react";
import Image from "next/image";
import { Card } from "../ui/card";

const images = [
  {
    src: "/images/GoldenTemple.jpg",
    alt: "Golden Temple",
    description: "Amritsar’s iconic spiritual site in Punjab.",
  },
  {
    src: "/images/redfort.jpg",
    alt: "Red Fort",
    description: "A historical fort in Delhi from Mughal era.",
  },
  {
    src: "/images/sculpture.jpg",
    alt: "Sculpture",
    description: "Intricate ancient Indian stone artwork.",
  },
  {
    src: "/images/taj.jpg",
    alt: "Taj Mahal",
    description: "World-famous white marble mausoleum in Agra.",
  },
  {
    src: "/images/sculpture.jpg",
    alt: "Sculpture",
    description: "Another view of beautiful Indian carving.",
  },
  {
    src: "/images/temple.jpg",
    alt: "Temple",
    description: "Traditional Indian temple architecture.",
  },
  {
    src: "/images/hawaMahal.jpg",
    alt: "Hawa Mahal",
    description: "The Palace of Winds in Jaipur, Rajasthan.",
  },
  {
    src: "/images/ttemple.jpg",
    alt: "Temple",
    description: "Peaceful and spiritual temple view.",
  },
];

export default function ImageSection() {
  return (
    <Card className="bg-white pt-10 px-4 md:px-7 shadow-inner border border-gray-200 mx-4 my-10 sm:m-10 gap-0">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          Popular Destinations
        </h2>
        <span className="text-sm text-gray-500">Scroll to explore</span>
      </div>

      {/* Image Tiles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 h-full overflow-y-auto px-2 py-5 custom-scroll">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
              <span className="text-white text-sm font-semibold">
                {image.alt}
              </span>
              <p className="text-white text-xs">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
