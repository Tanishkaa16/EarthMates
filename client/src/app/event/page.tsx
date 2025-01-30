import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Heart, ArrowRight, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Leaf } from "lucide-react"; 

export default function EventsPage() {
  const categories = [
    "Community Service",
    "Environmental Conservation",
    "Animal Welfare",
    "Senior Care & Companionship",
    "Education & Mentorship",
  ];

  const recommendedEvents = [
    {
      name: "City Park Cleanup",
      description: "Help clean up our local park and make it beautiful for everyone.",
      image: "/event1.jpg",
    },
    {
      name: "Animal Shelter Volunteer Day",
      description: "Spend a day caring for animals at our local shelter.",
      image: "/event2.webp",
    },
    {
      name: "Teach Computer Skills to Seniors",
      description: "Help seniors learn basic computer skills and stay connected.",
      image: "/event3.webp",
    },
    {
      name: "Beach Cleanup Drive",
      description: "Join us in cleaning up the coastline and protecting marine life.",
      image: "/event4.jpg",
    },
  ];

  const exploreEvents = [
    {
      name: "Beach Cleanup Drive",
      description: "Join us in cleaning up the coastline and protecting marine life.",
      venue: "Sunset Beach",
      date: "July 15, 2023",
      image: "/event4.jpg",
    },
    {
      name: "Community Garden Project",
      description: "Help plant and maintain a community garden for fresh, local produce.",
      venue: "Green Acres Park",
      date: "August 5, 2023",
      image: "/event1.jpg",
    },
    {
      name: "Homeless Shelter Meal Service",
      description: "Prepare and serve meals at the local homeless shelter.",
      venue: "Hope Haven Shelter",
      date: "July 22, 2023",
      image: "/event2.webp",
    },
  ];

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
      <section className="relative py-24 bg-cover bg-center bg-[url('/images/events-hero.jpg')]">
        <div className="absolute inset-0 bg-green-900/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl md:text-2xl font-semibold mb-6">Make a Difference—Lend a Hand, Change a Life!</p>
          <p className="max-w-2xl mx-auto text-lg">
            Join a community of changemakers! Volunteer your time, skills, and passion to create a positive impact.
            Every small act of kindness brings us closer to a better world.
          </p>
        </div>
      </section>

      {/* Browse Events by Category */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Browse Events by Category</h2>
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm md:text-base">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {/* Add event cards for each category here */}
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-green-700">{category} Event</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Description of the {category.toLowerCase()} event goes here.</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-300">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Recommended Opportunities */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Recommended Opportunities for You</h2>
          <p className="text-center text-gray-600 mb-8">
            Looking for the best of the best? Here're the top-rated Opportunities for you
          </p>
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {recommendedEvents.map((event, index) => (
                  <Card
                    key={index}
                    className="w-[300px] flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardHeader>
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.name}
                        width={300}
                        height={200}
                        className="w-full h-[200px] object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-green-700">{event.name}</CardTitle>
                      <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300"
                      >
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <Button variant="outline" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Explore Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
            Discover Your Impact—Explore Volunteer Opportunities Today!
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreEvents.map((event, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    width={400}
                    height={300}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-green-700">{event.name}</CardTitle>
                  <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-sm font-semibold text-green-600">{event.venue}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" className="text-red-500 hover:bg-red-50">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="text-green-500 hover:bg-green-50">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-600">15 people registered</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
