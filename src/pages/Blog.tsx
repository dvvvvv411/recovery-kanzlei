import { Section } from "@/components/ui/section";
import { Calendar, Clock, User, Scale, ChevronRight, Shield, Award, MapPin, Phone, Mail, AlertTriangle, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: "krypto-betrugsopfer-bekommt-869-bitcoin-zurueck",
      title: "Krypto Betrugsopfer bekommt 8,69 Bitcoin zurück",
      excerpt: "Ein österreichisches Betrugsopfer erhielt kürzlich 8,69 Bitcoin zurück – ein Wert von rund 800.000 EUR (Stand Juli 2025).",
      image: "/lovable-uploads/ab82bf83-5ca8-46b3-83b4-5cb6f9c16646.png",
      date: "7. Juli 2025",
      readTime: "8 min",
      tags: ["CyberCrime", "Kryptowährung", "Betrugsbekämpfung"]
    },
    {
      id: "ceo-fraud-und-ueberweisungsbetrug",
      title: "CEO-Fraud und Überweisungsbetrug",
      excerpt: "Was tun bei Falschüberweisung nach gefälschten E-Mails? Professionelle Betrugsmasche mit gezielten Angriffen auf Unternehmen.",
      image: "/lovable-uploads/e6fcfe46-5300-4b17-bafe-fda583555ddc.png",
      date: "16. Juli 2025",
      readTime: "6 min",
      tags: ["CyberCrime", "CEO-Fraud", "Überweisungsbetrug"]
    },
    {
      id: "ogh-kreditgebuehr-unzulaessig",
      title: "Kreditbearbeitungsgebühren unzulässig",
      excerpt: "OGH-Urteil ermöglicht Rückforderung. In welchen Fällen Sie die bereits bezahlte Bearbeitungsgebühren zurückfordern können.",
      image: "/lovable-uploads/80e2e160-2ba5-459b-b753-58265ea0882e.png",
      date: "7. Juli 2025",
      readTime: "6 min",
      tags: ["Verbraucherrecht", "Bankrecht", "OGH-Urteil"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - same as other pages */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-glass backdrop-blur-md border-b border-[var(--border-glass)] shadow-glass">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-[0_0_20px_hsl(214_100%_60%_/_0.4)]">
              <Scale className="h-6 w-6 text-white drop-shadow-lg" />
            </div>
            <span className="text-xl font-bold text-white" style={{ textShadow: 'var(--text-glow)' }}>
              Crypto<span className="bg-gradient-primary bg-clip-text text-transparent">Law</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
            </Link>
            <a href="#services" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
              Leistungen
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#team" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
              Team
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#successes" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
              Erfolge
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#about" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
              Über uns
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#contact" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
              Kontakt
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
            </a>
            <Button variant="outline" className="bg-gradient-glass backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-primary/50 transition-all duration-300 shadow-glass hover:shadow-[0_0_30px_hsl(214_100%_60%_/_0.6)] hover:border-primary/80" style={{ textShadow: 'var(--text-glow)', boxShadow: '0 0 20px hsl(214 100% 60% / 0.3), var(--shadow-glass)' }}>
              Beratung anfragen
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="py-20 lg:py-32 relative overflow-hidden h-[50vh] flex items-center bg-gray-800">
        <div className="absolute inset-0 w-full h-full" style={{ top: '-64px', height: 'calc(100% + 64px)' }}>
          <iframe 
            src="https://player.vimeo.com/video/1101576926?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{width:"177.78vh", height:"calc(100vh + 64px)", minWidth:"100%", minHeight:"calc(100% + 64px)"}} 
            title="Crypto Background Video"
          />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span> & Rechtsnews
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Aktuelle Fälle, Rechtsentwicklungen und Expertenwissen zu Kryptowährungen und CyberCrime
            </p>
          </div>
        </div>
      </Section>

      {/* Blog Posts Grid - 3 Columns */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogPosts.map((post, index) => (
                <article key={post.id} className="group relative h-[400px] flex flex-col">
                  {/* Direct blog post layout - no card background */}
                  <Link to={`/blog-post/${post.id}`} className="block h-full flex flex-col">
                    {/* Image Section - Exactly 50% */}
                    <div className="relative h-1/2 overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Text Section - Exactly 50% */}
                    <div className="h-1/2 p-3 flex flex-col justify-between">
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h2 className="text-base lg:text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div>
                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Read More Link */}
                        <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                          <span>Artikel lesen</span>
                          <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Professional Footer */}
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
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg">
                    <Scale className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                      CryptoLaw
                    </span>
                    <p className="text-sm text-gray-400">Rechtsanwaltskanzlei</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Spezialisiert auf Kryptowährungsrecht, Betrugswiederherstellung und Anlegerschutz. 
                  Mit über 10 Jahren Erfahrung im Finanzrecht sind wir Ihr vertrauensvoller Partner 
                  bei komplexen Rechtsfragen im digitalen Zeitalter.
                </p>

                {/* Newsletter Signup */}
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <h4 className="font-semibold mb-3 text-white">Newsletter abonnieren</h4>
                  <p className="text-sm text-gray-400 mb-3">Bleiben Sie über aktuelle Rechtsentwicklungen informiert</p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Ihre E-Mail-Adresse" 
                      className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Legal Services */}
              <div>
                <h3 className="font-semibold text-white mb-6 text-lg">Rechtsgebiete</h3>
                <ul className="space-y-3">
                  {[
                    "Krypto-Betrug Recovery",
                    "Blockchain-Recht",
                    "Finanzmarktrecht",
                    "Anlegerschutz",
                    "Verbraucherschutz",
                    "Zivilrecht",
                    "Handelsrecht",
                    "IT-Recht"
                  ].map((service) => (
                    <li key={service}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group">
                        <ChevronRight className="h-3 w-3 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-semibold text-white mb-6 text-lg">Kontakt</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-white font-medium">Hauptsitz Berlin</p>
                      <p className="text-gray-300">Unter den Linden 42</p>
                      <p className="text-gray-300">10117 Berlin</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-white font-medium">+49 30 123 456 789</p>
                      <p className="text-gray-400">Mo-Fr 8:00-18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-white font-medium">info@cryptolaw.de</p>
                      <p className="text-gray-400">24h Notfall-Hotline</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-white font-medium">Notfall-Service</p>
                      <p className="text-gray-400">24/7 verfügbar</p>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact Button */}
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Notfall-Kontakt
                </Button>
              </div>

              {/* Legal & Compliance */}
              <div>
                <h3 className="font-semibold text-white mb-6 text-lg">Rechtliches</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Impressum",
                    "Datenschutzerklärung",
                    "AGB",
                    "Widerrufsrecht",
                    "Cookie-Richtlinie",
                    "Haftungsausschluss"
                  ].map((legal) => (
                    <li key={legal}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                        {legal}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Trust Indicators */}
                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-4 w-4 text-green-400" />
                      <span className="text-sm font-medium text-white">Zertifiziert</span>
                    </div>
                    <p className="text-xs text-gray-400">RAK Berlin zugelassen</p>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-4 w-4 text-blue-400" />
                      <span className="text-sm font-medium text-white">Ausgezeichnet</span>
                    </div>
                    <p className="text-xs text-gray-400">Top Anwalt 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Bottom Bar */}
            <div className="border-t border-slate-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* Social Media Links */}
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400 mr-2">Folgen Sie uns:</span>
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Twitter, label: "Twitter", href: "#" },
                    { icon: Facebook, label: "Facebook", href: "#" },
                    { icon: Youtube, label: "YouTube", href: "#" }
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 group"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4 text-gray-400 group-hover:text-white" />
                    </a>
                  ))}
                </div>

                {/* Certifications & Awards */}
                <div className="flex items-center space-x-6 text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span>ISO 27001 zertifiziert</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-blue-400" />
                    <span>Rechtsanwaltskammer Berlin</span>
                  </div>
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-400 text-center md:text-right">
                  <p>&copy; 2024 CryptoLaw Rechtsanwaltskanzlei.</p>
                  <p>Alle Rechte vorbehalten.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;