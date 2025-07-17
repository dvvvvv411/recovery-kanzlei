import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Krypto Betrugsopfer bekommt 8,69 Bitcoin zurück",
      subtitle: "Ein österreichisches Betrugsopfer erhielt kürzlich 8,69 Bitcoin zurück – ein Wert von rund 800.000 EUR (Stand Juli 2025).",
      slug: "/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck",
      image: "/lovable-uploads/ab82bf83-5ca8-46b3-83b4-5cb6f9c16646.png",
      badges: ["CyberCrime", "Kryptowährung", "Betrugsbekämpfung"],
      date: "7. Juli 2025",
      readTime: "8 min Lesezeit",
      author: "ATB.LAW Team"
    },
    {
      id: 2,
      title: "CEO Fraud und Überweisungsbetrug",
      subtitle: "Wie Sie sich vor betrügerischen E-Mails schützen und was zu tun ist, wenn Sie bereits Opfer geworden sind.",
      slug: "/blog-post/ceo-fraud-und-ueberweisungsbetrug",
      image: "/lovable-uploads/77e79b13-9bec-4809-ba2f-258c1dc251ef.png",
      badges: ["CEO Fraud", "Cybersicherheit", "Betrugsschutz"],
      date: "7. Juli 2025", 
      readTime: "6 min Lesezeit",
      author: "ATB.LAW Team"
    },
    {
      id: 3,
      title: "Kreditbearbeitungsgebühren unzulässig: OGH-Urteil ermöglicht Rückforderung",
      subtitle: "In welchen Fällen Sie die bereits bezahlte Bearbeitungsgebühren zurückfordern können",
      slug: "/blog-post/ogh-kreditgebuehr-unzulaessig",
      image: "/lovable-uploads/80e2e160-2ba5-459b-b753-58265ea0882e.png",
      badges: ["Verbraucherrecht", "Bankrecht", "OGH-Urteil"],
      date: "7. Juli 2025",
      readTime: "6 min Lesezeit", 
      author: "ATB.LAW Team"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - same as landing page */}
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

      {/* Hero Section with Breadcrumb */}
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
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-white/80 hover:text-white">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbPage className="text-white">Blog</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Rechtsblog</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Aktuelles</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Fachwissen</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Rechtsblog</span> & Aktuelles
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Aktuelle Entwicklungen und Erfolgsgeschichten aus dem Bereich CyberCrime, Kryptowährungen und Verbraucherrecht
            </p>
          </div>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white/40 to-gray-50/80 dark:from-gray-900/80 dark:via-gray-950/40 dark:to-gray-900/80"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="group relative">
                  {/* Glassmorphism container */}
                  <div className="relative overflow-hidden rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.15)] hover:shadow-[0_16px_48px_rgba(31,38,135,0.25)] transition-all duration-500 hover:scale-[1.02] hover:bg-white/15 dark:hover:bg-black/15">
                    
                    {/* Image with overlay */}
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Floating badges */}
                      <div className="absolute top-4 left-4">
                        <div className="flex flex-wrap gap-1">
                          {post.badges.slice(0, 2).map((badge, index) => (
                            <Badge key={index} className="bg-white/20 text-white border-white/30 text-xs backdrop-blur-sm shadow-lg">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                        <Link to={post.slug} className="hover:no-underline">
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.subtitle}
                      </p>
                      
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      
                      {/* Modern button */}
                      <div className="pt-4">
                        <Link to={post.slug} className="block">
                          <button className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-medium shadow-[0_4px_16px_hsl(var(--primary)/0.3)] hover:shadow-[0_8px_24px_hsl(var(--primary)/0.4)] hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group/btn relative overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              Artikel lesen
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
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
          <div className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg">
                      <Scale className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xl font-bold">
                      Crypto<span className="text-blue-400">Law</span>
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Spezialisierte Rechtsberatung für Kryptowährungen, CyberCrime und digitale Vermögenswerte. Ihr Partner für komplexe Rechtsfragen im digitalen Zeitalter.
                  </p>
                  <div className="pt-4">
                    <h4 className="font-semibold mb-3 text-blue-300">Newsletter</h4>
                    <div className="flex gap-2">
                      <input 
                        type="email" 
                        placeholder="Ihre E-Mail" 
                        className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-0">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Legal Services */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-300 border-b border-slate-700 pb-2">
                    Rechtsgebiete
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Kryptowährungen & Blockchain",
                      "CyberCrime & Online-Betrug", 
                      "Digitale Vermögenswerte",
                      "Verbraucherrecht",
                      "Bankrecht",
                      "Internationale Rechtshilfe",
                      "Strafverteidigung",
                      "Zivilrecht"
                    ].map((service, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                          <ChevronRight className="h-3 w-3 text-blue-500" />
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-300 border-b border-slate-700 pb-2">
                    Kontakt
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-300">Wipplingerstraße 34/4</p>
                        <p className="text-gray-300">1010 Wien, Österreich</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <a href="tel:+4313912345" className="text-gray-300 hover:text-blue-400 transition-colors">
                        +43 1 39 123 45
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <a href="mailto:office@atb.law" className="text-gray-300 hover:text-blue-400 transition-colors">
                        office@atb.law
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold mb-3 text-blue-300">Kanzleiöffnungszeiten</h4>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>Mo - Fr: 09:00 - 18:00</p>
                      <p>Termine nach Vereinbarung</p>
                    </div>
                  </div>
                </div>

                {/* Trust & Certificates */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-300 border-b border-slate-700 pb-2">
                    Vertrauen & Sicherheit
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                      <Shield className="h-5 w-5 text-green-500" />
                      <div className="text-sm">
                        <p className="font-medium text-white">Rechtsanwaltskammer Wien</p>
                        <p className="text-gray-400">Zertifizierte Mitgliedschaft</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                      <Award className="h-5 w-5 text-blue-500" />
                      <div className="text-sm">
                        <p className="font-medium text-white">CyberCrime Expertise</p>
                        <p className="text-gray-400">Spezialisierte Zertifizierung</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      <div className="text-sm">
                        <p className="font-medium text-white">24/7 Notfall-Hotline</p>
                        <p className="text-gray-400">Bei dringenden Fällen</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-4">
                    <h4 className="font-semibold mb-3 text-blue-300">Folgen Sie uns</h4>
                    <div className="flex gap-3">
                      {[
                        { icon: Linkedin, href: "#", label: "LinkedIn" },
                        { icon: Twitter, href: "#", label: "Twitter" },
                        { icon: Facebook, href: "#", label: "Facebook" },
                        { icon: Youtube, href: "#", label: "YouTube" }
                      ].map(({ icon: Icon, href, label }, index) => (
                        <a
                          key={index}
                          href={href}
                          aria-label={label}
                          className="p-2 bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 py-6">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-400">
                  © 2025 ATB.LAW. Alle Rechte vorbehalten.
                </div>
                <div className="flex gap-6 text-sm">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Impressum</a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Datenschutz</a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">AGB</a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Widerrufsrecht</a>
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