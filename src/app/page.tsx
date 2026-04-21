import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedServices from "@/components/home/FeaturedServices";
import PartnerLogos from "@/components/home/PartnerLogos";
import StatsCounter from "@/components/home/StatsCounter";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <CategoryGrid />
        <FeaturedServices />
        <StatsCounter />
        <PartnerLogos />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
