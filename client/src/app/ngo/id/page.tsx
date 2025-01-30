import { Button } from "@/components/ui/button"
import { Card,CardContent } from "@/components/ui/card"
import { Calendar, Leaf, Award, Clock, MoreVertical } from "lucide-react"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Mail,
  Phone,
  MapPin,
  Users,
  TreePine,
  Droplets,
  Sprout,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

export default function NGODetails() {
  return (
    <div className="min-h-screen bg-white">
            {/* Navbar */}
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
                href="#"
                className="text-sm font-medium hover:text-green-600"
              >
                NGOs
              </Link>
              <Link
                href="/event"
                className="text-sm font-medium hover:text-green-600"
              >
                Events
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-green-600"
              >
                Community
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-green-600"
              >
                Shop
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
      {/* Hero Section with NGO Info */}
      <section className="pt-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-40 h-40 relative">
              <Image src="/placeholder.svg" alt="NGO Logo" fill className="object-contain" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Green Earth Foundation</h1>
              <p className="text-xl text-green-600 mb-4">Nurturing Nature, Empowering Communities</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Volunteer Now</Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Donate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To protect and restore Earth's natural ecosystems through community-driven initiatives, sustainable
                practices, and environmental education, ensuring a greener future for generations to come.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where communities thrive in harmony with nature, where environmental consciousness guides every
                action, and where sustainable practices are the norm, not the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Achievements */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: TreePine, number: "100K+", label: "Trees Planted" },
              { icon: Users, number: "50K+", label: "Volunteers Engaged" },
              { icon: Droplets, number: "5M+", label: "Liters Water Saved" },
              { icon: Sprout, number: "200+", label: "Projects Completed" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Volunteering Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tree Planting Drive",
                date: "Feb 15, 2024",
                location: "City Park",
                spots: "20 spots left",
              },
              {
                title: "Beach Cleanup",
                date: "Feb 20, 2024",
                location: "Sunset Beach",
                spots: "15 spots left",
              },
              {
                title: "Environmental Workshop",
                date: "Feb 25, 2024",
                location: "Community Center",
                spots: "10 spots left",
              },
            ].map((opportunity, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>📅 {opportunity.date}</p>
                      <p>📍 {opportunity.location}</p>
                      <p>👥 {opportunity.spots}</p>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Sign Up</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Opportunities */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Support Our Cause</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Plant a Tree",
                amount: "$10",
                description: "Help us plant and nurture a tree to maturity",
              },
              {
                title: "Sponsor a Project",
                amount: "$100",
                description: "Fund a local environmental initiative",
              },
              {
                title: "Monthly Donation",
                amount: "$25/month",
                description: "Provide sustained support for our programs",
              },
            ].map((donation, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">{donation.title}</h3>
                  <div className="text-3xl font-bold text-green-600">{donation.amount}</div>
                  <p className="text-gray-600">{donation.description}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Donate Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-green-600" />
                  <span className="text-gray-600">contact@greenearthfoundation.org</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-green-600" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <span className="text-gray-600">123 Earth Street, Green City, 12345</span>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="h-6 w-6 text-green-600" />
                  <Link href="#" className="text-green-600 hover:underline">
                    www.greenearthfoundation.org
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Follow Us</h2>
              <div className="flex gap-6">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors"
                  >
                    <social.icon className="h-6 w-6 text-green-600" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
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
          </div>
        </div>
      </footer>
    </div>
  )
}

