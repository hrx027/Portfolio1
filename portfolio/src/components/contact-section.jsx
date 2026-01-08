import { Download, Mail, Github, Linkedin } from "lucide-react"
import ResumeCard from "./ResumeCard"
import ConnectCard from "./ConnectCard"
export function ContactSection() {
  return (
    <section className="px-8 md:px-12 py-20 bg-transparent min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-12">LET'S WORK TOGETHER</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ResumeCard/>
          <ConnectCard/>
        </div>
      </div>
    </section>
  )
}
