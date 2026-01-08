import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function ProfileCard() {
  return (
    <div className="relative">
      <div className="bg-white rounded-3xl p-8 shadow-2xl transition-transform duration-300 hover:scale-105">
        <div className="absolute -top-8 -right-8 w-24 h-24 border-2 border-orange-500 rounded-full opacity-20"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full opacity-10"></div>
        <div className="absolute top-12 -left-6 w-12 h-12 border-2 border-dashed border-orange-400 rounded-full"></div>
        <div className="mb-6">
          <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-orange-500 via-orange-600 to-red-500">
            <img src="/software-engineer-portrait.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Hrithik Raj</h2>
        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          A Software Engineer who has developed countless innovative solutions.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}
