import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const BlogPostKryptonachverfolgung = () => {
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
                      Cybercrime, Datenschutz, Gewerblicher Rechtsschutz
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="bg-white/80 hover:bg-white border-gray-200" />
              <CarouselNext className="bg-white/80 hover:bg-white border-gray-200" />
            </Carousel>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Benötigen Sie rechtliche Unterstützung bei CyberCrime?
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Kontaktieren Sie unsere CyberCrime-Experten für eine unverbindliche Erstberatung. Wir helfen Ihnen bei der rechtlichen Aufarbeitung von Cyberangriffen und der Durchsetzung Ihrer Ansprüche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  <Mail className="mr-2 h-5 w-5" />
                  Beratung anfragen
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  +43 512 313 313
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPostKryptonachverfolgung;