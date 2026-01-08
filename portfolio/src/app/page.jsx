import { ProfileCard } from "@/components/profile-card"
import { HeroSection } from "@/components/hero-section"
import { RecentProjects } from "@/components/recent-projects"
import { PremiumTools } from "@/components/premium-tools"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark:bg-slate-950 flex justify-center">
      {/* Fixed Left Sidebar */}
      <div className="hidden lg:block lg:w-1/3 fixed left-0 top-0 h-screen overflow-hidden p-8">
        <ProfileCard />
      </div>

      {/* Scrollable Right Content */}
      <div className="w-full lg:w-2/3 lg:ml-auto overflow-y-auto h-screen">
        <div className="w-full">
          <HeroSection />
          <RecentProjects />
          <PremiumTools />
          <ContactSection />
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden w-full">
        <div className="p-6 space-y-8">
          <ProfileCard />
          <HeroSection />
          <RecentProjects />
          <PremiumTools />
          <ContactSection />
        </div>
      </div>
    </div>
  )
}
