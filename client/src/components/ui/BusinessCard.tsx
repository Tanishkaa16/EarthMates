import Image from "next/image"
import type { Business } from "@/types/business"

export default function BusinessCard({ business }: { business: Business }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={business.imageUrl || "/placeholder.svg"}
        alt={business.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{business.name}</h2>
        <p className="text-gray-600 mb-4">{business.description}</p>
        <a
          href={business.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          Visit Website
        </a>
      </div>
    </div>
  )
}

