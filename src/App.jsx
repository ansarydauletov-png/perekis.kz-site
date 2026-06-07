import TildaHeader from './components/layout/TildaHeader'
import TildaFab from './components/layout/TildaFab'
import Separator from './components/layout/Separator'
import HeroSection from './components/sections/HeroSection'
import CertificateSection from './components/sections/CertificateSection'
import BenefitsSection from './components/sections/BenefitsSection'
import DeliverySection from './components/sections/DeliverySection'
import CatalogSection from './components/sections/CatalogSection'
import ReviewsSection from './components/sections/ReviewsSection'
import CalculatorSection from './components/sections/CalculatorSection'
import LocationSection from './components/sections/LocationSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  return (
    <div className="t-page">
      <TildaHeader />
      <main>
        <HeroSection />
        <CertificateSection />
        <BenefitsSection />
        <Separator />
        <DeliverySection />
        <Separator />
        <CatalogSection />
        <ReviewsSection />
        <CalculatorSection />
        <LocationSection />
        <ContactSection />
      </main>
      <TildaFab />
    </div>
  )
}
