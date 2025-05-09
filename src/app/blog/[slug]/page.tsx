import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

// Sample posts data with expanded content for slug
const posts = [
  {
    title: "Discover the Hidden Gems of India",
    slug: "hidden-gems-india",
    date: "May 5, 2025",
    image: "/images/taj.jpg",
    excerpt: "Explore lesser-known destinations that offer breathtaking beauty and rich culture...",
    content: `
      India is a land of endless beauty, and while places like Delhi, Mumbai, and Agra are often at the forefront of tourism, there are hidden gems that remain off the beaten path.
      These places boast breathtaking landscapes, vibrant cultures, and stunning architecture. Whether you're seeking peace in the serene hills or adventure in untrodden paths, India's hidden gems promise unforgettable experiences.
      From the tranquil valley of Spiti to the mesmerizing beaches of Gokarna, these destinations have much to offer. Discover the hidden treasures that will make you fall in love with India all over again.
    `,
    tag: "Travel Tips",
    readTime: "5 min read",
  },
  {
    title: "Top 10 Temples You Must Visit in South India",
    slug: "temples-south-india",
    date: "April 28, 2025",
    image: "/images/temple.jpg",
    excerpt: "South India is a treasure trove of architectural wonders. Here are ten must-visit temples...",
    content: `
      South India is known for its architectural brilliance and spiritual significance. The temples of this region are not only places of worship but also masterpieces that showcase intricate carvings, towering gopurams, and centuries-old history.
      From the iconic Meenakshi Temple in Madurai to the majestic Brihadeeswarar Temple in Thanjavur, each temple tells a unique story. These structures are also a testament to the engineering marvels of ancient India.
      Whether you're a history enthusiast or someone seeking spiritual solace, South India's temples offer a glimpse into India's glorious past and divine presence.
    `,
    tag: "Spiritual",
    readTime: "7 min read",
  },
  {
    title: "A Foodie's Guide to Indian Street Food",
    slug: "indian-street-food",
    date: "April 20, 2025",
    image: "/images/redfort.jpg",
    excerpt: "From spicy chaat to sweet jalebis, here's what you must try in the bustling streets of India...",
    content: `
      Indian street food is an explosion of flavors, colors, and textures. From crispy samosas to spicy chaat, the streets of India offer an unforgettable culinary experience that excites the senses.
      The best part about Indian street food is its accessibility. You'll find vendors selling snacks on every street corner, from bustling markets to peaceful alleyways.
      Each region in India has its own unique flavors. In Delhi, savor the tangy golgappas and dahi puri, while in Mumbai, enjoy pav bhaji and bhel puri. No matter where you go, the food never disappoints!
      This guide will take you on a culinary journey across India's vibrant street food scene and help you discover some hidden gems along the way.
    `,
    tag: "Food & Culture",
    readTime: "4 min read",
  },
]

// Helper function to get post by slug
const getPostBySlug = (slug: string) => {
  return posts.find((post) => post.slug === slug)
}

// Generate metadata for the blog post
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)

  // If post doesn't exist, return a default metadata
  if (!post) {
    return {
      title: "Post Not Found | India Travel Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | India Travel Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: [post.tag],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound() // Show a 404 page if the post is not found
  }

  // Filter out the current post to display suggested posts
  const suggestedPosts = posts.filter((suggestedPost) => suggestedPost.slug !== post.slug)

  return (
    <main className="px-4 md:px-12 py-12 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            objectFit="cover"
            className="opacity-60"
          />
        </div>
        <div className="relative z-10 text-center text-black">
          <h1 className="text-5xl font-extrabold">{post.title}</h1>
          <p className="mt-4 text-lg font-light">{post.excerpt}</p>
          <p className="mt-2 text-sm">
            {post.date} | {post.readTime}
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="w-full space-y-8">
        <Card className="bg-white rounded-xl shadow-lg overflow-hidden pt-6 p-0  border border-gray-200">
          <CardContent className="p-6">
            <div className="text-gray-800 leading-relaxed space-y-6">
              {/* Fixed Image Container */}
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              </div>

              {/* Blog Content */}
              <p>{post.content}</p>

              <div className="mt-6">
                <p className="text-lg font-semibold">Explore more:</p>
                <ul className="list-disc pl-5">
                  <li>Discover the wonders of historical forts.</li>
                  <li>Learn about ancient art forms still practiced in India.</li>
                  <li>Experience the mesmerizing natural beauty of unexplored places.</li>
                </ul>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-4 bg-gray-100">
            <a href={`/blog`} className="text-cyan-600 font-medium hover:underline text-center block">
              Back to all posts
            </a>
          </CardFooter>
        </Card>
      </section>

      {/* Suggested Posts */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {suggestedPosts.map((post) => (
          <Card
            key={post.slug}
            className="bg-white rounded-xl shadow-sm hover:shadow-xl  border border-gray-200 transition-shadow duration-300 overflow-hidden p-0 group"
          >
            <div className="relative h-60 w-full">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-cyan-800">{post.title}</h2>
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
                    className="transition-transform duration-300 group-hover:translate-x-1 ml-2"
                  />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  )
}
