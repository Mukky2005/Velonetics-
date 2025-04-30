import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />

      <div className="relative z-20">
        <div className="container flex min-h-screen flex-col items-center justify-center gap-4 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-white animate-fade-in">
            Defend, Detect, Deter We've Got Your Back!
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left">
            <Button size="lg" className="bg-[#4169E1] text-white hover:bg-[#3a5ecc] w-full sm:w-auto">
              LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-[#4169E1] hover:bg-[#4169E1] hover:text-white transition-colors w-full sm:w-auto"
            >
              READ THE NEWS <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wp2691479-ElP7OKJuGbyDS3LIvGCejKeSIgb1kC.webp"
          alt="Digital world map with cybersecurity overlay"
          className="h-full w-full object-cover animate-scale-in"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full fill-background">
          <path d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </div>
  )
}

