"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Linkedin, MessageSquare, Copy, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ContactInfo() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const contactItems = [
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@velonetics.com",
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      content: "info@velonetics.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      href: "https://wa.me/918072450722",
      icon: <MessageSquare className="h-8 w-8" />,
      title: "WhatsApp",
      content: "+91 80724 50722",
      color: "from-green-500 to-emerald-500",
    },
    {
      href: "https://linkedin.com/company/velonetics",
      icon: <Linkedin className="h-8 w-8" />,
      title: "LinkedIn",
      content: "Velonetics India",
      color: "from-blue-600 to-indigo-600",
    },
  ]

  const handleCopyEmail = (e: React.MouseEvent, email: string) => {
    e.preventDefault()
    navigator.clipboard.writeText(email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <div className="grid gap-6">
      {contactItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={item.href} className="group" target="_blank" rel="noopener noreferrer">
            <motion.div
              className={`bg-gradient-to-r ${item.color} p-1 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-black/80 rounded-lg p-6 flex items-center space-x-4 backdrop-blur-sm">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">{item.icon}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{item.content}</p>
                </div>
                {item.title === "Email" && (
                  <button
                    onClick={(e) => handleCopyEmail(e, item.content)}
                    className="flex-shrink-0 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Copy email address"
                  >
                    <AnimatePresence>
                      {copiedEmail ? (
                        <motion.div key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <CheckCircle className="h-6 w-6 text-green-400" />
                        </motion.div>
                      ) : (
                        <motion.div key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <Copy className="h-6 w-6 text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                )}
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

