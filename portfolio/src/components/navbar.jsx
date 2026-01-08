import { useState } from "react"
import { Home, Folder, Briefcase, Wrench, PencilLine } from "lucide-react"
import { Input } from "./ui/input.tsx"

export function Navbar() {
  const [hovered, setHovered] = useState("")

  const items = [
    { label: "Home", icon: Home, href: "#" },
    { label: "Projects", icon: Folder, href: "#projects" },
    { label: "Experience", icon: Briefcase, href: "#experience" },
    { label: "Tools", icon: Wrench, href: "#tools" },
    { label: "Contact", icon: PencilLine, href: "#contact" },
  ]

  return (
    <header className=" top-0 z-50">
      <div className="  px-6 pt-6">
        <div className="flex  justify-center rounded-2xl border">
          <nav className="flex items-center gap-4 px-4 py-3">
            {items.map(({ label, icon, href }) => {
              const IconComp = icon
              return (
                <a
                  key={label}
                  href={href}
                  onMouseEnter={() => setHovered(label)}
                  onMouseLeave={() => setHovered("")}
                  className="group relative inline-flex items-center justify-center rounded-xl border border-white/10 bg-neutral-800/80 p-2 text-white transition-transform hover:scale-105 hover:border-white/30"
                  title={label}
                >
                  <IconComp className="size-5" />
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-white/10 px-2 py-0.5 text-xs text-white opacity-0 shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    {label}
                  </span>
                </a>
              )
            })}
          </nav>

        </div>
      </div>
    </header>
  )
}
