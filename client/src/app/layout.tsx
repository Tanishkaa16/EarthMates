import "./globals.css"
import { Button } from "@/components/ui/button"
import { MoreVertical, Leaf, ShoppingBag, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Toaster } from "sonner";
import type React from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Sticky Navbar */}
        <header className="header fixed top-0 w-full shadow-sm z-50 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold text-green-800">EarthMates</span>
              </Link>

              <nav className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
                  Home
                </Link>
                <Link href="/ngos" className="text-sm font-medium hover:text-green-600 transition-colors">
                  NGOs
                </Link>
                <Link href="/events" className="text-sm font-medium hover:text-green-600 transition-colors">
                  Events
                </Link>
                <Link href="/explore" className="text-sm font-medium hover:text-green-600 transition-colors">
                  Explore
                </Link>
                <Link href="/marketplace" className="text-sm font-medium hover:text-green-600 transition-colors">
                  Community
                </Link>
              </nav>

              <div className="flex items-center gap-4">
                <Link href="/profile">
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5 mr-2" />
                    Profile
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/register">
                  <Button variant="outline">Register</Button>
                </Link>
                <Link href="/ngo-register">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Register NGO</Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical className="h-5 w-5 text-gray-600" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/profile">My Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Help</DropdownMenuItem>
                    <DropdownMenuItem>Sign Out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        <main className="pt-16">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-green-400" />
                  <span className="text-xl font-bold">EarthMates</span>
                </div>
                <p className="text-gray-400">Making sustainable living accessible and rewarding for everyone.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Get Involved
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
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
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    {/* Add social icons here */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} EarthMates. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}