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
      <Section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Ihr Anwalt für <span className="text-primary">Krypto-Betrug</span> Wiederherstellung
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Spezialisierte Rechtsberatung zur Wiedererlangung Ihrer durch Kryptowährungsbetrug verlorenen Vermögenswerte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Sofort anrufen
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Kostenlose Beratung
              </Button>
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
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Experten für Krypto-Rechtsfälle
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Mit über 10 Jahren Erfahrung im Finanzrecht und spezieller Expertise im Bereich 
                Kryptowährungen helfen wir Opfern von Betrug dabei, ihre Vermögenswerte zurückzuerlangen.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Unser Team hat bereits über 500 erfolgreiche Fälle bearbeitet und Millionen von Euro 
                für unsere Mandanten zurückgeholt.
              </p>
              <Button size="lg">
                Mehr erfahren
              </Button>
            </div>
            <div className="lg:text-right">
              <div className="bg-card p-8 rounded-lg border shadow-sm">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">Erfolgreiche Fälle</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-muted-foreground">Jahre Erfahrung</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground">Verfügbarkeit</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-muted-foreground">Erfolgsquote</div>
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
