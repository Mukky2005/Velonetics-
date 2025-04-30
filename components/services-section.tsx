"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      title: "Vulnerability Assessment & Penetrating Testing (VAPT)",
      description:
        "VAPT helps you to identify and address security weaknesses, safeguarding your systems and data from potential cyber threats and exploitation.",
      icon: "/placeholder.svg?height=64&width=64",
    },
    {
      title: "Security Operations Centre (SOC)",
      description:
        "A SOC helps you to proactively monitor, detect, and respond to cybersecurity threats, ensuring continuous protection of sensitive data and systems.",
      icon: "/placeholder.svg?height=64&width=64",
    },
    {
      title: "Network Security",
      description:
        "Network security is essential for you to protect sensitive data, ensure operational continuity, and safeguard against cyber threats.",
      icon: "/placeholder.svg?height=64&width=64",
    },
    {
      title: "Cloud Services",
      description:
        "Cloud Services allows you to enhance flexibility, reduce costs, and improve collaboration by providing scalable solutions.",
      icon: "/placeholder.svg?height=64&width=64",
    },
    {
      title: "Compliance",
      description:
        "Compliance is crucial for you as it safeguards sensitive data, ensures adherence to legal requirements, builds trust.",
      icon: "/placeholder.svg?height=64&width=64",
    },
    {
      title: "Web & Mobile App Development",
      description:
        "Web and mobile app helps you by enhancing productivity, streamlining operations, and improving customer experience.",
      icon: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12 animate-fade-in">
        <p className="text-[#4169E1] mb-4">Services</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">What We Offer</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Unlock endless possibilities with our innovative solutions tailored to fuel your success.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative bg-gray-50 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <img src={service.icon || "/placeholder.svg"} alt="" className="w-16 h-16 mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-3 text-black text-center">{service.title}</h3>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#4169E1] bg-opacity-90 p-6 flex items-center justify-center"
          >
            <p className="text-white text-center">{service.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

