import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import React from "react"

interface BranchCardProps {
  name: string
  image: string
  mapUrl: string
  whatsappUrl: string
}

export default function BranchCard({ name, image, mapUrl, whatsappUrl }: BranchCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{name}</h3>

        <div className="flex flex-col space-y-4">
          <Link
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#ef7f1a] text-white py-2 px-4 rounded-md hover:bg-[#d97416] transition-colors"
          >
            <MapPin size={18} />
            <span>Ubicación</span>
          </Link>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#009933] text-white py-2 px-4 rounded-md hover:bg-[#007a29] transition-colors"
          >
            <Phone size={18} />
            <span>Contacto</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

