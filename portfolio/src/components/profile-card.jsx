import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import  profile from "../assets/pfp.png"
export function ProfileCard() {
  return (
    <div className="relative fixed">
      <div className="card-glow relative rounded-3xl p-6 bg-neutral-900/60 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,153,255,0.15)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,136,255,0.25)] hover:scale-[1.02] animate-float">
        <div className="absolute -top-8 -right-8 w-24 h-24 border-2 border-orange-500 rounded-full opacity-20"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full opacity-10"></div>
        <div className="absolute top-12 -left-6 w-12 h-12 border-2 border-dashed border-orange-400 rounded-full"></div>
        <div className="mb-6">
          <div className="photo-tilt relative w-full">
            <div className="relative overflow-hidden rounded-2xl p-[2px]">
              <div className="thin-neon-border"></div>

              <div className="photo-shadow absolute inset-0"></div>
              <div className="glass-reflection absolute inset-0"></div>

              <img 
                src={profile} 
                alt="Hrithik Raj" 
                className="relative z-10 rounded-2xl object-cover w-full h-full" 
              />
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-wide mb-2">Hrithik Raj</h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          A software developer passionate about building practical, reliable, and user-centric solutions.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/hrx027" className="text-orange-400 hover:text-orange-300 hover:drop-shadow-[0_0_6px_orange] transition-all">
            <Github size={24} />
          </a>
          <a href="www.linkedin.com/in/hrx027" className="text-orange-400 hover:text-orange-300 hover:drop-shadow-[0_0_6px_orange] transition-all">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/hrx027" className="text-orange-400 hover:text-orange-300 hover:drop-shadow-[0_0_6px_orange] transition-all">
            <Twitter size={24} />
          </a>
          <a href="https://www.instagram.com/hrx027/" className="text-orange-400 hover:text-orange-300 hover:drop-shadow-[0_0_6px_orange] transition-all">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}
