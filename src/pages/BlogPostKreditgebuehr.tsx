import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const BlogPostKreditgebuehr = () => {
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
            <a href="/" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
            </a>
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
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog" className="text-white/80 hover:text-white">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbPage className="text-white">Kreditbearbeitungsgebühren unzulässig</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Verbraucherrecht</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Bankrecht</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">OGH-Urteil</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              Kreditbearbeitungsgebühren <span className="bg-gradient-primary bg-clip-text text-transparent">unzulässig</span>: OGH-Urteil ermöglicht Rückforderung
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              In welchen Fällen Sie die bereits bezahlte Bearbeitungsgebühren zurückfordern können
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>7. Juli 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min Lesezeit</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>ATB.LAW Team</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Article Content - transparent background */}
      <Section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8 italic border-l-4 border-primary pl-6">
                In einem richtungsweisenden Urteil hat der Oberste Gerichtshof (OGH) entschieden, dass bestimmte Kreditbearbeitungsgebühren unzulässig sind. Damit wurde ein deutliches Signal für den Verbraucherschutz gesetzt – und für viele Kreditnehmer:innen die Tür zur Rückforderung bereits bezahlter Gebühren geöffnet.
              </p>

              {/* Image in article */}
              <div className="my-12">
                <img 
                  src="/lovable-uploads/80e2e160-2ba5-459b-b753-58265ea0882e.png"
                  alt="Bearbeitungsgebühr zurückholen"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  Bearbeitungsgebühr zurückholen
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Der Anlassfall: Intransparente Klauseln im Kreditvertrag</h2>
              <p className="mb-6 text-foreground">
                Im Mittelpunkt des OGH-Urteils stand eine Klausel der WSK Bank, in der neben einer Bearbeitungsgebühr von 4 % auch zusätzliche Entgelte wie Erhebungsspesen, Überweisungsspesen sowie Druck- und Portokosten vorgesehen waren. Diese Beträge wurden dem Kreditkonto angelastet oder vom Auszahlungsbetrag abgezogen.
              </p>
              <p className="mb-6 text-foreground">
                Der OGH stellte klar: Eine derart gebündelte Gebührengestaltung sei intransparent. Die Bank verrechne für Leistungen, die im Rahmen der Kreditvergabe ohnehin zu ihren Aufgaben gehören – und das mehrfach. Aus Sicht des Gerichts benachteiligt eine solche Regelung Kreditnehmer:innen unangemessen.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Was bedeutet das für Konsument:innen?</h2>
              <p className="mb-6 text-foreground">
                Viele Kreditverträge enthalten vergleichbare Formulierungen oder Klauseln. Besonders betroffen sind Verträge, in denen pauschale Bearbeitungsgebühren verlangt wurden, etwa in Form eines Prozentsatzes der Kreditsumme oder eines pauschalen Entgelts für Kreditbearbeitung und Vertragsabschluss.
              </p>
              <p className="mb-6 text-foreground">
                Für Konsument:innen eröffnet sich nun die Möglichkeit, diese Entgelte prüfen zu lassen. Bei unzulässigen Klauseln können bereits bezahlte Beträge zurückgefordert werden – selbst bei bereits getilgten Krediten. Denn die in der Regel mehrere Tausend Euro betragenden – Ansprüche verjähren erst 30 Jahre ab Zahlung und sind mit jährlich vier Prozent zu verzinsen.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Worauf sollten Kreditnehmer:innen achten?</h2>
              <p className="mb-4 text-foreground">Prüfen Sie Ihren Kreditvertrag insbesondere auf folgende Begriffe:</p>
              
              <div className="bg-accent/30 p-6 rounded-lg my-8">
                <ul className="space-y-2">
                  <li>• „Bearbeitungsgebühr" oder „Bearbeitungsentgelt"</li>
                  <li>• „Vertragsabschlussgebühr" oder „Kreditspesen"</li>
                  <li>• Einmalige Spesen für Erhebung, Auszahlung oder Verwaltung</li>
                  <li>• Drucksorten- und Portokosten</li>
                  <li>• Schätzgebühr</li>
                  <li>• Gebühr für Grundbuchgesuch und Grundbuchauszug</li>
                </ul>
              </div>

              <p className="mb-6 text-foreground">
                Solche Klauseln können rechtswidrig sein, wenn sie nicht klar nachvollziehbar sind oder doppelt für dieselbe Leistung verrechnet wird.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Fazit: Prüfung lohnt sich</h2>
              <p className="mb-6 text-foreground">
                Das OGH-Urteil schafft Klarheit und stärkt die Rechte von Kreditnehmer:innen. Wer in den letzten Jahren einen Kreditvertrag abgeschlossen hat, sollte diesen nun sorgfältig prüfen (lassen). Wir übernehmen die Prüfung kostenlos und unverbindlich für Sie.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Sie haben Fragen zu Ihrem Kreditvertrag?</h3>
                <p className="mb-4">
                  Lassen Sie Ihre Kreditbearbeitungsgebühren kostenfrei prüfen. Unsere Experten analysieren Ihren Vertrag und prüfen Rückforderungsansprüche.
                </p>
              </div>

              <div className="mt-12 p-8 bg-card border rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ihre Experten für Verbraucherrecht & Bankrecht</h3>
                <p className="mb-4">
                  Als spezialisierte Rechtsanwälte für Verbraucher- und Bankrecht unterstützen wir Sie bei der Durchsetzung Ihrer Ansprüche – kompetent, effizient und erfolgsorientiert.
                </p>
                <p className="text-sm text-muted-foreground">
                  Für weitere Informationen und eine Ersteinschätzung stehen Anela Blöch und Roman Taudes jederzeit unter office@atb.law bzw. telefonisch unter 01 39 12345 zur Verfügung.
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a href="mailto:office@atb.law" className="text-primary hover:underline font-medium">
                    office@atb.law
                  </a>
                  <a href="tel:+43139123456" className="text-primary hover:underline font-medium">
                    +43 1 39 123 45
                  </a>
                </div>
              </div>
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

export default BlogPostKreditgebuehr;