import { Leaf, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-forest text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Leaf className="h-8 w-8 text-emerald" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-gold rounded-full border-2 border-forest"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">HerbChain</h3>
                <p className="text-xs text-emerald">Blockchain Traceability</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Revolutionizing Ayurvedic herb supply chains through transparent, 
              blockchain-based traceability solutions. Ancient wisdom meets modern technology.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-emerald hover:bg-emerald/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-emerald hover:bg-emerald/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-emerald hover:bg-emerald/10">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Platform</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-gray-300 hover:text-emerald transition-smooth">
                Blockchain Network
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-emerald transition-smooth">
                Quality Dashboard
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-emerald transition-smooth">
                Consumer Portal
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-emerald transition-smooth">
                Farmer Interface
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-emerald transition-smooth">
                API Documentation
              </a>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Solutions</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-gray-300 hover:text-emerald transition-smooth">
                Supply Chain Tracking
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-emerald transition-smooth">
                Quality Assurance
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-emerald transition-smooth">
                Compliance Management
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-emerald transition-smooth">
                Sustainability Reports
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-emerald transition-smooth">
                Export Documentation
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>AYUSH Innovation Hub</p>
                  <p>New Delhi, India 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald" />
                <span className="text-sm text-gray-300">support@herbchain.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald" />
                <span className="text-sm text-gray-300">+91 11 2345 6789</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="font-semibold text-sm mb-3">Stay Updated</h5>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald"
                />
                <Button variant="emerald" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2024 HerbChain. All rights reserved. | 
              <span className="ml-1 text-emerald">Transparency Rooted in Trust</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-emerald transition-smooth">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-emerald transition-smooth">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-emerald transition-smooth">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;