"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { ContentSection } from "@/components/content-section";
import { ServicesSection } from "@/components/services-section";
import { LogoShowcase } from "@/components/logo-showcase";
import Image from "next/image";
import Link from "next/link";

const auditItems: string[] = [
  "Comprehensive Vulnerability Assessment",
  "Network Security Analysis",
  "Application Security Testing",
  "Compliance Check",
  "Detailed Report & Recommendations"
];

export default function ZeroCostProgramPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="relative min-h-[80vh] w-full overflow-hidden">
        {/* Background Image with Animation */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shield-1.jpg-B9F8WNP97wXGKMbXC6AV2DyeNPjVL3.jpeg"
            alt="Digital Security Shield"
            fill
            className="object-cover scale-105 animate-ken-burns"
            priority
            quality={100}
          />
        </div>

        <div className="container relative z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center py-16">
            {/* Left Column - Content */}
            <div className="flex flex-col items-start text-left space-y-6 p-8 lg:p-12 bg-black/30 backdrop-blur-sm rounded-lg">
              <span className="inline-block text-[#4169E1] font-semibold mb-4 animate-slide-in-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                ZERO COST SECURITY AUDIT
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-white max-w-xl animate-slide-in-left opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Concerned about your organization's security?
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight mt-4 text-white max-w-xl animate-slide-in-left opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                Get a security audit from Velonetics at zero cost
              </h2>
              <Link href="/contact-us" passHref>
                <Button
                  size="lg"
                  className="bg-[#4169E1] text-white hover:bg-[#3a5ecc] mt-8 animate-slide-in-left opacity-0"
                  style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
                >
                  REQUEST AUDIT <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Right Column - Audit List */}
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px] flex items-center justify-center">
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg w-full max-w-md animate-float">
                <div className="space-y-4 text-white">
                  <h3 className="text-2xl font-bold animate-slide-in-right opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    Our Security Audit Includes:
                  </h3>
                  <ul className="space-y-3" role="list">
                    {auditItems.map((item, index) => (
                      <li
                        key={item}
                        className="flex items-center space-x-2 animate-slide-in-right opacity-0"
                        style={{ animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: 'forwards' }}
                      >
                        <ArrowRight className="h-4 w-4 text-[#4169E1]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ContentSection />
        <LogoShowcase />
        <ServicesSection />
      </div>

      <SiteFooter />
    </div>
  );
}

