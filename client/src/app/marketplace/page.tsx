"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart,Leaf, MoreVertical } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for small businesses and their products
const businesses = [
  {
    id: 1,
    name: "EcoFriendly Crafts",
    products: [
      {
        id: 101,
        name: "DIY GARDENING SUPPLIES",
        price: 5.99,
        discountedPrice: 4.99,
        image: "/shop1.webp?height=200&width=200",
      },
      {
        id: 102,
        name: "SMALL BATCH APPAREL",
        price: 12.99,
        discountedPrice: 10.99,
        image: "/shop2.webp?height=200&width=200",
      },
    ],
  },
  {
    id: 2,
    name: "Green Living Essentials",
    products: [
      {
        id: 201,
        name: "DENTAL CARE WITHOUT WASTE",
        price: 24.99,
        discountedPrice: 19.99,
        image: "/shop3.webp?height=200&width=200",
      },
      {
        id: 202,
        name: "BODY GOODS FROM NATURE",
        price: 15.99,
        discountedPrice: 13.99,
        image: "/shop4.webp?height=200&width=200",
      },
    ],
  },
  {
    id: 3,
    name: "Sustainable Home",
    products: [
      {
        id: 301,
        name: "LED Solar Lantern",
        price: 29.99,
        discountedPrice: 24.99,
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 302,
        name: "Recycled Plastic Outdoor Rug",
        price: 49.99,
        discountedPrice: 39.99,
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
]

export default function MarketplacePage() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    setWishlist((prev: number[]) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    )
  }
  
  const handleBuyNow = (productName: string) => {
    toast({
      title: "Product Added to Cart",
      description: `${productName} has been added to your cart.`,
    })
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
                Get Started
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical className="h-5 w-5 text-gray-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>My Profile</DropdownMenuItem>
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Sustainable Marketplace</h1>
        {businesses.map((business) => (
          <section key={business.id} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">{business.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {business.products.map((product) => (
                <Card
                  key={product.id}
                  className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 bg-white">
                    <CardTitle className="mb-2 text-green-800">{product.name}</CardTitle>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg font-semibold text-green-600">${product.discountedPrice.toFixed(2)}</p>
                        <p className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => toggleWishlist(product.id)}
                        className={
                          wishlist.includes(product.id)
                            ? "text-red-500 border-red-500"
                            : "text-gray-500 border-gray-300"
                        }
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-white rounded-b-lg">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-300"
                      onClick={() => handleBuyNow(product.name)}
                    >
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">EarthMates</span>
              </div>
              <p className="text-gray-400">
                Making sustainable living accessible and rewarding for everyone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Support Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: info@earthmates.com</li>
                <li className="text-gray-400">Phone: (555) 123-4567</li>
                <li className="text-gray-400">Address: 123 Green Street</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  {/* Add social icons here */}
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} EarthMates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}