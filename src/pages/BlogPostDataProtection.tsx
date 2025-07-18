import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const BlogPostDataProtection = () => {
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
                  <BreadcrumbLink href="/kompetenzen" className="text-white/80 hover:text-white">Kompetenzen</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbPage className="text-white">Datenschutz und Compliance</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Datenschutz und Compliance</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Ihr Anwalt für Datenschutz und Compliance
            </p>
          </div>
        </div>
      </Section>

      {/* Article Content - transparent background */}
      <Section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Datenschutz und Compliance sind in der heutigen digitalen Geschäftswelt von entscheidender Bedeutung. Mit der Einführung der DSGVO und anderen regulatorischen Anforderungen stehen Unternehmen vor komplexen rechtlichen Herausforderungen, die sowohl strategisches Verständnis als auch praktische Umsetzung erfordern.
              </p>

              <p className="mb-8 text-foreground">
                Als spezialisierte Kanzlei für Datenschutz und Compliance unterstützen wir Unternehmen jeder Größe dabei, ihre rechtlichen Verpflichtungen zu erfüllen und dabei gleichzeitig wirtschaftlich erfolgreich zu bleiben. Unsere Expertise umfasst die gesamte Bandbreite des Datenschutzrechts, von der strategischen Beratung bis zur praktischen Implementierung.
              </p>

              <p className="mb-8 text-foreground">
                Wir verfügen über fundierte Expertise als zertifizierte Datenschutz- und Compliance-Experten und arbeiten eng mit technischen Spezialisten zusammen. Dadurch garantieren wir eine ganzheitliche und praxisorientierte Betreuung – von der Risikoanalyse bis zur vollständigen Compliance-Implementierung.
              </p>

              <p className="mb-8 text-foreground">
                Als Ihr Anwalt für Datenschutz und Compliance vertreten wir Sie auch vor Datenschutzbehörden sowie in Verhandlungen mit Geschäftspartnern und Aufsichtsbehörden. Unsere langjährige Erfahrung im Bereich Datenschutz und Compliance macht uns zu einem verlässlichen Partner – auch in komplexen und regulatorisch anspruchsvollen Situationen.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Vertrauen Sie auf erfahrene Datenschutz-Spezialisten</h2>
              <p className="mb-8 text-foreground">
                Unsere Kanzlei vereint juristische Präzision mit praktischer Umsetzungserfahrung. Wenn Sie Unterstützung bei Datenschutz-Compliance benötigen oder präventive rechtliche Beratung suchen: Wir sind für Sie da – schnell, diskret und professionell.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Unsere Schwerpunkte Section - FAQ Style */}
      <Section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Unsere Schwerpunkte
              </h2>
              <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">
                Expertise in allen Bereichen des Datenschutzes und der Compliance
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="dsgvo" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    DSGVO-Compliance
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Umfassende Beratung zur Einhaltung der Datenschutz-Grundverordnung. Von der Datenschutz-Folgenabschätzung bis zur Implementierung technischer und organisatorischer Maßnahmen unterstützen wir Sie bei der vollständigen DSGVO-Compliance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="privacy" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Privacy by Design
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Datenschutz von Anfang an mitdenken. Wir beraten Sie bei der datenschutzkonformen Gestaltung von Produkten, Services und Geschäftsprozessen, damit Compliance bereits in der Entwicklungsphase verankert wird.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="incidents" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Datenpannen-Management
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Schnelle und professionelle Abwicklung von Datenschutzverletzungen. Von der ersten Bewertung bis zur Meldung an die Aufsichtsbehörde und Information der Betroffenen begleiten wir Sie durch den gesamten Prozess.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="training" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Mitarbeiterschulungen
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Praxisorientierte Schulungen für Ihre Mitarbeiter zu allen relevanten Datenschutz-Themen. Vom Grundlagenwissen bis zu spezialisierten Workshops für verschiedene Abteilungen sorgen wir für das nötige Know-how in Ihrem Unternehmen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="audits" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Compliance-Audits
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Systematische Überprüfung Ihrer Datenschutz-Compliance. Unsere umfassenden Audits identifizieren Verbesserungspotentiale und stellen sicher, dass Ihr Unternehmen allen rechtlichen Anforderungen entspricht.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </Section>

      {/* Unsere Expert:innen Section */}
      <Section className="py-16 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Unsere Expert:innen
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Lernen Sie unser spezialisiertes Datenschutz-Team kennen
              </p>
            </div>

            {/* Team Carousel - Only datenschutz relevant team members */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                })
              ]}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* Bernhard Bovensiepen - Datenschutz Expert */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="/lovable-uploads/2cad25d9-8d15-482b-bc38-5b1378991be6.png"
                        alt="Bernhard Bovensiepen"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bernhard Bovensiepen</h3>
                    <p className="text-gray-600 mb-2">Rechtsanwalt</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Datenschutz/Compliance, Cybercrime, Wertpapier- und Kapitalmarktrecht, Kryptonachverfolgung und Mittelherkunftsnachweis
                    </p>
                  </div>
                </CarouselItem>

                {/* Martin Willig - Compliance Specialist */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="/lovable-uploads/5ea7e3c1-6d4f-4274-80b0-e82b8b3cb534.png"
                        alt="Martin Willig"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Martin Willig</h3>
                    <p className="text-gray-600 mb-2">Compliance Officer</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      DSGVO-Compliance, Blockchain-Analyse, Datenschutz-Audits, Mittelherkunftsnachweis
                    </p>
                  </div>
                </CarouselItem>

                {/* Anna Müller - Privacy Expert */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="/lovable-uploads/7cf1155a-1e93-404a-bb7f-b70fbba16ab9.png"
                        alt="Anna Müller"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Anna Müller</h3>
                    <p className="text-gray-600 mb-2">Datenschutzbeauftragte</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Privacy by Design, Datenschutz-Folgenabschätzung, Mitarbeiterschulungen, Compliance-Management
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </Section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="p-2 bg-gradient-primary rounded-lg shadow-[0_0_20px_hsl(214_100%_60%_/_0.4)]">
                    <Scale className="h-6 w-6 text-white drop-shadow-lg" />
                  </div>
                  <span className="text-xl font-bold text-white" style={{ textShadow: 'var(--text-glow)' }}>
                    Crypto<span className="bg-gradient-primary bg-clip-text text-transparent">Law</span>
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Ihre spezialisierten Anwälte für Kryptowährungen, Blockchain-Technologie und digitale Assets in Österreich.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-gray-300">Wiener Straße 10, 4020 Linz</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-gray-300">+43 732 123456</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-gray-300">office@cryptolaw.at</span>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Bleiben Sie über aktuelle Entwicklungen im Krypto-Recht informiert.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button className="w-full bg-gradient-primary hover:bg-primary/90 transition-all duration-300">
                    Anmelden
                  </Button>
                </div>
              </div>

              {/* Legal Services */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold mb-4">Rechtsgebiete</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Kryptowährungsrecht</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Blockchain-Compliance</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">ICO/STO Beratung</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Steuerrecht</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Regulierung</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Smart Contracts</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold mb-4">Ressourcen</h3>
                <ul className="space-y-2 mb-6">
                  <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Rechtsprechung</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Downloads</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">FAQ</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Kontakt</a></li>
                </ul>
                
                {/* Social Media */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Folgen Sie uns</h4>
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors">
                      <Youtube className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="border-t border-white/10 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-4">Auszeichnungen & Zertifizierungen</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-sm">Rechtsanwaltskammer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-sm">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <span className="text-sm">Compliance Zertifiziert</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2024 CryptoLaw. Alle Rechte vorbehalten.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Impressum</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Datenschutz</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">AGB</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Haftungsausschluss</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostDataProtection;