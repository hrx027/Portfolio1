import { useRef, useMemo } from "react"
import { motion as Motion, useMotionValue, useTransform } from "framer-motion"
import { ClipboardList } from "lucide-react"
import resume from "../assets/HrithikRaj_2K22_CO_216.pdf"
export default function ResumeCard() {
  const containerRef = useRef(null)

  // Motion values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  // Matrix background chars
  const chars = useMemo(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const repeatCount = Math.ceil(500 / characters.length)
    return (characters.repeat(repeatCount)).slice(0, 500)
  }, [])

  return (
    <div className="w-full max-w-md mx-auto rounded-3xl border border-white/10 bg-black p-4 shadow-2xl">

      {/* Interactive Header */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-48 w-full overflow-hidden rounded-2xl bg-zinc-950 group flex items-center justify-center"
      >
        {/* Glow */}
        <Motion.div
          className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity"
          style={{
            background: "radial-gradient(circle at var(--x) var(--y), #0ea5e9 0%, transparent 50%)",
            "--x": useTransform(mouseX, (x) => `${x}px`),
            "--y": useTransform(mouseY, (y) => `${y}px`),
          }}
        />

        {/* Matrix text */}
        <div className="absolute inset-0 p-4 text-[10px] font-mono text-zinc-800 leading-none tracking-widest break-all select-none opacity-50">
          {chars}
        </div>
         <a
  href={resume}
  download
  className="block"
>
        {/* Center content */}
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white">Resume</h2>
          <p className="text-sm text-zinc-400 mt-1">(Click to download)</p>
        </div>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-6 px-2 pb-2">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-zinc-900 border border-white/10">
                   <a
  href={resume}
  download
  className="block"
>
            <ClipboardList className="w-5 h-5 text-zinc-400" />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">
          Download My Resume
        </h3>

        <p className="text-zinc-400 text-[15px] leading-relaxed">
          A quick summary of my experience, projects, and skills — available for download.
        </p>
      </div>
    </div>
  )
}
