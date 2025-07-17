import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-400/10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 mb-12">
            
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/3863a302-63a5-4e77-ac24-0c7f1592c2ea.png" 
                  alt="CryptoLaw Logo" 
                  className="h-16 w-auto"
                />
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Spezialisiert auf Kryptowährungsrecht, Betrugswiederherstellung und Anlegerschutz. 
                Mit über 10 Jahren Erfahrung im Finanzrecht sind wir Ihr vertrauensvoller Partner 
                bei komplexen Rechtsfragen im digitalen Zeitalter.
              </p>

              {/* Newsletter Signup */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h4 className="font-semibold mb-3 text-white">Newsletter abonnieren</h4>
                <p className="text-sm text-gray-400 mb-4">Bleiben Sie über aktuelle Rechtsentwicklungen informiert</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Ihre E-Mail-Adresse" 
                    className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                  />
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                    Abonnieren
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Leistungen</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/#services" className="text-gray-300 hover:text-blue-400 transition-colors">Krypto-Recovery</a></li>
                <li><a href="/#services" className="text-gray-300 hover:text-blue-400 transition-colors">Finanzrecht</a></li>
                <li><a href="/#services" className="text-gray-300 hover:text-blue-400 transition-colors">Anlegerschutz</a></li>
                <li><a href="/#services" className="text-gray-300 hover:text-blue-400 transition-colors">Blockchain-Forensik</a></li>
                <li><a href="/#services" className="text-gray-300 hover:text-blue-400 transition-colors">ICO-Beratung</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Rechtliches</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Impressum</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">AGB</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Haftungsausschluss</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Friedrichstraße 123<br />
                    10117 Berlin
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">+49 30 123 456 789</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">info@cryptolaw.de</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h5 className="font-medium mb-3 text-white">Folgen Sie uns</h5>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Youtube className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2024 CryptoLaw. Alle Rechte vorbehalten.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Impressum</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Datenschutz</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie-Einstellungen</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};