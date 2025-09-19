import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TraceabilityFlow from "@/components/TraceabilityFlow";
import QRPortalDemo from "@/components/QRPortalDemo";
import TrustIndicators from "@/components/TrustIndicators";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TraceabilityFlow />
        <QRPortalDemo />
        <TrustIndicators />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
