import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Leaf, MoreVertical } from "lucide-react"
import Link from "next/link"
import type React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NGOsPage() {
  const ngos = [
    {
      name: "EARTH5R",
      description: "Earth5R is a non-profit environmental organization. It's a social venture with a focus on addressing deep-rooted socio- environmental issue. A global network of volunteers spread across several countries and major cities of India fuel this movement.",
      establishmentDate: "2005",
      image: "/ngo1.jpg",
    },
    {
      name: "CHINTAN NGO",
      description: "Chintan reduces waste and consumption, manages solid and electronic waste and advocates around materials, waste and consumption. It uses waste as a tool to fight poverty, child labour gender based violence and exclusion and climate change, while creating green livelihoods.",
      establishmentDate: "1998",
      image: "/ngo2.png",
    },
    {
      name: "SEWA FOUNDATION",
      description: "The Self Employed Women's Association (SEWA) is a membership-based organization created in 1972 from a combination of the labour, women, and cooperative movements, to organize self-employed women in the informal economy and assist their collective struggle for social justice, equality, and fair treatment.",
      establishmentDate: "2010",
      image: "/ngo3.png",
    },
    {
      name: "GIVE A TREE TRUST",
      description: "Give Me Trees Trust is the largest community based voluntary tree planting and conservation movements in India, having facilitated the plantation of more than 2.27 crore trees all over the country. Volunteers are the backbone of this green movement, with more than 16,500+ volunteers working all across India.",
      establishmentDate: "2008",
      image: "/ngo4.jpg",
    },
    {
      name: "Clean Water Initiative",
      description: "Providing clean water solutions and sanitation education to rural communities.",
      establishmentDate: "2012",
      image: "/ngo5.jpg",
    },
    {
      name: "Youth Empowerment Network",
      description: "Empowering young people through leadership training and community projects.",
      establishmentDate: "2015",
      image: "/ngo6.webp",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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
      <section className="hero py-24 relative bg-cover bg-center bg-[url('/images/ngos-hero.jpg')]">
        <div className="absolute inset-0 bg-green-900/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NGOs</h1>
          <p className="text-xl md:text-2xl font-semibold mb-6">
            Connecting Hearts, Empowering Causes—Find the Right NGO to Support!
          </p>
          <p className="max-w-2xl mx-auto text-lg">
            Discover NGOs making a real impact in communities worldwide. Explore their missions, find causes that
            resonate with you, and join hands to create meaningful change. Every effort counts—start your journey of
            giving today!
          </p>
        </div>
      </section>

      {/* NGOs Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">The NGOs Connected with Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ngos.map((ngo, index) => (
              <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Image
                    src={ngo.image || "/placeholder.svg"}
                    alt={ngo.name}
                    width={300}
                    height={200}
                    layout="responsive"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardTitle className="mb-2 text-green-700">{ngo.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-4">{ngo.description}</p>
                  <p className="text-sm text-gray-500">Established: {ngo.establishmentDate}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4 bg-green-50 rounded-b-lg">
                  <Button variant="outline" className="flex items-center gap-2 text-green-600 hover:bg-green-200">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-300">
                    Donate
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
