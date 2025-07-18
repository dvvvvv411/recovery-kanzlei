import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const BlogPostCeoFraud2 = () => {
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
                <BreadcrumbPage className="text-white">Cybercrime</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">CyberCrime</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Internetkriminalität</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Digitale Forensik</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Cybercrime</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Ihr Anwalt für CyberCrime und Internetkriminalität
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>16. Juli 2025</span>
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
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Internetkriminalität – auch bekannt als CyberCrime – zählt zu den dynamischsten Bedrohungen unserer Zeit. Digitale Prozesse durchdringen heute nahezu jeden Lebensbereich – ob im Beruf oder im Privatleben. Diese Entwicklung nutzen Cyberkriminelle gezielt aus: Phishing-Attacken, Anlagebetrug mit Kryptowährungen, Ransomware-Angriffe auf Unternehmen oder Identitätsdiebstahl sind längst keine Einzelfälle mehr.
              </p>

              <p className="mb-8 text-foreground">
                Als auf CyberCrime spezialisierte Kanzlei unterstützen wir unsere Mandant:innen seit Jahren bei der rechtlichen Aufarbeitung von Angriffen im digitalen Raum. Unser Fokus liegt auf der forensischen Nachverfolgung von Kryptotransaktionen, der Sicherung von Beweismitteln sowie der effektiven Vertretung in Strafverfahren, Ermittlungsverfahren und zivilrechtlichen Klagen.
              </p>

              <p className="mb-8 text-foreground">
                Wir verfügen über fundierte Expertise als zertifizierte Datenschutz- und Geldwäschebeauftragte und arbeiten eng mit technischen CyberSecurity-Spezialisten zusammen. Dadurch garantieren wir eine gesamtheitliche und technisch fundierte Betreuung – von der Analyse des Angriffs bis zur rechtlichen Durchsetzung Ihrer Ansprüche.
              </p>

              <p className="mb-8 text-foreground">
                Als Ihr Anwalt für CyberCrime vertreten wir Sie auch vor der Datenschutzbehörde sowie gegenüber Plattformbetreibern, Finanzdienstleistern oder Kryptowährungsbörsen. Unsere langjährige Erfahrung im Bereich Internetkriminalität macht uns zu einem verlässlichen Partner – auch in komplexen und grenzüberschreitenden Fällen.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Vertrauen Sie auf erfahrene Spezialisten für CyberCrime</h2>
              <p className="mb-8 text-foreground">
                Unsere Kanzlei vereint juristische Präzision mit technischem Know-how. Wenn Sie Opfer eines Cyberangriffs wurden oder präventiv rechtliche Beratung suchen: Wir sind für Sie da – schnell, diskret und professionell.
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
                Expertise in allen Bereichen der Internetkriminalität
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="prevention" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Prävention – Cyber Resilienz
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Die NIS2 Richtlinie wurde noch nicht einmal in nationales Recht (NISG 2024) gegossen, schon steht mit dem Cyber Resilience Act (Verordnung über horizontale Cybersicherheitsanforderungen für Produkte mit digitalen Elementen) der nächste EU-Rechtsakt zur Sicherstellung von Cybersicherheitsanforderungen in den Startlöchern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ransomware" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Ransomware – Incident Response
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Ihr Unternehmen wurde gehackt, Daten sind verschlüsselt und die Angreifer verlangen Lösegeld? Es steht viel auf dem Spiel! Gemeinsam mit unseren auf Cyber-Attacken spezialisierten IT-Security und Forensik Partnern unterstützen wir Sie diskret bei der schnellstmöglichen Bewältigung dieser Herausforderung.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="fraud" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Anlagebetrug – Datenmissbrauch
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Vom vermeintlich lukrativen Investment mit Online Trading, bis hin zur missbräuchlichen Verwendung Ihrer Daten (Identitätsdiebstahl und Geldwäsche). Schnelles und koordiniertes Handeln ist Voraussetzung, um eine Chance zu haben, das "investierte" Vermögen zurück zu erhalten und weiteren Schaden zu verhindern. Wir kennen die Methoden der Verbrecher und wissen was zu tun ist.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cyberbullying" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Hass im Netz
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Das Internet ist kein rechtsfreier Raum. Hasspostings, Beleidigungen über soziale Medien oder Cybermobbing sind nicht erst seit dem am 1. Jänner 2021 in Kraft getretenen "Hass im Netz" Gesetzespaket rechtswidrig. Wir unterstützen Sie bei der strafrechtlichen Verfolgung der Täter und setzen Ihre zivil- und medienrechtlichen Ansprüche durch.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tracing" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left font-semibold">
                    Asset-/Krypto Tracing
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Die Analyse und Nachverfolgung von Kryptotransaktionen ("Follow the Money") ist nicht nur bei der Aufklärung von Straftaten essentiell. Auch in zivilrechtlichen Verfahren, Erbstreitigkeiten und Insolvenzen steigt der Bedarf an Experten auf diesem Gebiet. Als erfahrene Rechtsanwält:innen und zertifizierte Blockchain-Forensiker bieten wir unseren Mandant:innen Expertise aus einer Hand.
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
                Lernen Sie unser spezialisiertes Cybercrime-Team kennen
              </p>
            </div>

            {/* Team Carousel - Only cybercrime relevant team members */}
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
                {/* Bernhard Bovensiepen - Cybercrime Expert */}
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
                      Cybercrime, Datenschutz/Compliance, Wertpapier- und Kapitalmarktrecht, Kryptonachverfolgung und Mittelherkunftsnachweis
                    </p>
                  </div>
                </CarouselItem>

                {/* Martin Willig - Blockchain Analyst */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="/lovable-uploads/fb9c5d6b-b0d1-44b0-9835-4301827237bb.png"
                        alt="Martin Willig"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Martin Willig</h3>
                    <p className="text-gray-600">Blockchain- /Datenanalyst</p>
                  </div>
                </CarouselItem>

                {/* Steffen Rheinböcker - Cybercrime Expert */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="/lovable-uploads/709d1496-f015-4b38-b331-9cb17b1b6eaa.png"
                        alt="Steffen Rheinböcker"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Steffen Rheinböcker</h3>
                    <p className="text-gray-600 mb-2">Rechtsanwalt</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Immobilienrecht, Prozessführung und Streitbeilegung, Cybercrime
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              {/* Navigation Buttons - Glasmorphic design matching NewsCarousel */}
              <CarouselPrevious className="absolute -left-20 top-1/2 -translate-y-1/2 h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-blue-600 hover:text-blue-700 transition-all duration-300" />
              <CarouselNext className="absolute -right-20 top-1/2 -translate-y-1/2 h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-blue-600 hover:text-blue-700 transition-all duration-300" />
            </Carousel>
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
                      <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                        <ChevronRight className="h-3 w-3 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-white mb-6 text-lg">Kontakt</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Mariahilfer Straße 123<br />
                        1060 Wien, Österreich
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <a href="tel:+4313912345" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                      +43 1 391 23 45
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <a href="mailto:office@cryptolaw.at" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                      office@cryptolaw.at
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-white mb-3 text-sm">Öffnungszeiten</h4>
                  <div className="text-xs text-gray-400 space-y-1">
                    <div className="flex justify-between">
                      <span>Mo - Fr:</span>
                      <span>08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sa:</span>
                      <span>09:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>So:</span>
                      <span>Geschlossen</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources & Social */}
              <div>
                <h3 className="font-semibold text-white mb-6 text-lg">Ressourcen</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "FAQ",
                    "Rechtsblog",
                    "Fallstudien",
                    "Downloads",
                    "Termine",
                    "Impressum",
                    "Datenschutz"
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group text-sm">
                        <ChevronRight className="h-3 w-3 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Social Media */}
                <div>
                  <h4 className="font-semibold text-white mb-4 text-sm">Folgen Sie uns</h4>
                  <div className="flex space-x-3">
                    {[
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Twitter, href: "#", label: "Twitter" },
                      { icon: Facebook, href: "#", label: "Facebook" },
                      { icon: Youtube, href: "#", label: "YouTube" }
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        className="p-2 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-200 group"
                        aria-label={label}
                      >
                        <Icon className="h-4 w-4 text-gray-400 group-hover:text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Awards & Certifications */}
            <div className="border-t border-slate-700 pt-8 mb-8">
              <h3 className="font-semibold text-white mb-6 text-center">Auszeichnungen & Zertifizierungen</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-yellow-400" />
                  <span className="text-sm text-gray-400">Beste Krypto-Anwaltskanzlei 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-400" />
                  <span className="text-sm text-gray-400">ISO 27001 Zertifiziert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Scale className="h-6 w-6 text-green-400" />
                  <span className="text-sm text-gray-400">Rechtsanwaltskammer Wien</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2024 CryptoLaw Rechtsanwaltskanzlei. Alle Rechte vorbehalten.
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Datenschutz
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Impressum
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  AGB
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Cookie-Einstellungen
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostCeoFraud2;