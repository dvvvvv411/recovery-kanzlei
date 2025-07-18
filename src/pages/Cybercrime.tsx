import { Button } from "@/components/ui/button";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Shield, AlertTriangle, Search, Users, Gavel } from "lucide-react";

const Cybercrime = () => {
  const teamMembers = [
    {
      name: "Bernhard Bovensiepen",
      title: "Rechtsanwalt",
      specialization: "Cybercrime, Datenschutz/Compliance, Wertpapier- und Kapitalmarktrecht, Kryptonachverfolgung und Mittelherkunftsnachweis",
      image: "/lovable-uploads/2cad25d9-8d15-482b-bc38-5b1378991be6.png"
    },
    {
      name: "Leonard Grimm", 
      title: "Rechtsanwalt",
      specialization: "Prozessführung, Datenschutz/Compliance, Wertpapier- und Kapitalmarktrecht",
      image: "/lovable-uploads/b4127816-793a-42ef-b5e4-34987580a428.png"
    },
    {
      name: "Martin Willig",
      title: "Blockchain- /Datenanalyst", 
      specialization: "Blockchain-Forensik, Kryptowährungsanalyse",
      image: "/lovable-uploads/fb9c5d6b-b0d1-44b0-9835-4301827237bb.png"
    },
    {
      name: "Steffen Rheinböcker",
      title: "Rechtsanwalt",
      specialization: "Immobilienrecht, Prozessführung und Streitbeilegung, Cybercrime",
      image: "/lovable-uploads/709d1496-f015-4b38-b331-9cb17b1b6eaa.png"
    }
  ];

  const focusAreas = [
    {
      title: "Prävention – Cyber Resilienz",
      content: "Die NIS2 Richtlinie wurde noch nicht einmal in nationales Recht (NISG 2024) gegossen, schon steht mit dem Cyber Resilience Act (Verordnung über horizontale Cybersicherheitsanforderungen für Produkte mit digitalen Elementen) der nächste EU-Rechtsakt zur Sicherstellung von Cybersicherheitsanforderungen in den Startlöchern.",
      icon: Shield
    },
    {
      title: "Ransomware – Incident Response",
      content: "Ihr Unternehmen wurde gehackt, Daten sind verschlüsselt und die Angreifer verlangen Lösegeld? Es steht viel auf dem Spiel! Gemeinsam mit unseren auf Cyber-Attacken spezialisierten IT-Security und Forensik Partnern unterstützen wir Sie diskret bei der schnellstmöglichen Bewältigung dieser Herausforderung.",
      icon: AlertTriangle
    },
    {
      title: "Anlagebetrug – Datenmissbrauch",
      content: "Vom vermeintlich lukrativen Investment mit Online Trading, bis hin zur missbräuchlichen Verwendung Ihrer Daten (Identitätsdiebstahl und Geldwäsche). Schnelles und koordiniertes Handeln ist Voraussetzung, um eine Chance zu haben, das \"investierte\" Vermögen zurück zu erhalten und weiteren Schaden zu verhindern. Wir kennen die Methoden der Verbrecher und wissen was zu tun ist.",
      icon: Search
    },
    {
      title: "Hass im Netz",
      content: "Das Internet ist kein rechtsfreier Raum. Hasspostings, Beleidigungen über soziale Medien oder Cybermobbing sind nicht erst seit dem am 1. Jänner 2021 in Kraft getretenen \"Hass im Netz\" Gesetzespaket rechtswidrig. Wir unterstützen Sie bei der strafrechtlichen Verfolgung der Täter und setzen Ihre zivil- und medienrechtlichen Ansprüche durch.",
      icon: Users
    },
    {
      title: "Asset-/Krypto Tracing",
      content: "Die Analyse und Nachverfolgung von Kryptotransaktionen (\"Follow the Money\") ist nicht nur bei der Aufklärung von Straftaten essentiell. Auch in zivilrechtlichen Verfahren, Erbstreitigkeiten und Insolvenzen steigt der Bedarf an Experten auf diesem Gebiet. Als erfahrene Rechtsanwält:innen und zertifizierte Blockchain-Forensiker bieten wir unseren Mandant:innen Espertise aus einer Hand.",
      icon: Gavel
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/src/assets/crypto-hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-gray-900/50 to-blue-900/80"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Cybercrime
              </span>
              <br />
              <span className="text-white/90">Ihr Anwalt für Internetkriminalität</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Spezialisierte Rechtsberatung bei digitalen Bedrohungen, Kryptobetrug und Cyberangriffen
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-xl hover:shadow-orange-500/25 transition-all duration-300 text-lg px-8 py-6"
              >
                Beratung anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg px-8 py-6"
              >
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Main Content */}
      <Section className="py-16 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ihr Anwalt für CyberCrime und Internetkriminalität
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Internetkriminalität – auch bekannt als CyberCrime – zählt zu den dynamischsten Bedrohungen unserer Zeit. 
                Digitale Prozesse durchdringen heute nahezu jeden Lebensbereich – ob im Beruf oder im Privatleben. Diese 
                Entwicklung nutzen Cyberkriminelle gezielt aus: Phishing-Attacken, Anlagebetrug mit Kryptowährungen, 
                Ransomware-Angriffe auf Unternehmen oder Identitätsdiebstahl sind längst keine Einzelfälle mehr.
              </p>
              
              <p>
                Als auf CyberCrime spezialisierte Kanzlei unterstützen wir unsere Mandant:innen seit Jahren bei der 
                rechtlichen Aufarbeitung von Angriffen im digitalen Raum. Unser Fokus liegt auf der forensischen 
                Nachverfolgung von Kryptotransaktionen, der Sicherung von Beweismitteln sowie der effektiven Vertretung 
                in Strafverfahren, Ermittlungsverfahren und zivilrechtlichen Klagen.
              </p>
              
              <p>
                Wir verfügen über fundierte Expertise als zertifizierte Datenschutz- und Geldwäschebeauftragte und 
                arbeiten eng mit technischen CyberSecurity-Spezialisten zusammen. Dadurch garantieren wir eine 
                gesamtheitliche und technisch fundierte Betreuung – von der Analyse des Angriffs bis zur rechtlichen 
                Durchsetzung Ihrer Ansprüche.
              </p>
              
              <p>
                Als Ihr Anwalt für CyberCrime vertreten wir Sie auch vor der Datenschutzbehörde sowie gegenüber 
                Plattformbetreibern, Finanzdienstleistern oder Kryptowährungsbörsen. Unsere langjährige Erfahrung 
                im Bereich Internetkriminalität macht uns zu einem verlässlichen Partner – auch in komplexen und 
                grenzüberschreitenden Fällen.
              </p>
            </div>
            
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vertrauen Sie auf erfahrene Spezialisten für CyberCrime
              </h3>
              <p className="text-lg text-gray-700">
                Unsere Kanzlei vereint juristische Präzision mit technischem Know-how. Wenn Sie Opfer eines 
                Cyberangriffs wurden oder präventiv rechtliche Beratung suchen: Wir sind für Sie da – schnell, 
                diskret und professionell.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Focus Areas Section */}
      <Section className="py-16 bg-gradient-to-br from-blue-900 via-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader>
            <SectionTitle className="text-white mb-4">Unsere Schwerpunkte</SectionTitle>
            <SectionDescription className="text-white/80">
              Spezialisierte Beratung in allen Bereichen der Internetkriminalität
            </SectionDescription>
          </SectionHeader>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {focusAreas.map((area, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden"
                >
                  <AccordionTrigger className="text-white hover:text-white/80 px-6 py-4 text-left font-semibold text-lg hover:no-underline">
                    <div className="flex items-center gap-3">
                      <area.icon className="h-6 w-6 text-orange-400" />
                      {area.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90 px-6 pb-4 leading-relaxed">
                    {area.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="py-16 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Unsere Expert:innen</SectionTitle>
            <SectionDescription>
              Das Team für Cybercrime und Internetkriminalität
            </SectionDescription>
          </SectionHeader>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2 font-medium">{member.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {member.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Cybercrime;