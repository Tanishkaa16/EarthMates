import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Leaf, MapPin, Users, Award, Clock, MoreVertical } from "lucide-react"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";


export default function EventDetailPage() {
  // This is placeholder data. In a real application, you would fetch this data based on the event ID
  const event = {
    id: "1",
    title: "Annual Beach Cleanup Drive",
    slogan: "Clean Shores, Bright Future",
    bannerImage: "/placeholder.svg?height=400&width=1200",
    date: "August 15, 2023",
    time: "9:00 AM - 2:00 PM",
    location: "Sunset Beach, California",
    organizers: ["EarthMates", "Local Environmental Council"],
    description:
      "Join us for our annual beach cleanup drive! Help us preserve our beautiful coastlines and protect marine life. Together, we can make a significant impact on our local environment.",
    volunteeringOpportunities: [
      "Trash Collection Teams",
      "Recycling Sorters",
      "Data Recorders",
      "Refreshment Coordinators",
    ],
    perks: [
      "Free eco-friendly t-shirt",
      "Certificate of participation",
      "Networking with environmental enthusiasts",
      "Refreshments provided",
    ],
    acknowledgements: ["Sunset Beach Municipality", "GreenOcean Foundation", "Local Surfers Association"],
  }

  return (
    <main className="min-h-screen bg-background pt-16">
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
      {/* Event Banner */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src={event.bannerImage || "/placeholder.svg"}
          alt={event.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{event.title}</h1>
            <p className="text-xl md:text-2xl italic">{event.slogan}</p>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About the Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Volunteering Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {event.volunteeringOpportunities.map((opportunity, index) => (
                      <li key={index}>{opportunity}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Perks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {event.perks.map((perk, index) => (
                      <li key={index}>{perk}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Acknowledgements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We would like to thank the following organizations for their support:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    {event.acknowledgements.map((ack, index) => (
                      <li key={index}>{ack}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gray-500" />
                      <span>{event.organizers.join(", ")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full text-lg py-6" size="lg">
                Register Now
              </Button>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>By participating in this event, you'll be contributing to:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Cleaner beaches and oceans</li>
                    <li>Protection of marine life</li>
                    <li>Community environmental awareness</li>
                  </ul>
                </CardContent>
              </Card>
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
    </main>
  )
}