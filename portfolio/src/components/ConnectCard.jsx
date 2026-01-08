import { motion as Motion } from "framer-motion"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function ConnectCard() {
  return (
    <Motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative rounded-3xl border border-white/10 bg-zinc-950 p-6 overflow-hidden shadow-xl justify-center items-center flex flex-col"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity " />

      {/* Header */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">
          Let’s Connect
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          Open to internships, freelance opportunities, and meaningful collaborations.
        </p>
      </div>

      {/* Primary CTA */}
      <a
        href="mailto:hrx027@gmail.com"
        className="relative z-10 flex items-center justify-center gap-2 w-full rounded-full bg-white text-black font-medium py-3 mb-6 hover:scale-[1.02] transition"
      >
        <Mail size={18} />
        Email Me
      </a>

      {/* Social links */}
      <div className="relative z-10 flex items-center justify-center gap-4">
        <IconButton href="https://github.com/hrx027">
          <Github />
        </IconButton>

        <IconButton href="https://linkedin.com/in/hrx027">
          <Linkedin />
        </IconButton>

       
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </Motion.div>
  )
}

/* Small reusable icon button */
function IconButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-300 transition hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] hover:border-cyan-400/50"
    >
      {children}
    </a>
  )
}
