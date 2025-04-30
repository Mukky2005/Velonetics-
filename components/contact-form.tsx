'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('New Contact Form Submission')
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)
    window.location.href = `mailto:info@velonetics.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-black/40 p-8 rounded-lg border border-[#4169E1]/20 backdrop-blur-sm">
      <div>
        <Label htmlFor="name" className="text-[#4169E1]">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2 bg-black/50 border-[#4169E1]/20 text-white placeholder-gray-400"
          placeholder="Your name"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-[#4169E1]">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-2 bg-black/50 border-[#4169E1]/20 text-white placeholder-gray-400"
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <Label htmlFor="message" className="text-[#4169E1]">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-2 bg-black/50 border-[#4169E1]/20 text-white placeholder-gray-400"
          placeholder="Your message here..."
        />
      </div>
      <button 
        type="submit"
        className="w-full py-3 px-4 bg-gradient-to-r from-[#4169E1] to-[#4169E1] text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        SEND
      </button>
    </form>
  )
}

