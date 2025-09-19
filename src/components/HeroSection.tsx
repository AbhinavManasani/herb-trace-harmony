import { Shield, Leaf, MapPin, QrCode, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-blockchain-herbs.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ayurvedic herbs blockchain traceability" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Shield className="h-4 w-4 text-emerald" />
              <span className="text-sm font-medium">Blockchain Verified Transparency</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-wisdom bg-clip-text text-transparent">Ancient Wisdom,</span>
                <br />
                <span className="text-white">Modern Trust</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                End-to-end blockchain traceability for Ayurvedic herbs. From farm to pharmacy, 
                verify authenticity, sustainability, and quality with complete transparency.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-emerald" />
                <span className="text-sm">GPS Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <QrCode className="h-5 w-5 text-gold" />
                <span className="text-sm">QR Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-emerald" />
                <span className="text-sm">Sustainable Source</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="wisdom" size="xl" className="group">
                Start Tracing Journey
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="nature-outline" size="xl">
                <QrCode className="h-5 w-5" />
                Scan Product QR
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6 hover:bg-white/15 transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Immutable Records</h3>
                  <p className="text-gray-200 text-sm">
                    Every harvest, processing step, and quality test permanently recorded on the blockchain
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6 hover:bg-white/15 transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="bg-gold p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Geo-Tagged Origins</h3>
                  <p className="text-gray-200 text-sm">
                    Precise GPS coordinates and environmental data from collection points
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6 hover:bg-white/15 transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="bg-trust p-3 rounded-lg">
                  <QrCode className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Consumer Transparency</h3>
                  <p className="text-gray-200 text-sm">
                    Scan QR codes to see complete journey from harvest to your hands
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowRight className="h-6 w-6 text-white rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;