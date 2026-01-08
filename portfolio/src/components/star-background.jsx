import { useEffect, useRef } from 'react'

export function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let stars = []
    let mouse = { x: 0, y: 0, active: false }
    let mouseStars = []
    let meteors = []
    
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      const numStars = Math.floor((canvas.width * canvas.height) / 10000)
      for (let i = 0; i < numStars; i++) {
        const speed = Math.random() * 0.2 + 0.05
        const angle = Math.random() * Math.PI * 2
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.3,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          opacity: Math.random() * 0.4 + 0.1,
        })
      }
    }

    const createMouseStar = (x, y) => {
      mouseStars.push({
        x,
        y,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: 1,
        life: 1,
        decay: 0.02
      })
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Ambient stars
      ctx.fillStyle = '#ffffff'
      stars.forEach((star) => {
        ctx.globalAlpha = star.opacity
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        star.x += star.speedX
        star.y += star.speedY

        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0
      })

      // Mouse trail stars
      if (mouse.active) {
        for (let i = 0; i < 2; i++) {
            createMouseStar(mouse.x, mouse.y)
        }
      }

      mouseStars.forEach((star, index) => {
        star.x += star.speedX
        star.y += star.speedY
        star.life -= star.decay

        if (star.life <= 0) {
          mouseStars.splice(index, 1)
        } else {
          ctx.globalAlpha = star.opacity * star.life
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
          ctx.fill()
        }
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
      
      // Reset active state after 100ms of no movement
      clearTimeout(mouse.timeout)
      mouse.timeout = setTimeout(() => {
        mouse.active = false
      }, 100)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    
    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-20 pointer-events-none"
      style={{ filter: 'blur(0.3px)' }}
    />
  )
}
