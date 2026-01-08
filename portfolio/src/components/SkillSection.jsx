const SKILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Sanity",
  "Contentful",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Zustand",
  "Zod",
  "pnpm",
  "Bun",
  "Git",
  "GitHub",
  "Vercel",
  "AWS",
  "Docker",
  "Linux",
]

export default function SkillsSection() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-8">

      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          My Skillset
        </p>

        <h3 className="text-3xl md:text-4xl font-extrabold mt-2">
          The Magic{" "}
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent italic">
            Behind
          </span>
        </h3>
      </div>

      {/* Skills Pills */}
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="
              px-4 py-2 rounded-full text-sm font-medium
              bg-white/5 border border-white/10
              text-gray-300
              hover:bg-white/10 hover:text-white
              transition-all duration-200
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
