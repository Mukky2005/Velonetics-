import Link from "next/link"
import { Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

interface SiteFooterProps {
  hidePartners?: boolean
}

export function SiteFooter({ hidePartners = false }: SiteFooterProps) {
  return (
    <footer className="bg-black pt-16 pb-12 relative z-10">
      <div className="container px-10 md:px-6 lg:px-8">
        {!hidePartners && (
          <>
            {/* Partners Section */}
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">Our Collaborative Partners</h2>
              <div className="flex justify-center">
                <Link href="https://cyberfort.in" target="_blank">
                  <div className="bg-white rounded-lg p-4 transition-transform duration-300 hover:scale-105">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cyberfort_logo-UPcZVrYeDBpJnF6g02dH5spEh9LgrR.png"
                      alt="CyberFort Logo"
                      width={200}
                      height={50}
                      className="h-20 w-auto"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Separator line */}
            <hr className="border-t border-gray-700 my-8 mx-auto max-w-4xl" />
          </>
        )}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Velonetics Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Velonetics</h3>
            <p className="text-white mb-6">
              We specialize in providing comprehensive cybersecurity solutions and industry best practices to
              safeguard your data, ensure compliance, and give you peace of mind.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-green-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-green-400">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-green-400">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-white hover:text-green-400">Home</Link>
              <Link href="#" className="text-white hover:text-green-400">About Us</Link>
              <Link href="#" className="text-white hover:text-green-400">Contact Us</Link>
            </nav>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-white hover:text-green-400">Our Services</Link>
              <Link href="#" className="text-white hover:text-green-400">Privacy Policy</Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white">Corporate Office:</p>
                <p className="text-white">
                  Velonetics India Private Limited, GoodWorks Infinity Tech Park, 92/A, 2nd main Rd,
                  Electronics City Phase 1, Bengaluru, Karnataka 560100
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Email:</p>
                <Link href="mailto:info@velonetics.com" className="text-white hover:text-green-400">
                  info@velonetics.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

