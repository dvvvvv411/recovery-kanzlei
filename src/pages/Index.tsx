import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Shield, Scale, Users, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: "Krypto-Betrug Wiederherstellung",
      description: "Spezialisierte Beratung und rechtliche Unterstützung bei Kryptowährungsbetrug, Ponzi-Schemata und betrügerischen ICOs."
    },
    {
      icon: Scale,
      title: "Finanzrecht",
      description: "Umfassende rechtliche Beratung in allen Bereichen des Finanzrechts, einschließlich Bankrecht und Kapitalmarktrecht."
    },
    {
      icon: Users,
      title: "Anlegerschutz",
      description: "Durchsetzung von Anlegerrechten und Schadensersatzansprüchen bei fehlerhafter Anlageberatung."
    }
  ];

  const features = [
    "24/7 Notfall-Hotline",
    "Kostenlose Erstberatung",
    "Erfolgsbasierte Honorierung",
    "Internationale Erfahrung",
    "Spezialisierung auf Krypto-Fälle",
    "Schnelle Reaktionszeiten"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">CryptoLaw</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Leistungen</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Über uns</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontakt</a>
            <Button>Beratung anfragen</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="bg-gradient-light py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full text-primary text-sm font-medium mb-6">
              ✨ Über 500 erfolgreiche Fälle gelöst
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Ihr Partner für<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Krypto-Recovery</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Holen Sie Ihr durch Betrug verlorenes Krypto-Vermögen zurück. Professionelle Rechtsberatung mit persönlicher Betreuung – transparent und erfolgsorientiert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4 h-auto shadow-modern hover:shadow-lg transition-all duration-300">
                <Phone className="mr-2 h-5 w-5" />
                Sofortberatung starten
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-primary/20 hover:bg-primary/5 hover:border-primary transition-all duration-300">
                Kostenlose Erstanalyse
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                100% kostenlose Erstberatung
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Kein Erfolg = keine Kosten
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                24/7 Notfall-Hotline
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Unsere Rechtsgebiete</SectionTitle>
            <SectionDescription>
              Wir bieten spezialisierte rechtliche Unterstützung in allen Bereichen des Finanz- und Kryptowährungsrechts.
            </SectionDescription>
          </SectionHeader>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-card hover:-translate-y-2 transition-all duration-300 border-0 shadow-sm bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-modern">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Warum CryptoLaw wählen?</SectionTitle>
            <SectionDescription>
              Vertrauen Sie auf unsere Expertise und jahrelange Erfahrung im Bereich Kryptowährungsrecht.
            </SectionDescription>
          </SectionHeader>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-primary-light rounded-full text-primary text-sm font-medium mb-4">
                👥 Ihr persönliches Expertenteam
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Persönliche Betreuung,<br />professionelle Ergebnisse
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Seit über 10 Jahren stehen wir Opfern von Krypto-Betrug zur Seite. Unser erfahrenes Team 
                kombiniert juristische Expertise mit modernster Blockchain-Analyse, um Ihr Vermögen aufzuspüren 
                und zurückzuholen.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <strong className="text-foreground">Über 25 Millionen Euro</strong> haben wir bereits für unsere Mandanten 
                zurückgewonnen. Jeder Fall wird von einem spezialisierten Anwalt persönlich betreut – 
                von der ersten Beratung bis zum erfolgreichen Abschluss.
              </p>
              <Button size="lg" className="shadow-modern">
                Ihr persönliches Team kennenlernen
              </Button>
            </div>
            <div className="lg:text-right">
              <div className="bg-gradient-light p-8 rounded-2xl border-0 shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div className="group">
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">25M€</div>
                      <div className="text-muted-foreground text-sm">Zurückgewonnen</div>
                    </div>
                    <div className="group">
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                      <div className="text-muted-foreground text-sm">Jahre Erfahrung</div>
                    </div>
                    <div className="group">
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                      <div className="text-muted-foreground text-sm">Persönliche Betreuung</div>
                    </div>
                    <div className="group">
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">97%</div>
                      <div className="text-muted-foreground text-sm">Erfolgsquote</div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-white/50 rounded-xl border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm text-muted-foreground">Aktuell 47 aktive Fälle in Bearbeitung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle className="text-primary-foreground">Kontaktieren Sie uns</SectionTitle>
            <SectionDescription className="text-primary-foreground/90">
              Lassen Sie uns Ihnen helfen, Ihr verlorenes Vermögen zurückzuerlangen. Kontaktieren Sie uns noch heute.
            </SectionDescription>
          </SectionHeader>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Telefon</h3>
              <p className="text-primary-foreground/90">+49 30 12345678</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">E-Mail</h3>
              <p className="text-primary-foreground/90">info@cryptolaw.de</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-primary-foreground/90">Unter den Linden 1<br />10117 Berlin</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Sprechzeiten</h3>
              <p className="text-primary-foreground/90">Mo-Fr: 8:00-18:00<br />Sa: 9:00-14:00</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="secondary" size="lg">
              Termin vereinbaren
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">CryptoLaw</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Ihre Experten für Kryptowährungsrecht und Betrugswiederherstellung.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Leistungen</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Krypto-Betrug Recovery</li>
                <li>Finanzrecht</li>
                <li>Anlegerschutz</li>
                <li>Rechtsberatung</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Unternehmen</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Über uns</li>
                <li>Team</li>
                <li>Karriere</li>
                <li>Presse</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Impressum</li>
                <li>Datenschutz</li>
                <li>AGB</li>
                <li>Kontakt</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 CryptoLaw. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
