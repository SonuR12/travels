"use client";

import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Footer from "@/components/shared/footer";

interface BlogSection {
  title?: string;
  subhead?: string;
  content?: string;
  text?: string;
}

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
  head: BlogSection[];
  tag: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    title: "Unveiling the Hidden Gems of India: Beyond the Taj Mahal",
    slug: "hidden-gems-india",
    date: "May 5, 2025",
    image: "/images/taj.jpg",
    excerpt:
      "Explore India's lesser-known wonders beyond the Taj Mahal—from serene valleys to secluded islands that promise unforgettable adventures.",
    head: [
      {
        title: "Introduction",
        content:
          "India is a land of endless beauty, and while iconic landmarks like the Taj Mahal in Agra attract millions, there are hidden gems across the country that remain off the beaten path. These underrated destinations offer breathtaking landscapes, vibrant cultures, and unforgettable experiences.",
      },
      {
        subhead: "Spiti Valley (Himachal Pradesh)",
        text: "A cold desert mountain valley known for its monasteries, stunning landscapes, and adventure opportunities.",
      },
      {
        subhead: "Gokarna (Karnataka)",
        text: "A peaceful beach town offering serene beaches, yoga retreats, and spiritual temples.",
      },
      {
        subhead: "Majuli (Assam)",
        text: "The world's largest river island, known for its vibrant culture and Neo-Vaishnavite monasteries.",
      },
      {
        subhead: "Chopta (Uttarakhand)",
        text: "Often called the 'Mini Switzerland of India,' Chopta is a paradise for trekkers and nature lovers.",
      },
    ],
    tag: "Travel Tips",
    readTime: "5 min read",
  },
  {
    title: "10 Temples to Visit Across South India",
    slug: "temples-south-india",
    date: "April 28, 2025",
    image: "/images/temple.jpg",
    excerpt:
      "South India is a treasure trove of architectural and spiritual wonders. Discover 10 must-visit temples that reflect its divine legacy.",
    head: [
      {
        title: "Introduction",
        content:
          "South India is home to some of the most magnificent temples in the world. These sacred sites are not only centers of devotion but also epitomes of architectural brilliance and cultural richness.",
      },
      {
        title: "Top Temples",
        subhead: "Meenakshi Temple (Madurai, Tamil Nadu)",
        text: "Known for its towering gopurams and intricate carvings, this temple is a masterpiece of Dravidian architecture.",
      },
      {
        subhead: "Brihadeeswarar Temple (Thanjavur, Tamil Nadu)",
        text: "A UNESCO World Heritage Site built over 1,000 years ago, showcasing the grandeur of the Chola dynasty.",
      },
      {
        subhead: "Virupaksha Temple (Hampi, Karnataka)",
        text: "A functional temple amidst the ruins of Hampi, with a history dating back to the 7th century.",
      },
      {
        subhead: "Padmanabhaswamy Temple (Thiruvananthapuram, Kerala)",
        text: "Famous for its opulence and hidden treasures, this temple is a must-visit for spiritual seekers.",
      },
      {
        subhead: "Ramanathaswamy Temple (Rameswaram, Tamil Nadu)",
        text: "Known for its longest temple corridor in the world, this temple is linked to the Ramayana.",
      },
      {
        subhead: "Sri Venkateswara Temple (Tirupati, Andhra Pradesh)",
        text: "One of the richest temples in the world, dedicated to Lord Venkateswara.",
      },
      {
        subhead: "Chennakesava Temple (Belur, Karnataka)",
        text: "A fine example of Hoysala architecture, known for its intricate carvings.",
      },
      {
        subhead: "Thillai Nataraja Temple (Chidambaram, Tamil Nadu)",
        text: "Dedicated to Lord Shiva as Nataraja, this temple is a symbol of cosmic dance.",
      },
      {
        subhead: "Murudeshwar Temple (Karnataka)",
        text: "Famous for its towering Shiva statue and scenic coastal location.",
      },
      {
        subhead: "Suchindram Thanumalayan Temple (Tamil Nadu)",
        text: "Known for its unique representation of the Trinity—Brahma, Vishnu, and Shiva.",
      },
    ],
    tag: "Spiritual",
    readTime: "7 min read",
  },
  {
    title: "The Ultimate Guide to Indian Street Food at the Red Fort",
    slug: "indian-street-food",
    date: "April 20, 2025",
    image: "/images/redfort.jpg",
    excerpt:
      "Dive into the bustling lanes near Delhi’s Red Fort where legendary street food—from spicy chaat to sweet jalebis—awaits your taste buds.",
    head: [
      {
        title: "Introduction",
        content:
          "Indian street food is a culinary adventure like no other. Near iconic landmarks such as the Red Fort in Delhi, the streets buzz with the aroma of chaats, kebabs, and jalebis. Each dish tells a story of tradition, taste, and regional pride.",
      },
      {
        title: "Regional Highlights",
        subhead: "Chaat (Delhi)",
        text: "Spicy, tangy, and crunchy—includes aloo tikki, golgappa, and dahi bhalla found in Chandni Chowk near the Red Fort.",
      },
      {
        subhead: "Paratha (Amritsar)",
        text: "Stuffed with paneer, aloo, or gobhi, best served with lassi in Punjab’s dhabas.",
      },
      {
        title: "More Highlights",
        subhead: "Vada Pav (Mumbai)",
        text: "The iconic Indian burger of Maharashtra.",
      },
      {
        subhead: "Dabeli (Gujarat)",
        text: "A sweet and spicy bun stuffed with mashed potatoes, chutneys, and sev.",
      },
    ],
    tag: "Food & Culture",
    readTime: "4 min read",
  },
];

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-2xl">
          <p className="text-xl text-gray-700 mb-6">Post not found</p>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Return to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const suggestedPosts = posts.filter((p) => p.slug !== slug);

  return (
    <>
    <main className="bg-gradient-to-r from-purple-50 to-pink-50 pt-20 pb-10 px-4 sm:px-10">
  {/* Main Blog Post */}
  <Card className="mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl p-0 border border-gray-200">
    {/* Header Image */}
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">{post.title}</h1>
        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center text-sm sm:text-base text-white/90">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">{post.tag}</span>
        </div>
      </div>
    </div>

    {/* Content */}
    <CardContent className="px-4 sm:px-8 mt-6">
      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
        {post.head.map((section, index) => (
          <div key={index} className="mb-6">
            {section.title && <h2 className="text-lg sm:text-xl font-bold mb-2">{section.title}</h2>}
            {section.content && <p>{section.content}</p>}
            {section.subhead && (
              <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800">{section.subhead}</h3>
            )}
            {section.text && <p className="text-gray-600">{section.text}</p>}
          </div>
        ))}
      </div>
    </CardContent>

    {/* Footer */}
    <CardFooter className="p-4 px-6 bg-gray-100">
      <Link
        href={`/blog`}
        className="text-cyan-600 font-medium hover:underline text-center sm:text-left block w-full"
      >
        Back to all posts
      </Link>
    </CardFooter>
  </Card>

  {/* Suggested Posts */}
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
    {suggestedPosts.map((suggested) => (
      <Card
        key={suggested.slug}
        className="group/card bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-200 transition-shadow duration-300 overflow-hidden p-0"
      >
        <div className="relative h-48 sm:h-60 w-full">
          <Image
            src={suggested.image}
            alt={suggested.title}
            fill
            className="object-cover group-hover/card:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="px-4 py-2 sm:p-4 ">
          <h2 className="text-base sm:text-lg font-semibold text-cyan-800">{suggested.title}</h2>
          <p className="text-sm text-gray-600 mt-2">{suggested.excerpt}</p>
        </CardContent>
        <CardFooter className="sm:px-4 sm:pb-4 p-4">
          <Button
            asChild
            size="lg"
            className="text-white bg-cyan-700 hover:bg-cyan-800 w-full"
          >
            <Link
              href={`/blog/${suggested.slug}`}
              className="flex items-center justify-center group/button"
            >
              Read more
              <Image
                width={20}
                height={20}
                src="/svg/arrow_right_icon.svg"
                alt="Arrow right"
                className="transition-transform duration-300 ml-2 group-hover/button:translate-x-1"
              />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    ))}
  </section>
</main>
<Footer />
</>
  );
}
