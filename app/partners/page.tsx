"use client"

import { useState } from "react"
import { SiteFooter } from "@/components/site-footer"
import { ContactInfo } from "@/components/contact-info"
import { CyberBackground } from "@/components/cyber-background"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  AnimatedDiv,
  AnimatedForm,
  AnimatedH1,
  AnimatedButton,
} from "@/components/ui/Animated"

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <CyberBackground />
      <AnimatedDiv
        className="flex-grow pt-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <AnimatedH1
            className="text-4xl font-bold text-center mb-12 text-white"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in Touch
          </AnimatedH1>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedDiv>
      <SiteFooter />
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const subject = encodeURIComponent("New Contact Form Submission")
      const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`)
      window.location.href = `mailto:info@velonetics.com?subject=${subject}&body=${body}`
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <AnimatedForm
      onSubmit={handleSubmit}
      className="space-y-6 bg-black/40 p-8 rounded-xl border border-[#4169E1]/20 backdrop-blur-sm shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <AnimatedDiv
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Label htmlFor="name" className="text-[#4169E1] mb-2 block">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-black/50 border-[#4169E1]/20 text-white placeholder-gray-400 rounded-md focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
          placeholder="Your name"
        />
      </AnimatedDiv>
      <AnimatedDiv
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Label htmlFor="email" className="text-[#4169E1] mb-2 block">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-black/50 border-[#4169E1]/20 text-white placeholder-gray-400 rounded-md focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </AnimatedDiv>
      <AnimatedDiv
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Label htmlFor="message" className="text-[#4169E1] mb-2 block">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full bg-black/50 border-[#4169E1]/20 text-white placeholder-gray-400 rounded-md focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
          placeholder="Your message here..."
        />
      </AnimatedDiv>
      <AnimatedButton
        type="submit"
        className="w-full py-3 px-4 bg-gradient-to-r from-[#4169E1] to-[#6495ED] text-white rounded-md font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        SEND MESSAGE
      </AnimatedButton>
    </AnimatedForm>
  )
}
