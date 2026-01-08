import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Chatty App",
    description: "Full Stack Chatting Application",
    image: "/saas-ai-dashboard-interface.jpg",
  },
  {
    id: 2,
    name: "Resume-Analyser",
    description: "Analyzes resumes and according to the jd",
    image: "/modern-web-design-template.jpg",
  },
  {
    id: 3,
    name: "Pdf-Analyser",
    description: "Help you to analyse the pdf and then answer the questions based on the pdf",
    image: "/creative-web-design-portfolio.jpg",
  },
]

export function RecentProjects() {
  return (
    <section className="px-8 md:px-12 py-20 bg-transparent">
      <div className="max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-2">RECENT</h2>
        <h2 className="text-5xl md:text-6xl font-black text-neutral-600 mb-12">PROJECTS</h2>

        <div className="space-y-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href="#"
              className="relative flex gap-6 group cursor-pointer items-center"
            >
              <div className="w-44 h-44 rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-800 border border-neutral-700 shadow-md group-hover:border-orange-500 transition-colors">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-extrabold text-white mb-2 tracking-tight group-hover:text-orange-500 transition-colors">
                  {project.name}
                </h3>
                <p className="text-neutral-400 text-base">{project.description}</p>
              </div>
              <ArrowUpRight
                className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"
                size={18}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
