import { Leaf, Shield, QrCode, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Leaf className="h-8 w-8 text-forest" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-trust rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-forest">HerbChain</h1>
              <p className="text-xs text-muted-foreground">Blockchain Traceability</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-charcoal-gray hover:text-forest transition-smooth font-medium">
              Home
            </a>
            <a href="#traceability" className="text-charcoal-gray hover:text-forest transition-smooth font-medium">
              Traceability
            </a>
            <a href="#dashboard" className="text-charcoal-gray hover:text-forest transition-smooth font-medium">
              Dashboard
            </a>
            <a href="#portal" className="text-charcoal-gray hover:text-forest transition-smooth font-medium">
              Consumer Portal
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="nature-outline" size="sm" className="hidden sm:flex">
              <QrCode className="h-4 w-4" />
              Scan QR
            </Button>
            <Button variant="hero" size="sm">
              <Shield className="h-4 w-4" />
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;