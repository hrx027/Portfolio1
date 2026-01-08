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
    let lastMeteorCreationTime = 0
    const meteorInterval = 2000 // Spawn a new meteor every 2 seconds

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      const numStars = Math.floor((canvas.width * canvas.height) / 10000)
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random(),
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

    const createMeteor = () => {
      const startX = Math.random() * (canvas.width * 0.5) + canvas.width * 0.5
      const startY = canvas.height + 10
      
      meteors.push({
        x: startX,
        y: startY,
        size: Math.random() * 2 + 1,
        speedX: -2 - Math.random(), // Moves left
        speedY: -2 - Math.random(), // Moves up
        length: Math.random() * 80 + 20,
        opacity: 1
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
        star.opacity = star.life

        if (star.life <= 0) {
          mouseStars.splice(index, 1)
        } else {
          ctx.globalAlpha = star.opacity
          ctx.fillStyle = '#fbbf24' // Orange/Gold tint for interaction
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Meteors
      if (time - lastMeteorCreationTime > meteorInterval) {
        createMeteor()
        lastMeteorCreationTime = time
      }

      meteors.forEach((meteor, index) => {
        meteor.x += meteor.speedX
        meteor.y += meteor.speedY
        
        // Remove if out of bounds (top or left)
        if (meteor.x < -meteor.length || meteor.y < -meteor.length) {
          meteors.splice(index, 1)
          return
        }

        // Draw meteor trail
        // Wait, if it moves -x, -y (up-left), the tail should be at +x, +y (down-right).
        // Let's define the tail end point.
        const tailX = meteor.x - meteor.speedX * (meteor.length / 2) // Approximation
        const tailY = meteor.y - meteor.speedY * (meteor.length / 2)

        const trailGradient = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY)
        trailGradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
        trailGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.globalAlpha = meteor.opacity
        ctx.strokeStyle = trailGradient
        ctx.lineWidth = meteor.size
        ctx.lineCap = 'round'
        
        ctx.beginPath()
        ctx.moveTo(meteor.x, meteor.y)
        ctx.lineTo(meteor.x + (-meteor.speedX * meteor.length * 4), meteor.y + (-meteor.speedY * meteor.length * 4)) 
        // Logic check: if speedX is -2, -speedX is +2. So we draw line TO x + 80.
        // Yes, tail is behind.
        ctx.stroke()
        
        // Meteor head
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(meteor.x, meteor.y, meteor.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
      
      // Stop generating stars after a brief pause if mouse stops moving
      clearTimeout(window.mouseStopTimeout)
      window.mouseStopTimeout = setTimeout(() => {
          mouse.active = false
      }, 100)
    })

    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}
