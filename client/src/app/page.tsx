import { Button } from "@/components/ui/button";
import {
  MoreVertical,
  Leaf,
  Users,
  Calendar,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 bg-cover bg-center bg-[url('/bg2.jpg')]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 bg-white/70 p-6 rounded-lg shadow-md">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Make a difference, one action at a time
              </h1>
              <p className="text-xl text-gray-600">
                Join EarthMates in our mission to inspire and engage youth in
                sustainable living while making a positive impact on our planet.
              </p>
              <div className="flex gap-4">
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Why EarthMates?
            </h2>
            <p className="text-lg text-gray-600">
              We believe in empowering individuals to make sustainable choices
              while building a community of environmentally conscious citizens
              who work together for a better planet.
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-3xl font-semibold text-green-800">10K+</h3>
              <p className="text-lg text-gray-600">Volunteers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-3xl font-semibold text-green-800">50K+</h3>
              <p className="text-lg text-gray-600">Trees Planted</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-3xl font-semibold text-green-800">100+</h3>
              <p className="text-lg text-gray-600">NGO Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Eco-Friendly Habit Tracker",
                description:
                  "Track your daily sustainable habits and earn rewards for positive environmental impact.",
              },
              {
                title: "Volunteer Opportunities",
                description:
                  "Connect with local NGOs and join environmental causes in your community.",
              },
              {
                title: "Impact Tracking",
                description:
                  "Monitor your contribution to environmental causes and see your positive impact grow.",
              },
              {
                title: "Eco Rewards",
                description:
                  "Earn points and redeem eco-friendly products while making sustainable choices.",
              },
              {
                title: "Educational Resources",
                description:
                  "Access tutorials and guides on sustainable living and environmental awareness.",
              },
              {
                title: "Micro-Donations",
                description:
                  "Support environmental initiatives through secure and easy donation options.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Goals</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                We aim to create a sustainable future by:
              </p>
              <ul className="text-left space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded">
                    <Leaf className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-600">
                    Inspiring youth to adopt eco-friendly lifestyles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-600">
                    Building a community of environmentally conscious
                    individuals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded">
                    <Calendar className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-600">
                    Facilitating meaningful volunteer opportunities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
