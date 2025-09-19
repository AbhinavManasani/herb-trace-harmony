import { QrCode, MapPin, Award, Leaf, Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import qrDemoImage from "@/assets/qr-scanner-demo.jpg";

const QRPortalDemo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 border-trust text-trust">
                Consumer Portal
              </Badge>
              <h2 className="text-4xl font-bold text-charcoal-gray mb-6">
                Scan. Verify. Trust.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every product comes with a unique QR code that unlocks the complete story 
                of your Ayurvedic herbs—from the soil they grew in to the hands that harvested them.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald/10 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-emerald" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-1">Geographic Origin</h4>
                  <p className="text-sm text-muted-foreground">
                    View exact collection coordinates with interactive maps and regional climate data
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-1">Quality Certifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Access laboratory test results, purity certificates, and compliance documentation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-earth/10 p-2 rounded-lg">
                  <User className="h-5 w-5 text-earth" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-1">Farmer Stories</h4>
                  <p className="text-sm text-muted-foreground">
                    Meet the farmers and collectors who sustainably sourced your herbs
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-forest/10 p-2 rounded-lg">
                  <Leaf className="h-5 w-5 text-forest" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-1">Sustainability Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Track environmental benefits and conservation contributions
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button variant="hero" size="lg" className="group">
                Try Demo Portal
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - Demo Interface */}
          <div className="relative">
            {/* Background Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img 
                src={qrDemoImage} 
                alt="QR code scanner demo interface" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Demo Cards */}
            <div className="absolute -right-4 top-8 w-64">
              <Card className="bg-white p-4 shadow-glow border-emerald/20">
                <div className="flex items-center space-x-3 mb-3">
                  <QrCode className="h-5 w-5 text-trust" />
                  <span className="font-semibold text-sm">Scan Result</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Product:</span>
                    <span className="font-medium">Ashwagandha Root</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Origin:</span>
                    <span className="font-medium">Rajasthan, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Harvest:</span>
                    <span className="font-medium">Dec 2024</span>
                  </div>
                  <Badge variant="outline" className="text-emerald border-emerald">
                    Certified Organic
                  </Badge>
                </div>
              </Card>
            </div>

            <div className="absolute -left-4 bottom-8 w-64">
              <Card className="bg-white p-4 shadow-soft border-gold/20">
                <div className="flex items-center space-x-3 mb-3">
                  <User className="h-5 w-5 text-earth" />
                  <span className="font-semibold text-sm">Farmer Profile</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Collector:</span>
                    <span className="font-medium">Rajesh Kumar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium">15 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Practices:</span>
                    <span className="font-medium">Sustainable</span>
                  </div>
                  <Badge variant="outline" className="text-gold border-gold">
                    Fair Trade Certified
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRPortalDemo;