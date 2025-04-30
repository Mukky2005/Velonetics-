'use client'

import { useEffect, useRef, useMemo } from 'react'

export function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const particles = useMemo(() => {
    return Array.from({ length: 100 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.002,
      speedY: (Math.random() - 0.5) * 0.002,
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > 1) particle.x = 0
        else if (particle.x < 0) particle.x = 1
        if (particle.y > 1) particle.y = 0
        else if (particle.y < 0) particle.y = 1

        ctx.fillStyle = 'rgba(65, 105, 225, 0.5)'
        ctx.beginPath()
        ctx.arc(
          particle.x * canvas.width,
          particle.y * canvas.height,
          particle.size,
          0,
          Math.PI * 2
        )
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [particles])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}

