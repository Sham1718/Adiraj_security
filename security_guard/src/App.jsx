import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import CredentialsSection from './components/CredentialsSection'
import CoverageSection from './components/CoverageSection'
import ProofBand from './components/ProofBand'
import WhyChooseSection from './components/WhyChooseSection'
import ClientsSection from './components/ClientsSection'
import PartnersSection from './components/PartnersSection'
import QuoteSection from './components/QuoteSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <main className="site-shell theme-dark">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CredentialsSection />
      <CoverageSection />
      <ProofBand />
      <WhyChooseSection />
      <ClientsSection />
      <PartnersSection />
      <QuoteSection />
      <ContactSection />
    </main>
  )
}

export default App
