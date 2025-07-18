import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const Cybercrime = () => {
  // Team members relevant to Cybercrime based on the landing page team section
  const cybercrimeExperts = [
    {
      name: "Bernhard Bovensiepen",
      role: "Rechtsanwalt",
      image: "/lovable-uploads/5ea7e3c1-6d4f-4274-80b0-e82b8b3cb534.png",
      expertise: "Cybercrime, Datenschutz/Compliance, Wertpapier- und Kapitalmarktrecht, Kryptonachverfolgung und Mittelherkunftsnachweis"
    },
    {
      name: "Steffen Rheinböcker", 
      role: "Rechtsanwalt",
      image: "/lovable-uploads/709d1496-f015-4b38-b331-9cb17b1b6eaa.png",
      expertise: "Immobilienrecht, Prozessführung und Streitbeilegung, Cybercrime"
    },
    {
      name: "Martin Willig",
      role: "Blockchain- /Datenanalyst", 
      image: "/lovable-uploads/fb9c5d6b-b0d1-44b0-9835-4301827237bb.png",
      expertise: "Blockchain-Forensik und Datenanalyse"
    }
  ];

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
                  <BreadcrumbPage className="text-white">Kompetenzen</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbPage className="text-white">Cybercrime</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Cybercrime</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Internetkriminalität</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Digital Forensik</Badge>
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

      {/* Main Content Section */}
      <Section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-gray max-w-none">
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Internetkriminalität – auch bekannt als CyberCrime – zählt zu den dynamischsten Bedrohungen unserer Zeit. Digitale Prozesse durchdringen heute nahezu jeden Lebensbereich – ob im Beruf oder im Privatleben. Diese Entwicklung nutzen Cyberkriminelle gezielt aus: Phishing-Attacken, Anlagebetrug mit Kryptowährungen, Ransomware-Angriffe auf Unternehmen oder Identitätsdiebstahl sind längst keine Einzelfälle mehr.
                </p>
                
                <p>
                  Als auf CyberCrime spezialisierte Kanzlei unterstützen wir unsere Mandant:innen seit Jahren bei der rechtlichen Aufarbeitung von Angriffen im digitalen Raum. Unser Fokus liegt auf der forensischen Nachverfolgung von Kryptotransaktionen, der Sicherung von Beweismitteln sowie der effektiven Vertretung in Strafverfahren, Ermittlungsverfahren und zivilrechtlichen Klagen.
                </p>
                
                <p>
                  Wir verfügen über fundierte Expertise als zertifizierte Datenschutz- und Geldwäschebeauftragte und arbeiten eng mit technischen CyberSecurity-Spezialisten zusammen. Dadurch garantieren wir eine gesamtheitliche und technisch fundierte Betreuung – von der Analyse des Angriffs bis zur rechtlichen Durchsetzung Ihrer Ansprüche.
                </p>
                
                <p>
                  Als Ihr Anwalt für CyberCrime vertreten wir Sie auch vor der Datenschutzbehörde sowie gegenüber Plattformbetreibern, Finanzdienstleistern oder Kryptowährungsbörsen. Unsere langjährige Erfahrung im Bereich Internetkriminalität macht uns zu einem verlässlichen Partner – auch in komplexen und grenzüberschreitenden Fällen.
                </p>
                
                <div className="bg-blue-50/80 p-8 rounded-lg border border-blue-100 my-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Vertrauen Sie auf erfahrene Spezialisten für CyberCrime</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unsere Kanzlei vereint juristische Präzision mit technischem Know-how. Wenn Sie Opfer eines Cyberangriffs wurden oder präventiv rechtliche Beratung suchen: Wir sind für Sie da – schnell, diskret und professionell.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Focus Areas Section with modern blue background */}
      <Section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250px_250px] animate-[moveBackground_20s_linear_infinite]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Unsere Schwerpunkte
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Spezialisierte Expertise in allen Bereichen der Internetkriminalität
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="prevention" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-200 text-left py-6 font-semibold text-lg">
                  Prävention – Cyber Resilienz
                </AccordionTrigger>
                <AccordionContent className="text-blue-100 pb-6 leading-relaxed">
                  Die NIS2 Richtlinie wurde noch nicht einmal in nationales Recht (NISG 2024) gegossen, schon steht mit dem Cyber Resilience Act (Verordnung über horizontale Cybersicherheitsanforderungen für Produkte mit digitalen Elementen) der nächste EU-Rechtsakt zur Sicherstellung von Cybersicherheitsanforderungen in den Startlöchern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ransomware" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-200 text-left py-6 font-semibold text-lg">
                  Ransomware – Incident Response
                </AccordionTrigger>
                <AccordionContent className="text-blue-100 pb-6 leading-relaxed">
                  Ihr Unternehmen wurde gehackt, Daten sind verschlüsselt und die Angreifer verlangen Lösegeld? Es steht viel auf dem Spiel! Gemeinsam mit unseren auf Cyber-Attacken spezialisierten IT-Security und Forensik Partnern unterstützen wir Sie diskret bei der schnellstmöglichen Bewältigung dieser Herausforderung.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fraud" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-200 text-left py-6 font-semibold text-lg">
                  Anlagebetrug – Datenmissbrauch
                </AccordionTrigger>
                <AccordionContent className="text-blue-100 pb-6 leading-relaxed">
                  Vom vermeintlich lukrativen Investment mit Online Trading, bis hin zur missbräuchlichen Verwendung Ihrer Daten (Identitätsdiebstahl und Geldwäsche). Schnelles und koordiniertes Handeln ist Voraussetzung, um eine Chance zu haben, das "investierte" Vermögen zurück zu erhalten und weiteren Schaden zu verhindern. Wir kennen die Methoden der Verbrecher und wissen was zu tun ist.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hate-speech" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-200 text-left py-6 font-semibold text-lg">
                  Hass im Netz
                </AccordionTrigger>
                <AccordionContent className="text-blue-100 pb-6 leading-relaxed">
                  Das Internet ist kein rechtsfreier Raum. Hasspostings, Beleidigungen über soziale Medien oder Cybermobbing sind nicht erst seit dem am 1. Jänner 2021 in Kraft getretenen "Hass im Netz" Gesetzespaket rechtswidrig. Wir unterstützen Sie bei der strafrechtlichen Verfolgung der Täter und setzen Ihre zivil- und medienrechtlichen Ansprüche durch.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tracing" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-200 text-left py-6 font-semibold text-lg">
                  Asset-/Krypto Tracing
                </AccordionTrigger>
                <AccordionContent className="text-blue-100 pb-6 leading-relaxed">
                  Die Analyse und Nachverfolgung von Kryptotransaktionen ("Follow the Money") ist nicht nur bei der Aufklärung von Straftaten essentiell. Auch in zivilrechtlichen Verfahren, Erbstreitigkeiten und Insolvenzen steigt der Bedarf an Experten auf diesem Gebiet. Als erfahrene Rechtsanwält:innen und zertifizierte Blockchain-Forensiker bieten wir unseren Mandant:innen Expertisee aus einer Hand.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="py-16 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Unsere Expert:innen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unser spezialisiertes Team für Cybercrime und Internetkriminalität
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cybercrimeExperts.map((expert, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-gray-600 mb-2">{expert.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {expert.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer - same as blog pages */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-primary rounded-lg shadow-[0_0_20px_hsl(214_100%_60%_/_0.4)]">
                  <Scale className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
                <span className="text-xl font-bold">
                  Crypto<span className="bg-gradient-primary bg-clip-text text-transparent">Law</span>
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Ihre Experten für Kryptowährungsrecht, Blockchain-Technologie und digitale Vermögenswerte. Wir bieten umfassende Rechtsberatung in der digitalen Welt.
              </p>
            </div>

            {/* Legal Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Rechtsgebiete</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kryptowährungsrecht</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blockchain Compliance</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Asset Recovery</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cyber Crime</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Regulatorische Beratung</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Kontakt</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">Musterstraße 123, 1010 Wien</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">+43 1 234 567 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">office@cryptolaw.at</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">Mo-Fr: 9:00-18:00</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Bleiben Sie über aktuelle Entwicklungen im Krypto-Recht informiert.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="w-full bg-gradient-primary hover:shadow-[0_0_30px_hsl(214_100%_60%_/_0.6)] transition-all duration-300">
                  Anmelden
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 CryptoLaw. Alle Rechte vorbehalten.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Impressum</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Datenschutz</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">AGB</a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cybercrime;
