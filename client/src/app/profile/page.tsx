"use client"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Award, Calendar, DollarSign, User, Activity } from "lucide-react"
import type React from "react"

// Mock data for user profile
const userProfile = {
  name: "Jane Doe",
  username: "@janedoe",
  bio: "Passionate about sustainability and making a difference in the world.",
  profilePicture: "/placeholder.svg?height=150&width=150",
  postsCount: 42,
  followersCount: 1234,
  followingCount: 567,
}

// Mock data for user posts
const userPosts = [
  {
    id: 1,
    image: "/event1.jpg?height=300&width=300",
    likes: 120,
    comments: 15,
  },
  {
    id: 2,
    image: "/event2.webp?height=300&width=300",
    likes: 89,
    comments: 7,
  },
  {
    id: 3,
    image: "/event3.webp?height=300&width=300",
    likes: 230,
    comments: 31,
  },
  {
    id: 4,
    image: "/event4.jpg?height=300&width=300",
    likes: 56,
    comments: 3,
  },
  {
    id: 5,
    image: "/event5.jpg?height=300&width=300",
    likes: 178,
    comments: 24,
  },
  {
    id: 6,
    image: "/event6.jpg?height=300&width=300",
    likes: 98,
    comments: 11,
  },
]

// Mock data for badges, donations, activities, and registered events
const badges = ["Eco Warrior", "Community Leader", "Sustainability Champion"]
const donations = [
  { ngo: "Green Earth Alliance", amount: 50 },
  { ngo: "Ocean Cleanup Initiative", amount: 75 },
  { ngo: "Reforestation Project", amount: 100 },
]
const activities = [
  { name: "Commented on a post", date: "2023-07-01" },
  { name: "Liked 5 posts", date: "2023-06-30" },
  { name: "Shared an event", date: "2023-06-28" },
]
const registeredEvents = [
  { name: "Beach Cleanup Drive", date: "2023-08-15" },
  { name: "Tree Planting Day", date: "2023-09-22" },
  { name: "Sustainable Living Workshop", date: "2023-10-05" },
]

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("profile")

  const renderSectionContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="space-y-4">
            <div className="flex flex-col items-center">
              <Avatar className="w-24 h-24">
                <AvatarImage src={userProfile.profilePicture} alt={userProfile.name} />
                <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-bold mt-4">{userProfile.name}</h1>
              <p className="text-muted-foreground">{userProfile.username}</p>
            </div>
            <p className="text-center">{userProfile.bio}</p>
            <div className="flex justify-around text-center">
              <div>
                <p className="font-bold">{userProfile.postsCount}</p>
                <p className="text-muted-foreground">Posts</p>
              </div>
              <div>
                <p className="font-bold">{userProfile.followersCount}</p>
                <p className="text-muted-foreground">Followers</p>
              </div>
              <div>
                <p className="font-bold">{userProfile.followingCount}</p>
                <p className="text-muted-foreground">Following</p>
              </div>
            </div>
          </div>
        )
      case "donations":
        return (
          <ScrollArea className="h-[300px]">
            <ul className="space-y-2">
              {donations.map((donation, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{donation.ngo}</span>
                  <span className="font-bold text-green-500 flex items-center">
                    <DollarSign className="mr-1 h-4 w-4" />
                    {donation.amount}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        )
      case "badges":
        return (
          <ScrollArea className="h-[300px]">
            <ul className="space-y-2">
              {badges.map((badge, index) => (
                <li key={index} className="flex items-center">
                  <Award className="mr-2 h-4 w-4 text-green-500" />
                  {badge}
                </li>
              ))}
            </ul>
          </ScrollArea>
        )
      case "activities":
        return (
          <ScrollArea className="h-[300px]">
            <ul className="space-y-2">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{activity.name}</span>
                  <span className="text-muted-foreground text-sm">{activity.date}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        )
      case "events":
        return (
          <ScrollArea className="h-[300px]">
            <ul className="space-y-2">
              {registeredEvents.map((event, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{event.name}</span>
                  <span className="text-muted-foreground text-sm flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {event.date}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        )
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Vertical Sidebar */}
          <aside className="w-full md:w-1/4">
            <Card className="bg-white">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Button
                    variant={activeSection === "profile" ? "default" : "ghost"}
                    className={`w-full justify-start ${activeSection === "profile" ? "bg-green-100 text-green-800" : ""}`}
                    onClick={() => setActiveSection("profile")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </Button>
                  <Button
                    variant={activeSection === "donations" ? "default" : "ghost"}
                    className={`w-full justify-start ${activeSection === "donations" ? "bg-green-100 text-green-800" : ""}`}
                    onClick={() => setActiveSection("donations")}
                  >
                    <DollarSign className="mr-2 h-4 w-4" />
                    My Donations
                  </Button>
                  <Button
                    variant={activeSection === "badges" ? "default" : "ghost"}
                    className={`w-full justify-start ${activeSection === "badges" ? "bg-green-100 text-green-800" : ""}`}
                    onClick={() => setActiveSection("badges")}
                  >
                    <Award className="mr-2 h-4 w-4" />
                    My Badges
                  </Button>
                  <Button
                    variant={activeSection === "activities" ? "default" : "ghost"}
                    className={`w-full justify-start ${activeSection === "activities" ? "bg-green-100 text-green-800" : ""}`}
                    onClick={() => setActiveSection("activities")}
                  >
                    <Activity className="mr-2 h-4 w-4" />
                    My Activities
                  </Button>
                  <Button
                    variant={activeSection === "events" ? "default" : "ghost"}
                    className={`w-full justify-start ${activeSection === "events" ? "bg-green-100 text-green-800" : ""}`}
                    onClick={() => setActiveSection("events")}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    My Registered Events
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main content */}
          <section className="w-full md:w-3/4">
            <Card className="bg-white mb-8">
              <CardHeader>
                <CardTitle>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</CardTitle>
              </CardHeader>
              <CardContent>{renderSectionContent()}</CardContent>
            </Card>

            <h2 className="text-2xl font-bold mb-4">My Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {userPosts.map((post) => (
                <Card key={post.id} className="bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={`Post ${post.id}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CardContent>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm" className="p-0">
                        <Heart className="h-5 w-5 mr-1" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="p-0">
                        <MessageCircle className="h-5 w-5 mr-1" />
                        <span>{post.comments}</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
