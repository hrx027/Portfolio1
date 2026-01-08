import { ProfileCard } from './components/profile-card.jsx'
import { HeroSection } from './components/hero-section.jsx'
import { RecentProjects } from './components/recent-projects.jsx'
import { PremiumTools } from './components/premium-tools.jsx'
import { ContactSection } from './components/contact-section.jsx'
import { Navbar } from './components/navbar.jsx'
import { StarBackground } from './components/star-background.jsx'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <StarBackground />
      <Navbar />
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[1fr_2fr] gap-12">
        <section className="animate-fade-up lg:sticky lg:top-16 lg:self-start">
          <ProfileCard />
        </section>
        <section className="space-y-12 animate-fade-up delay-150">
          <div id="home">
             <HeroSection />
          </div>
          <div id="projects">
            <RecentProjects />
          </div>
          <div id="tools">
            <PremiumTools />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
