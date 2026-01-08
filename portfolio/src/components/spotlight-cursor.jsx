import { useEffect } from "react"
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion"

export function SpotlightCursor() {
  const mouseX = useMotionValue(-100) // Start off-screen
  const mouseY = useMotionValue(-100)

  // Smooth spring animation for the cursor follower
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const background = useMotionTemplate`radial-gradient(
    600px at ${x}px ${y}px,
    rgba(59,130,246,0.15),
    transparent 80%
  )`

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background
      }}
    />
  )
}
