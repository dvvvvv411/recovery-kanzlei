
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Users, Search } from "lucide-react";

export default function Cybercrime() {
  const teamMembers = [
    {
      name: "Dr. Sarah Weber",
      role: "Partnerin, Cybercrime & Datenschutz",
      image: "/lovable-uploads/77e79b13-9bec-4809-ba2f-258c1dc251ef.png",
      expertise: ["Cybercrime", "Datenschutz", "IT-Sicherheit"]
    },
    {
      name: "Michael Schmidt",
      role: "Senior Associate, Cybersecurity",
      image: "/lovable-uploads/9a06dfc4-8617-4f69-97cd-82310bdeaa2e.png",
      expertise: ["Ransomware Response", "Incident Management", "Digital Forensics"]
    },
    {
      name: "Lisa Chen",
      role: "Associate, Digital Crime",
      image: "/lovable-uploads/2655fc4c-f436-4ab5-b230-31c66c479f13.png",
      expertise: ["Crypto Tracing", "Online Fraud", "Asset Recovery"]
    }
  ];

  const focusAreas = [
    {
      id: "praevention",
      title: "Prävention – Cyber Resilienz",
      icon: Shield,
      content: "Wir unterstützen Unternehmen beim Aufbau robuster Cyber-Resilienz-Strategien. Unsere präventiven Maßnahmen umfassen die Entwicklung von Sicherheitsrichtlinien, Mitarbeiterschulungen und die Implementierung rechtlicher Compliance-Frameworks. Durch proaktive Risikoanalysen und regelmäßige Security-Audits helfen wir dabei, Schwachstellen zu identifizieren bevor sie ausgenutzt werden können."
    },
    {
      id: "ransomware",
      title: "Ransomware – Incident Response",
      icon: Lock,
      content: "Bei Ransomware-Angriffen ist schnelles und koordiniertes Handeln entscheidend. Unser Incident Response Team bietet 24/7-Notfallunterstützung, koordiniert mit IT-Forensikern und Strafverfolgungsbehörden und entwickelt maßgeschneiderte Wiederherstellungsstrategien. Wir begleiten Sie von der ersten Schadensbegrenzung bis zur vollständigen Systemwiederherstellung und rechtlichen Aufarbeitung."
    },
    {
      id: "anlagebetrug",
      title: "Anlagebetrug – Datenmissbrauch",
      icon: Eye,
      content: "Digitaler Anlagebetrug und Datenmissbrauch nehmen drastisch zu. Wir verfolgen komplexe Betrugsschemata, identifizieren die Täter und ihre Netzwerke, und setzen Schadensersatzansprüche durch. Besonders bei Kryptowährungs-Betrug nutzen wir modernste Blockchain-Analysewerkzeuge für die Rückverfolgung gestohlener Assets."
    },
    {
      id: "hass-im-netz",
      title: "Hass im Netz",
      icon: Users,
      content: "Online-Hassrede und Cybermobbing erfordern spezielle rechtliche Expertise. Wir unterstützen Betroffene bei der Durchsetzung ihrer Rechte, erwirken einstweilige Verfügungen gegen Hasskommentare und verfolgen die Täter zivilrechtlich. Unser Team arbeitet eng mit Plattformbetreibern und Behörden zusammen, um schnelle Lösungen zu erzielen."
    },
    {
      id: "asset-tracing",
      title: "Asset-/Krypto Tracing",
      icon: Search,
      content: "Modernste Blockchain-Forensik ermöglicht es uns, gestohlene Kryptowährungen und digitale Assets zu verfolgen. Wir nutzen professionelle Analysewerkzeuge, um Transaktionsketten zu rekonstruieren, Wallet-Verbindungen aufzudecken und Assets auf Börsen zu identifizieren. In Zusammenarbeit mit internationalen Partnern können wir auch grenzüberschreitende Asset-Recovery-Verfahren durchführen."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(214_100%_50%_/_0.1)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-fade-in">
              Cybercrime
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Spezialisierte Rechtsberatung für die digitale Welt
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Beratung anfragen
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <Section className="bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
                In einer zunehmend digitalisierten Welt sind Unternehmen und Privatpersonen täglich neuen Cyber-Bedrohungen ausgesetzt. Von Ransomware-Angriffen über Datendiebstahl bis hin zu komplexen Betrugsschemata – die rechtlichen Herausforderungen im Cyberspace erfordern spezialisierte Expertise und schnelle Reaktionen.
              </p>
              
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                Unsere Kanzlei verfügt über umfassende Erfahrung in der Beratung und Vertretung bei allen Aspekten des Cybercrime-Rechts. Wir kombinieren tiefgreifende juristische Kenntnisse mit technischem Verständnis für digitale Systeme und moderne Ermittlungsmethoden.
              </p>

              <p className="text-lg leading-relaxed mb-12 text-muted-foreground">
                Ob präventive Beratung, Incident Response oder die Durchsetzung von Schadensersatzansprüchen – wir stehen unseren Mandanten mit maßgeschneiderten Lösungen zur Seite und sorgen dafür, dass ihre Rechte auch im digitalen Raum gewahrt werden.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Focus Areas Section */}
      <Section className="relative bg-gradient-to-br from-primary/5 via-blue-50/30 to-primary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-blue-500/3 to-blue-400/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader>
            <SectionTitle className="text-foreground">Unsere Schwerpunkte</SectionTitle>
            <SectionDescription>
              Spezialisierte Expertise für alle Bereiche des Cybercrime-Rechts
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {focusAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <AccordionItem 
                    key={area.id} 
                    value={area.id}
                    className="border border-primary/20 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {area.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed pl-14">
                        {area.content}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Unsere Expert:innen</SectionTitle>
            <SectionDescription>
              Erfahrene Rechtsanwälte mit spezieller Expertise im Cybercrime-Bereich
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-primary/10">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
