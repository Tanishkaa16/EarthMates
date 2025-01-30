"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart, MessageCircle, Leaf, MoreVertical } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for posts
const posts = [
  {
    id: 1,
    username: "greenwarrior",
    imageUrl: "/event1.jpg",
    likes: 1234,
    comments: 56,
  },
  {
    id: 2,
    username: "ecohero",
    imageUrl: "/event2.webp",
    likes: 987,
    comments: 43,
  },
  {
    id: 3,
    username: "sustainableliving",
    imageUrl: "/event3.webp",
    likes: 2345,
    comments: 78,
  },
  {
    id: 4,
    username: "zerowaste",
    imageUrl: "/event5.jpg",
    likes: 876,
    comments: 32,
  },
  {
    id: 5,
    username: "earthfirst",
    imageUrl: "/event4.jpg",
    likes: 3456,
    comments: 98,
  },
  {
    id: 6,
    username: "naturelovers",
    imageUrl: "/event6.jpg",
    likes: 654,
    comments: 21,
  },
  {
    id: 7,
    username: "cleanoceans",
    imageUrl: "/event7.webp",
    likes: 5678,
    comments: 123,
  },
  {
    id: 8,
    username: "renewableenergy",
    imageUrl: "/event8.webp",
    likes: 432,
    comments: 15,
  },
  {
    id: 9,
    username: "plantbased",
    imageUrl: "/event9.webp",
    likes: 7890,
    comments: 234,
  },
]

export default function ExplorePage() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-16">
      
       {/* Sticky Navbar */}
       <header className="fixed top-0 w-full bg-white/95 shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold text-green-800">
                EarthMates
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/home"
                className="text-sm font-medium hover:text-green-600"
              >
                HOME
              </Link>
              <Link
                href="/ngo"
                className="text-sm font-medium hover:text-green-600"
              >
                NGOs
              </Link>
              <Link
                href="/event"
                className="text-sm font-medium hover:text-green-600"
              >
                EVENTS
              </Link>
              <Link
                href="/community"
                className="text-sm font-medium hover:text-green-600"
              >
                COMMUNITY
              </Link>
              <Link
                href="/marketplace"
                className="text-sm font-medium hover:text-green-600"
              >
                SHOP
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Join Now
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical className="h-5 w-5 text-gray-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Our Community</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={`Post by ${post.username}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4 bg-white">
                  <Link
                    href={`/user/${post.username}`}
                    className="font-semibold text-sm hover:underline text-green-700"
                  >
                    {post.username}
                  </Link>
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="p-0" onClick={() => handleLike(post.id)}>
                      <Heart
                        className={`h-5 w-5 mr-1 ${likedPosts.includes(post.id) ? "fill-red-500 text-red-500" : "text-gray-500"}`}
                      />
                      <span className="text-gray-600">
                        {likedPosts.includes(post.id) ? post.likes + 1 : post.likes}
                      </span>
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0">
                      <MessageCircle className="h-5 w-5 mr-1 text-gray-500" />
                      <span className="text-gray-600">{post.comments}</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
