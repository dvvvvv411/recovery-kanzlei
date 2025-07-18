import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const CybercrimeKompetenz = () => {
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
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Rechtsberatung</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Cybercrime</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Ihr Anwalt für CyberCrime und Internetkriminalität
            </p>
          </div>
        </div>
      </Section>

      {/* Article Content - transparent background */}
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
            </div>
          </div>
        </div>
      </Section>

      {/* Unsere Schwerpunkte Section - Blue Background */}
      <Section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
                Unsere Schwerpunkte
              </h2>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="praevention" className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/90 hover:no-underline">
                    <span className="text-lg font-semibold">Prävention – Cyber Resilienz</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Die NIS2 Richtlinie wurde noch nicht einmal in nationales Recht (NISG 2024) gegossen, schon steht mit dem Cyber Resilience Act (Verordnung über horizontale Cybersicherheitsanforderungen für Produkte mit digitalen Elementen) der nächste EU-Rechtsakt zur Sicherstellung von Cybersicherheitsanforderungen in den Startlöchern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ransomware" className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/90 hover:no-underline">
                    <span className="text-lg font-semibold">Ransomware – Incident Response</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Ihr Unternehmen wurde gehackt, Daten sind verschlüsselt und die Angreifer verlangen Lösegeld? Es steht viel auf dem Spiel! Gemeinsam mit unseren auf Cyber-Attacken spezialisierten IT-Security und Forensik Partnern unterstützen wir Sie diskret bei der schnellstmöglichen Bewältigung dieser Herausforderung.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="anlagebetrug" className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/90 hover:no-underline">
                    <span className="text-lg font-semibold">Anlagebetrug – Datenmissbrauch</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Vom vermeintlich lukrativen Investment mit Online Trading, bis hin zur missbräuchlichen Verwendung Ihrer Daten (Identitätsdiebstahl und Geldwäsche). Schnelles und koordiniertes Handeln ist Voraussetzung, um eine Chance zu haben, das "investierte" Vermögen zurück zu erhalten und weiteren Schaden zu verhindern. Wir kennen die Methoden der Verbrecher und wissen was zu tun ist.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hass-im-netz" className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/90 hover:no-underline">
                    <span className="text-lg font-semibold">Hass im Netz</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/90">
                    Das Internet ist kein rechtsfreier Raum. Hasspostings, Beleidigungen über soziale Medien oder Cybermobbing sind nicht erst seit dem am 1. Jänner 2021 in Kraft getretenen "Hass im Netz" Gesetzespaket rechtswidrig. Wir unterstützen Sie bei der strafrechtlichen Verfolgung der Täter und setzen Ihre zivil- und medienrechtlichen Ansprüche durch.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="asset-tracing" className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-white/90 hover:no-underline">
                    <span className="text-lg font-semibold">Asset-/Krypto Tracing</span>
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

      {/* Team Section */}
      <Section className="py-16 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                Unsere Expert:innen
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

              <div className="mt-12 p-8 bg-card border rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ihre Experten für CyberCrime & Internetkriminalität</h3>
                <p className="mb-4">
                  Als CyberCrime Anwälte mit Spezialisierung auf die Nachverfolgung von Kryptowährungen und Internetkriminalität unterstützen wir Sie umfassend – juristisch fundiert, schnell und effizient.
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

      {/* Enhanced Professional Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-400/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
        
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Company Info & Newsletter */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg">
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold">
                    Crypto<span className="text-blue-400">Law</span>
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Ihre Experten für Kryptowährung, CyberCrime und digitale Vermögenswerte. Spezialisiert auf die Nachverfolgung und Rückholung von Kryptowährungen.
                </p>

                {/* Newsletter */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50">
                  <h4 className="font-semibold mb-3 text-white">Newsletter abonnieren</h4>
                  <p className="text-sm text-gray-400 mb-4">Bleiben Sie über aktuelle Entwicklungen im Krypto-Recht informiert.</p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Ihre E-Mail" 
                      className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Legal Services */}
              <div className="lg:col-span-3">
                <h4 className="font-semibold mb-4 text-white">Rechtsgebiete</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />Kryptowährung Nachverfolgung</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />CyberCrime & Internetbetrug</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />Blockchain-Forensik</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />Anlagebetrug</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />Datenschutz & Compliance</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />Geldwäscheprävention</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="lg:col-span-3">
                <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                    <div>
                      <div>Mustergasse 123</div>
                      <div>1010 Wien, Österreich</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <a href="tel:+4313912345" className="hover:text-blue-400 transition-colors">+43 1 39 123 45</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a href="mailto:office@atb.law" className="hover:text-blue-400 transition-colors">office@atb.law</a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Shield className="w-4 h-4 text-green-400" />
                    SSL-verschlüsselte Kommunikation
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Award className="w-4 h-4 text-yellow-400" />
                    Zertifizierte Blockchain-Forensiker
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    24/7 Notfall-Hotline
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-2">
                <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Über uns</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Erfolgsgeschichten</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Termin buchen</a></li>
                </ul>

                {/* Social Media */}
                <div className="mt-6">
                  <h5 className="font-medium text-white mb-3 text-sm">Folgen Sie uns</h5>
                  <div className="flex gap-2">
                    <a href="#" className="p-2 bg-slate-700/50 rounded hover:bg-blue-600/20 transition-colors">
                      <Linkedin className="w-4 h-4 text-gray-300 hover:text-blue-400" />
                    </a>
                    <a href="#" className="p-2 bg-slate-700/50 rounded hover:bg-blue-600/20 transition-colors">
                      <Twitter className="w-4 h-4 text-gray-300 hover:text-blue-400" />
                    </a>
                    <a href="#" className="p-2 bg-slate-700/50 rounded hover:bg-blue-600/20 transition-colors">
                      <Facebook className="w-4 h-4 text-gray-300 hover:text-blue-400" />
                    </a>
                    <a href="#" className="p-2 bg-slate-700/50 rounded hover:bg-blue-600/20 transition-colors">
                      <Youtube className="w-4 h-4 text-gray-300 hover:text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <div>
                  © 2025 ATB.LAW. Alle Rechte vorbehalten.
                </div>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-blue-400 transition-colors">Datenschutz</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">Impressum</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">AGB</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">Cookie-Einstellungen</a>
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