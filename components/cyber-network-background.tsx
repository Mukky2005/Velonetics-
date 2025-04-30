'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

export function CyberNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const nodes: Node[] = []
    const nodeCount = 100
    const connectionDistance = 250 // Increased from 200

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      })
    }

    function drawNode(x: number, y: number) {
      ctx.beginPath()
      ctx.arc(x, y, 2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(100, 149, 237, 0.9)' // Changed to a brighter blue with higher opacity
      ctx.fill()
    }

    function drawConnection(x1: number, y1: number, x2: number, y2: number, distance: number) {
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.strokeStyle = `rgba(100, 149, 237, ${0.8 - distance / connectionDistance})` // Increased base opacity to 0.8 and using a brighter blue
      ctx.lineWidth = 1 // Slightly increased line width for better visibility
      ctx.stroke()
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].x += nodes[i].vx
        nodes[i].y += nodes[i].vy

        if (nodes[i].x < 0 || nodes[i].x > canvas.width) nodes[i].vx *= -1
        if (nodes[i].y < 0 || nodes[i].y > canvas.height) nodes[i].vy *= -1

        drawNode(nodes[i].x, nodes[i].y)

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            drawConnection(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y, distance)
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}

