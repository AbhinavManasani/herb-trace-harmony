import { Sprout, MapPin, FlaskConical, Package, QrCode, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TraceabilityFlow = () => {
  const steps = [
    {
      icon: Sprout,
      title: "Collection & Harvest",
      description: "GPS-tagged collection events with species identification and quality metrics",
      color: "earth",
      details: ["Location coordinates", "Collector identity", "Harvest conditions", "Initial quality check"]
    },
    {
      icon: FlaskConical,
      title: "Quality Testing",
      description: "Laboratory analysis for purity, potency and authenticity verification",
      color: "trust",
      details: ["Moisture content", "Pesticide screening", "DNA barcoding", "Heavy metal testing"]
    },
    {
      icon: Package,
      title: "Processing & Storage",
      description: "Controlled processing steps with environmental monitoring and batch tracking",
      color: "emerald",
      details: ["Temperature logs", "Processing methods", "Storage conditions", "Batch numbers"]
    },
    {
      icon: QrCode,
      title: "Smart Labeling",
      description: "Unique QR codes generated on-chain for complete product identification",
      color: "gold",
      details: ["Blockchain hash", "Product serialization", "Traceability link", "Consumer access"]
    },
    {
      icon: Users,
      title: "Consumer Verification",
      description: "End customers scan QR codes to access complete provenance records",
      color: "saffron",
      details: ["Origin mapping", "Quality certificates", "Sustainability proof", "Farmer profiles"]
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-forest text-forest">
            Blockchain Traceability
          </Badge>
          <h2 className="text-4xl font-bold text-charcoal-gray mb-6">
            From Farm to Pharmacy: Complete Transparency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every Ayurvedic herb follows a documented journey through our permissioned blockchain network, 
            ensuring authenticity, quality, and sustainable sourcing practices.
          </p>
        </div>

        {/* Flow Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-nature rounded-full transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const colorClass = {
                earth: "bg-earth",
                trust: "bg-trust", 
                emerald: "bg-emerald",
                gold: "bg-gold",
                saffron: "bg-saffron"
              }[step.color as keyof typeof colorClass];

              return (
                <Card key={index} className="p-6 hover:shadow-glow transition-smooth bg-white border-2 border-transparent hover:border-forest/20">
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className={`${colorClass} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-forest text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-lg font-semibold text-charcoal-gray">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-forest mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Transparency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald mb-2">5-Step</div>
            <div className="text-sm text-muted-foreground">Verification</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">GPS</div>
            <div className="text-sm text-muted-foreground">Geo-Tagging</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-trust mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraceabilityFlow;