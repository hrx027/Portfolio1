const tools = [
  {
    id: 1,
    name: "Framer",
    description: "Website Builder",
    icon: "🎨",
    color: "bg-white",
  },
  {
    id: 2,
    name: "Figma",
    description: "Design Tool",
    icon: "🎨",
    color: "bg-purple-500",
  },
  {
    id: 3,
    name: "Lemon Squeezy",
    description: "Payments Provider",
    icon: "🍋",
    color: "bg-yellow-400",
  },
  {
    id: 4,
    name: "ChatGPT",
    description: "AI Assistant",
    icon: "🤖",
    color: "bg-green-500",
  },
  {
    id: 5,
    name: "Notion",
    description: "Productivity Tool",
    icon: "📝",
    color: "bg-gray-700",
  },
  {
    id: 6,
    name: "Nextjs",
    description: "React Framework",
    icon: "⚛️",
    color: "bg-black",
  },
]

export function PremiumTools() {
  return (
    <section className="px-8 md:px-12 py-20 bg-transparent">
      <div className="max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4">PREMIUM</h2>
        <h2 className="text-5xl md:text-6xl font-black text-slate-600 dark:text-slate-700 mb-12">TOOLS</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 group cursor-pointer border border-slate-700 hover:border-orange-500"
            >
              <div
                className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition-transform`}
              >
                {tool.icon}
              </div>
              <h3 className="font-bold text-white mb-1">{tool.name}</h3>
              <p className="text-xs text-slate-400">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
