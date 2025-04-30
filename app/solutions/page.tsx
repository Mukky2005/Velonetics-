"use client";

import { SiteFooter } from "@/components/site-footer";
import { CyberNetworkBackground } from "@/components/cyber-network-background";
import { Shield, Lock, Eye, Zap, Cloud, FileCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type SolutionCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function SolutionCard({ icon, title, description }: SolutionCardProps) {
  return (
    <motion.div
      className="bg-black/60 p-6 rounded-lg shadow-md backdrop-blur-sm border border-[#4169E1]/20 hover:border-[#4169E1]/50 transition-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4 text-[#4169E1]">{title}</h3>
      </div>
      <p className="text-gray-100">{description}</p>
    </motion.div>
  );
}

export default function SolutionsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-black text-white">
      <CyberNetworkBackground />
      <div className="flex-grow pt-16 relative z-10">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl font-bold mb-8 text-center text-[#89CFF0]"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Cybersecurity Solutions
          </motion.h1>

          <motion.p
            className="text-xl text-center mb-12 text-gray-300 bg-black/30 backdrop-blur-sm py-2 px-4 rounded-lg mx-auto max-w-2xl"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Comprehensive protection for your digital assets and infrastructure
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <SolutionCard
              icon={<Shield className="w-12 h-12 text-[#4169E1]" />}
              title="Network Security"
              description="Protect your organization's network infrastructure with advanced firewall systems, intrusion detection, and secure VPN solutions."
            />
            <SolutionCard
              icon={<Lock className="w-12 h-12 text-[#4169E1]" />}
              title="Data Encryption"
              description="Safeguard sensitive information with state-of-the-art encryption technologies, ensuring data privacy and compliance with regulations."
            />
            <SolutionCard
              icon={<Eye className="w-12 h-12 text-[#4169E1]" />}
              title="Threat Intelligence"
              description="Stay ahead of cyber threats with our real-time monitoring, analysis, and proactive defense strategies."
            />
            <SolutionCard
              icon={<Zap className="w-12 h-12 text-[#4169E1]" />}
              title="Incident Response"
              description="Rapid and effective response to security incidents, minimizing damage and restoring normal operations quickly."
            />
            <SolutionCard
              icon={<Cloud className="w-12 h-12 text-[#4169E1]" />}
              title="Cloud Security"
              description="Secure your cloud infrastructure and applications with our comprehensive cloud security solutions and best practices."
            />
            <SolutionCard
              icon={<FileCheck className="w-12 h-12 text-[#4169E1]" />}
              title="Compliance Management"
              description="Ensure adherence to industry regulations and standards with our compliance assessment and management services."
            />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#89CFF0]" id="why-choose">
              Why Choose Our Solutions?
            </h2>
            <ul className="list-disc text-left inline-block text-gray-100 bg-black/60 p-4 rounded-lg backdrop-blur-sm pl-6">
              <li className="mb-3">Cutting-edge technology and methodologies</li>
              <li className="mb-3">Tailored solutions for your specific needs</li>
              <li className="mb-3">24/7 monitoring and support</li>
              <li className="mb-3">Continuous updates to address evolving threats</li>
              <li className="mb-3">Experienced team of cybersecurity experts</li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-[#4169E1] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#3a5ecc] transition-colors"
            >
              Get a Custom Security Assessment
            </Link>
          </div>
        </motion.div>
      </div>
      <SiteFooter />
    </div>
  );
}

