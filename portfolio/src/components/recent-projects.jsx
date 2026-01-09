import { ArrowUpRight } from "lucide-react"
import chatty from "../assets/chatty.png"
import resume_matcher from "../assets/resume_matcher.png"
import pdf_analyser from "../assets/pdfanalyser.png"
const projects = [
  {
    id: 1,
    name: "Chatty App",
    description: "Full Stack Chatting Application",
    image: chatty,
    link:"https://chatty-alpha-seven.vercel.app/"
  },
  {
    id: 2,
    name: "Resume Matcher",
    description: "Analyzes resumes and according to the jd",
    image: resume_matcher,
    link: "https://hrx027resumematcher.streamlit.app",
  },
  {
    id: 3,
    name: "Pdf Intelligent Analyser",
    description: "Help you to analyse the pdf and then answer the questions based on the pdf",
    image: pdf_analyser,
    link: "https://hrx027pdfanalyser.streamlit.app",
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
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card relative flex gap-6 group cursor-pointer items-center breathing-glow rounded-2xl p-4"
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
