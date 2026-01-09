import { Code, Layers, Zap } from "lucide-react"
import { useRef } from "react"
import { motion as Motion, useMotionValue, useTransform } from "framer-motion"
import resume from "../assets/HrithikRaj_2K22_CO_216.pdf"

export function HeroSection() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="px-2 md:px-6 py-8 relative group"
    >
      <Motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-3xl"
        style={{
          background: "radial-gradient(600px circle at var(--x) var(--y), #0ea5e9 0%, transparent 40%)",
          "--x": useTransform(mouseX, (x) => `${x}px`),
          "--y": useTransform(mouseY, (y) => `${y}px`),
          opacity: 0.15, // Adjusted to prevent overwhelming the text
        }}
      />
      <div className="">
        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
          Software Developer
        </h1>
        <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-12">
          I build scalable web applications, high-performance systems and modern UI experiences.
          Focused on clean architecture, performance and real-world product impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,136,255,0.25)] breathing-glow">
            <div className="text-red-500 mb-4">
              <Code size={32} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Scalable Systems</h3>
            <p className="text-sm text-slate-400">
              Designed and built scalable production-ready systems used in real projects.
            </p>
          </div>

          <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,136,255,0.25)] breathing-glow">
            <div className="text-blue-500 mb-4">
              <Layers size={32} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Modern Frontend</h3>
            <p className="text-sm text-slate-400">
              Modern React, Tailwind, Next.js and component driven architecture.
            </p>
          </div>

          <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,136,255,0.25)] breathing-glow">
            <div className="text-yellow-500 mb-4">
              <Zap size={32} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">High Performance</h3>
            <p className="text-sm text-slate-400">
              Optimized applications for speed, SEO and user experience.
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}
