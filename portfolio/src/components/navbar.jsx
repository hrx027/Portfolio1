export function Navbar() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#tools" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className=" top-0 z-50">
      <div className="  px-10 pt-10">
        <div className="flex  justify-center">
          <nav className="flex items-center gap-2 px-4 py-3 rounded-2xl border">
            {items.map(({ label, href }) => {
              return (
                <a
                  key={label}
                  href={href}
                  className="relative rounded-xl border border-white/10 bg-neutral-800/80 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:border-white/30 breathing-glow"
                >
                  {label}
                </a>
              )
            })}
          </nav>

        </div>
      </div>
    </header>
  )
}
