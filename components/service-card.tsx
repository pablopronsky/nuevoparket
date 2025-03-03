"use client"

import Image from "next/image"
import React from "react"
import { useState } from "react"

interface ServiceCardProps {
  title: string
  description: string
  image: string
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)

  // Additional information that would be shown when "Leer más" is clicked
  const additionalInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl."

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {expanded && (
          <div className="mt-4 mb-4 text-gray-300">
            <p>{additionalInfo}</p>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#ef7f1a] hover:text-[#d97416] transition-colors font-medium"
        >
          {expanded ? "Leer menos" : "Leer más"}
        </button>
      </div>
    </div>
  )
}

