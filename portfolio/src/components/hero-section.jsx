import { Code, Layers, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="px-2 md:px-6 py-8">
      <div className="">
        <h1 className="text-6xl md:text-7xl font-black text-white mb-4 leading-tight">SOFTWARE</h1>
        <h1 className="text-6xl md:text-7xl font-black text-white/30 mb-8 leading-tight">
          ENGINEER
        </h1>
        <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-lg">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into
          beautifully crafted products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
            <div className="text-red-500 mb-4">
              <Code size={32} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Clean Code</h3>
            <p className="text-sm text-slate-400">
              Writing readable, maintainable, and scalable codebases.
            </p>
          </div>

          <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
            <div className="text-blue-500 mb-4">
              <Layers size={32} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Component Architecture</h3>
            <p className="text-sm text-slate-400">
              Designing reusable systems with strong separation of concerns.
            </p>
          </div>

          <div className="bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
            <div className="text-yellow-500 mb-4">
              <Zap size={32} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Performance</h3>
            <p className="text-sm text-slate-400">
              Optimizing load times, rendering, and user interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
