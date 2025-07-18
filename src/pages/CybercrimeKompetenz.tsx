
import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const CybercrimeKompetenz = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - same as blog pages */}
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

      {/* Hero Section with Breadcrumb - exact same as blog posts */}
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
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Rechtsberatung</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Cybercrime</span> & Internetkriminalität
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Ihr spezialisierter Anwalt für CyberCrime, Internetkriminalität und digitale Straftaten
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Aktualisiert: Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min Lesezeit</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>ATB.LAW Experten</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Article Content - same transparent background as blog posts */}
      <Section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Internetkriminalität – auch bekannt als CyberCrime – zählt zu den dynamischsten Bedrohungen unserer Zeit. Digitale Prozesse durchdringen heute nahezu jeden Lebensbereich – ob im Beruf oder im Privatleben. Diese Entwicklung nutzen Cyberkriminelle gezielt aus: Phishing-Attacken, Anlagebetrug mit Kryptowährungen, Ransomware-Angriffe auf Unternehmen oder Identitätsdiebstahl sind längst keine Einzelfälle mehr.
              </p>

              <p className="mb-6 text-foreground">
                Als auf CyberCrime spezialisierte Kanzlei unterstützen wir unsere Mandant:innen seit Jahren bei der rechtlichen Aufarbeitung von Angriffen im digitalen Raum. Unser Fokus liegt auf der forensischen Nachverfolgung von Kryptotransaktionen, der Sicherung von Beweismitteln sowie der effektiven Vertretung in Strafverfahren, Ermittlungsverfahren und zivilrechtlichen Klagen.
              </p>

              <p className="mb-6 text-foreground">
                Wir verfügen über fundierte Expertise als zertifizierte Datenschutz- und Geldwäschebeauftragte und arbeiten eng mit technischen CyberSecurity-Spezialisten zusammen. Dadurch garantieren wir eine gesamtheitliche und technisch fundierte Betreuung – von der Analyse des Angriffs bis zur rechtlichen Durchsetzung Ihrer Ansprüche.
              </p>

              <p className="mb-8 text-foreground">
                Als Ihr Anwalt für CyberCrime vertreten wir Sie auch vor der Datenschutzbehörde sowie gegenüber Plattformbetreibern, Finanzdienstleistern oder Kryptowährungsbörsen. Unsere langjährige Erfahrung im Bereich Internetkriminalität macht uns zu einem verlässlichen Partner – auch in komplexen und grenzüberschreitenden Fällen.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">Vertrauen Sie auf erfahrene Spezialisten für CyberCrime</h3>
                <p className="text-foreground">
                  Unsere Kanzlei vereint juristische Präzision mit technischem Know-how. Wenn Sie Opfer eines Cyberangriffs wurden oder präventiv rechtliche Beratung suchen: Wir sind für Sie da – schnell, diskret und professionell.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Unsere Schwerpunkte im CyberCrime-Recht</h2>
              
              <Accordion type="single" collapsible className="w-full space-y-4 my-8">
                <AccordionItem value="praevention" className="bg-accent/30 rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-lg font-semibold">Prävention – Cyber Resilienz</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Die NIS2 Richtlinie wurde noch nicht einmal in nationales Recht (NISG 2024) gegossen, schon steht mit dem Cyber Resilience Act (Verordnung über horizontale Cybersicherheitsanforderungen für Produkte mit digitalen Elementen) der nächste EU-Rechtsakt zur Sicherstellung von Cybersicherheitsanforderungen in den Startlöchern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ransomware" className="bg-accent/30 rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-lg font-semibold">Ransomware – Incident Response</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Ihr Unternehmen wurde gehackt, Daten sind verschlüsselt und die Angreifer verlangen Lösegeld? Es steht viel auf dem Spiel! Gemeinsam mit unseren auf Cyber-Attacken spezialisierten IT-Security und Forensik Partnern unterstützen wir Sie diskret bei der schnellstmöglichen Bewältigung dieser Herausforderung.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="anlagebetrug" className="bg-accent/30 rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-lg font-semibold">Anlagebetrug – Datenmissbrauch</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Vom vermeintlich lukrativen Investment mit Online Trading, bis hin zur missbräuchlichen Verwendung Ihrer Daten (Identitätsdiebstahl und Geldwäsche). Schnelles und koordiniertes Handeln ist Voraussetzung, um eine Chance zu haben, das "investierte" Vermögen zurück zu erhalten und weiteren Schaden zu verhindern. Wir kennen die Methoden der Verbrecher und wissen was zu tun ist.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hass-im-netz" className="bg-accent/30 rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-lg font-semibold">Hass im Netz</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Das Internet ist kein rechtsfreier Raum. Hasspostings, Beleidigungen über soziale Medien oder Cybermobbing sind nicht erst seit dem am 1. Jänner 2021 in Kraft getretenen "Hass im Netz" Gesetzespaket rechtswidrig. Wir unterstützen Sie bei der strafrechtlichen Verfolgung der Täter und setzen Ihre zivil- und medienrechtlichen Ansprüche durch.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="asset-tracing" className="bg-accent/30 rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-lg font-semibold">Asset-/Krypto Tracing</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Die Analyse und Nachverfolgung von Kryptotransaktionen ("Follow the Money") ist nicht nur bei der Aufklärung von Straftaten essentiell. Auch in zivilrechtlichen Verfahren, Erbstreitigkeiten und Insolvenzen steigt der Bedarf an Experten auf diesem Gebiet. Als erfahrene Rechtsanwält:innen und zertifizierte Blockchain-Forensiker bieten wir unseren Mandant:innen Expertise aus einer Hand.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Unsere Expert:innen für CyberCrime</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {/* Bernhard Bovensiepen */}
                <div className="text-center">
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

                {/* Martin Willig */}
                <div className="text-center">
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

                {/* Michael Dorn */}
                <div className="text-center">
                  <div className="mb-6">
                    <img
                      src="/lovable-uploads/49592374-fd61-4f95-b984-a0cbeeaad8f5.png"
                      alt="Michael Dorn"
                      className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Dorn</h3>
                  <p className="text-gray-600">Rechtsanwalt</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Was tun bei Cybercrime? - Erste Schritte</h2>
              
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Wenn Sie Opfer eines Cyberangriffs geworden sind:</h3>
                <ol className="space-y-3">
                  <li><strong>1.</strong> Dokumentieren Sie alle Vorfälle und sichern Sie Beweismittel.</li>
                  <li><strong>2.</strong> Kontaktieren Sie umgehend einen erfahrenen CyberCrime-Anwalt.</li>
                  <li><strong>3.</strong> Erstatten Sie Anzeige bei der Polizei oder Staatsanwaltschaft.</li>
                  <li><strong>4.</strong> Lassen Sie forensische Analysen durch Experten durchführen.</li>
                  <li><strong>5.</strong> Prüfen Sie zivilrechtliche Ansprüche gegen die Täter.</li>
                </ol>
              </div>

              <div className="mt-12 p-8 bg-card border rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ihre Experten für CyberCrime & Internetkriminalität</h3>
                <p className="mb-4">
                  Als CyberCrime Anwälte mit Spezialisierung auf die Nachverfolgung von Kryptowährungen und Internetkriminalität unterstützen wir Sie umfassend – juristisch fundiert, schnell und effizient.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Für weitere Informationen und individuelle Beratung stehen Ihnen unsere Experten jederzeit zur Verfügung.
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a href="mailto:office@atb.law" className="text-primary hover:underline font-medium">
                    office@atb.law
                  </a>
                  <a href="tel:+4313912345" className="text-primary hover:underline font-medium">
                    +43 1 39 123 45
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Professional Footer - same as blog posts */}
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

export default CybercrimeKompetenz;
