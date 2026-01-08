import { ProfileCard } from './components/profile-card.jsx'
import { HeroSection } from './components/hero-section.jsx'
import { RecentProjects } from './components/recent-projects.jsx'
import { PremiumTools } from './components/premium-tools.jsx'
import { ContactSection } from './components/contact-section.jsx'
import { Navbar } from './components/navbar.jsx'
import { StarBackground } from './components/star-background.jsx'
import { SpotlightCursor } from './components/spotlight-cursor.jsx'
import { Reveal } from './components/reveal.jsx'

function App() {
  return (
    <div className="lg:h-screen lg:overflow-hidden min-h-screen text-white relative flex flex-col">
      <SpotlightCursor />
      <StarBackground />
      
      {/* Asteroids Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="asteroid"
            style={{
              top: `${Math.random() * 100 + 10}%`,
              left: `${Math.random() * 100 + 10}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <Navbar />
      <main className="relative z-10 max-w-7xl mx-auto px-10 grid lg:grid-cols-[1fr_2fr] gap-16 w-full flex-1 lg:overflow-hidden">
        <section className="lg:h-full lg:flex lg:flex-col lg:justify-center py-8 lg:py-0">
          <Reveal>
            <ProfileCard />
          </Reveal>
        </section>
        <section className="space-y-12 pb-16 lg:h-full lg:overflow-y-auto lg:py-16 lg:px-4">
          <Reveal>
            <div id="home">
               <HeroSection />
            </div>
          </Reveal>
          <Reveal>
            <div id="projects">
              <RecentProjects />
            </div>
          </Reveal>
          <Reveal>
            <div id="tools">
              <PremiumTools />
            </div>
          </Reveal>
          <Reveal>
            <div id="contact">
              <ContactSection />
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  )
}

export default App
