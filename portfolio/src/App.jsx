import { ProfileCard } from './components/profile-card.jsx'
import { HeroSection } from './components/hero-section.jsx'
import { RecentProjects } from './components/recent-projects.jsx'
import { PremiumTools } from './components/premium-tools.jsx'
import { ContactSection } from './components/contact-section.jsx'
import { Navbar } from './components/navbar.jsx'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[1fr_2fr] gap-12">
        <section className="animate-fade-up lg:sticky lg:top-16 lg:self-start">
          <ProfileCard />
        </section>
        <section className="space-y-12 animate-fade-up delay-150">
          <HeroSection />
          <RecentProjects />
          <PremiumTools />
          <ContactSection />
        </section>
      </main>
    </div>
  )
}

export default App
