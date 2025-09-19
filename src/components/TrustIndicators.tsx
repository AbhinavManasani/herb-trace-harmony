import { Shield, Award, Leaf, Users, BarChart3, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: "Blockchain Security",
      value: "256-bit",
      description: "Military-grade encryption securing every transaction",
      color: "trust"
    },
    {
      icon: Award,
      title: "Compliance Rate",
      value: "99.8%",
      description: "AYUSH Ministry guidelines and export standards",
      color: "gold"
    },
    {
      icon: Leaf,
      title: "Species Tracked",
      value: "500+",
      description: "Medicinal plants with complete provenance records",
      color: "emerald"
    },
    {
      icon: Users,
      title: "Verified Farmers",
      value: "10,000+",
      description: "Registered collectors across India's biodiversity zones",
      color: "earth"
    },
    {
      icon: BarChart3,
      title: "Data Points",
      value: "50M+",
      description: "Collection events, quality tests, and processing steps",
      color: "forest"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      value: "<1 sec",
      description: "Instant blockchain confirmations and notifications",
      color: "saffron"
    }
  ];

  const certifications = [
    "AYUSH Ministry Approved",
    "Good Agricultural Practices (GAP)",
    "ISO 9001:2015 Quality Management",
    "HACCP Food Safety Standards",
    "FSSAI Licensed Operations",
    "Organic Certification (NPOP)"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-forest text-forest">
            Trust & Compliance
          </Badge>
          <h2 className="text-4xl font-bold text-charcoal-gray mb-6">
            Built on Trust, Verified by Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our blockchain platform meets the highest standards for security, compliance, 
            and transparency in the Ayurvedic industry.
          </p>
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {indicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            const colorClasses = {
              trust: "text-trust bg-trust/10",
              gold: "text-gold bg-gold/10",
              emerald: "text-emerald bg-emerald/10",
              earth: "text-earth bg-earth/10",
              forest: "text-forest bg-forest/10",
              saffron: "text-saffron bg-saffron/10"
            }[indicator.color as keyof typeof colorClasses];

            return (
              <Card key={index} className="p-6 hover:shadow-glow transition-smooth bg-white/80 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${colorClasses}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-2xl font-bold text-charcoal-gray">
                        {indicator.value}
                      </span>
                      <span className="text-sm font-semibold text-muted-foreground">
                        {indicator.title}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {indicator.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl p-8 shadow-soft border border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-charcoal-gray mb-3">
              Regulatory Certifications & Standards
            </h3>
            <p className="text-muted-foreground">
              Compliance with national and international quality frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-secondary/50 hover:bg-emerald/5 transition-smooth">
                <div className="w-2 h-2 bg-emerald rounded-full"></div>
                <span className="text-sm font-medium text-charcoal-gray">{cert}</span>
              </div>
            ))}
          </div>

          {/* Compliance Statement */}
          <div className="mt-8 p-6 bg-gradient-to-r from-emerald/5 to-forest/5 rounded-lg border border-emerald/20">
            <div className="flex items-start space-x-4">
              <Shield className="h-6 w-6 text-emerald mt-1" />
              <div>
                <h4 className="font-semibold text-charcoal-gray mb-2">
                  Full Regulatory Compliance
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our platform adheres to all AYUSH Ministry guidelines, National Medicinal Plants Board 
                  regulations, and international export standards. Regular audits ensure continuous 
                  compliance with evolving regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;