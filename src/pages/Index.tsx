import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Shield, Scale, Users, Phone, Mail, MapPin, Clock, CheckCircle, Award, TrendingUp, Star, User, Gavel, Heart, Globe, TreePine, Camera, Euro, Building2, Target } from "lucide-react";
import { useEffect, useState } from "react";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          let startTime: number;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [end, duration, hasStarted]);
  
  return (
    <span id={`counter-${end}`} className="text-4xl lg:text-5xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

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

  const team = [
    {
      name: "Dr. Maria Schneider",
      role: "Spezialistin für Kryptowährungsrecht",
      experience: "12 Jahre",
      cases: "200+",
      icon: User
    },
    {
      name: "Thomas Weber",
      role: "Blockchain-Forensik Experte",
      experience: "8 Jahre",
      cases: "150+",
      icon: Shield
    },
    {
      name: "Sarah Müller",
      role: "Internationale Rechtsdurchsetzung",
      experience: "10 Jahre",
      cases: "180+",
      icon: Globe
    }
  ];

  const successes = [
    {
      title: "Ponzi-Schema Auflösung",
      amount: "€2.3M",
      description: "Erfolgreiche Rückgewinnung von Anlegergeldern aus betrügerischem Krypto-Ponzi-Schema",
      icon: TrendingUp
    },
    {
      title: "ICO-Betrug Aufdeckung",
      amount: "€890K",
      description: "Vollständige Entschädigung der Investoren nach betrügerischem Initial Coin Offering",
      icon: Award
    },
    {
      title: "Wallet-Hack Recovery",
      amount: "€1.2M",
      description: "Wiederherstellung gestohlener Kryptowährungen nach Börsen-Hack durch forensische Analyse",
      icon: Shield
    }
  ];

  const values = [
    {
      title: "Transparenz",
      description: "Vollständige Aufklärung aller Verfahrensschritte und Kosten",
      icon: CheckCircle
    },
    {
      title: "Persönlichkeit",
      description: "Individuelle Betreuung durch spezialisierte Anwälte",
      icon: Heart
    },
    {
      title: "Innovation",
      description: "Modernste Blockchain-Technologie für maximale Erfolgsquote",
      icon: Star
    }
  ];

  const certifications = [
    "Certified Blockchain Forensics",
    "International Fraud Investigation",
    "Cryptocurrency Law Specialist",
    "Digital Assets Recovery Expert"
  ];

  const mediaFeatures = [
    "Handelsblatt: 'Pioniere der Krypto-Recovery'",
    "ARD: 'Experten für digitale Vermögenswerte'",
    "Legal Tribune: 'Führend in Blockchain-Recht'"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Hero Section */}
      <Section className="py-20 lg:py-32 relative overflow-hidden h-[70vh] flex items-center">
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
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-glass backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 border border-[var(--border-glass)] shadow-glass animate-pulse" style={{ textShadow: 'var(--text-glow)', boxShadow: '0 0 30px hsl(214 100% 60% / 0.5), var(--shadow-glass)' }}>
              ✨ Über 500 erfolgreiche Fälle gelöst
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              Ihr Partner für<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px hsl(214 100% 60% / 0.6)) drop-shadow(0 0 40px hsl(214 100% 60% / 0.3))' }}>Krypto-Recovery</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 mb-10 leading-relaxed max-w-3xl mx-auto" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Holen Sie Ihr durch Betrug verlorenes Krypto-Vermögen zurück. Professionelle Rechtsberatung mit persönlicher Betreuung – transparent und erfolgsorientiert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-gradient-glass backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-glass hover:shadow-[0_0_30px_hsl(214_100%_60%_/_0.6)]" style={{ textShadow: 'var(--text-glow)', boxShadow: '0 0 20px hsl(214 100% 60% / 0.3), var(--shadow-glass)' }}>
                <Phone className="mr-2 h-5 w-5 drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 10px hsl(214 100% 60% / 0.8))' }} />
                Sofortberatung starten
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-gradient-glass backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-glass hover:shadow-[0_0_30px_hsl(214_100%_60%_/_0.6)]" style={{ textShadow: 'var(--text-glow)', boxShadow: '0 0 20px hsl(214 100% 60% / 0.3), var(--shadow-glass)' }}>
                Kostenlose Erstanalyse
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-200">
              <div className="flex items-center gap-2 p-2 rounded-lg" style={{ textShadow: 'var(--text-glow)', boxShadow: '0 0 15px hsl(214 100% 60% / 0.2)' }}>
                <CheckCircle className="h-4 w-4 text-primary drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 10px hsl(214 100% 60% / 0.8))' }} />
                100% kostenlose Erstberatung
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg" style={{ textShadow: 'var(--text-glow)', boxShadow: '0 0 15px hsl(214 100% 60% / 0.2)' }}>
                <CheckCircle className="h-4 w-4 text-primary drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 10px hsl(214 100% 60% / 0.8))' }} />
                Kein Erfolg = keine Kosten
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg" style={{ textShadow: 'var(--text-glow)', boxShadow: '0 0 15px hsl(214 100% 60% / 0.2)' }}>
                <CheckCircle className="h-4 w-4 text-primary drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 10px hsl(214 100% 60% / 0.8))' }} />
                24/7 Notfall-Hotline
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Success as a Service Section */}
      <Section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 items-center">
            <div className="col-span-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-white text-center">
                SUCCESS AS A SERVICE
              </h2>
            </div>
            <div className="col-span-3">
              <p className="text-lg lg:text-xl text-white leading-relaxed text-left">
                Wir verstehen uns nicht „nur" als Rechtsvertreter im klassischen Sinn, sondern vielmehr als langfristiger Wegbegleiter und Partner. Mandant:innen sollen von unserer Arbeit auch tatsächlich profitieren. Wir legen daher den Fokus auf die individuellen Bedürfnisse und finden gemeinsam maßgeschneiderte Lösungen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Company Statistics Section */}
      <Section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 items-center">
            {/* First Stat */}
            <div className="text-center relative">
              <div className="mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-white/70 text-sm uppercase tracking-wider font-medium">
                Euro verfolgtes Schadens­volumen bei Cybercrime
              </p>
              {/* Divider */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 bg-white/20"></div>
            </div>

            {/* Second Stat */}
            <div className="text-center relative">
              <div className="mb-2">
                <AnimatedCounter end={50} suffix=" Mio+" />
              </div>
              <p className="text-white/70 text-sm uppercase tracking-wider font-medium">
                topmotivierte Mitarbeiter:innen
              </p>
              {/* Divider */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 bg-white/20"></div>
            </div>

            {/* Third Stat */}
            <div className="text-center relative">
              <div className="mb-2">
                <AnimatedCounter end={13} />
              </div>
              <p className="text-white/70 text-sm uppercase tracking-wider font-medium">
                Erfolgreich abgewickelte Immobilientransaktionen
              </p>
              {/* Divider */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 bg-white/20"></div>
            </div>

            {/* Fourth Stat */}
            <div className="text-center">
              <div className="mb-2">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <p className="text-white/70 text-sm uppercase tracking-wider font-medium">
                Erfolgreiche Fälle
              </p>
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
              <Card key={index} className="text-center hover:shadow-glass hover:-translate-y-2 transition-all duration-300 bg-gradient-glass backdrop-blur-md border-[var(--border-glass)] shadow-glass">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 w-20 h-20 bg-gradient-glass backdrop-blur-md rounded-2xl flex items-center justify-center shadow-glass border border-[var(--border-glass)]">
                    <service.icon className="h-10 w-10 text-primary" />
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

      {/* Team Section */}
      <Section id="team" className="bg-gradient-mystery">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Unser Anwaltsteam</SectionTitle>
            <SectionDescription>
              Lernen Sie unsere Experten kennen – persönlich, kompetent und zu 100% Ihrem Erfolg verpflichtet.
            </SectionDescription>
          </SectionHeader>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-glass hover:-translate-y-2 transition-all duration-300 bg-gradient-glass backdrop-blur-md border-[var(--border-glass)] shadow-glass">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 w-24 h-24 bg-gradient-glass backdrop-blur-md rounded-full flex items-center justify-center shadow-glass border border-[var(--border-glass)]">
                    <member.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Erfahrung:</span>
                      <span className="font-semibold">{member.experience}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Erfolgreiche Fälle:</span>
                      <span className="font-semibold">{member.cases}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Success Stories Section */}
      <Section id="successes">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Unsere Erfolge</SectionTitle>
            <SectionDescription>
              Echte Fälle, echte Ergebnisse – so helfen wir unseren Mandanten beim Krypto-Recovery.
            </SectionDescription>
          </SectionHeader>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successes.map((success, index) => (
              <Card key={index} className="text-center hover:shadow-glass hover:-translate-y-2 transition-all duration-300 bg-gradient-glass backdrop-blur-md border-[var(--border-glass)] shadow-glass">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 w-20 h-20 bg-gradient-glass backdrop-blur-md rounded-2xl flex items-center justify-center shadow-glass border border-[var(--border-glass)]">
                    <success.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{success.title}</CardTitle>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mt-2">
                    {success.amount}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {success.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Company Values Section */}
      <Section className="bg-gradient-mystery">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Unsere Werte</SectionTitle>
            <SectionDescription>
              Diese Prinzipien leiten uns in jedem Fall und machen uns zu Ihrem vertrauenswürdigen Partner.
            </SectionDescription>
          </SectionHeader>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-glass hover:-translate-y-2 transition-all duration-300 bg-gradient-glass backdrop-blur-md border-[var(--border-glass)] shadow-glass">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 w-20 h-20 bg-gradient-glass backdrop-blur-md rounded-2xl flex items-center justify-center shadow-glass border border-[var(--border-glass)]">
                    <value.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications & Media Section */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Zertifizierungen & Qualifikationen</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Medienberichte</h3>
              <div className="space-y-4">
                {mediaFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Camera className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Social Responsibility Section */}
      <Section className="bg-gradient-mystery">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Soziale Verantwortung</SectionTitle>
            <SectionDescription>
              Wir unterstützen Bildungsinitiativen und klären über Krypto-Sicherheit auf.
            </SectionDescription>
          </SectionHeader>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-glass hover:-translate-y-2 transition-all duration-300 bg-gradient-glass backdrop-blur-md border-[var(--border-glass)] shadow-glass">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-glass backdrop-blur-md rounded-2xl flex items-center justify-center shadow-glass border border-[var(--border-glass)] mb-4">
                  <TreePine className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Bildungsinitiative</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Kostenlose Workshops und Seminare zur Krypto-Sicherheit für Verbraucher und Unternehmen.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-glass hover:-translate-y-2 transition-all duration-300 bg-gradient-glass backdrop-blur-md border-[var(--border-glass)] shadow-glass">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-glass backdrop-blur-md rounded-2xl flex items-center justify-center shadow-glass border border-[var(--border-glass)] mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Opferhilfe</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Unterstützung für Betrugsopfer durch psychologische Beratung und finanzielle Hilfe.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-gradient-glass backdrop-blur-md rounded-full text-primary text-sm font-medium mb-4 border border-[var(--border-glass)]">
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
              <Button variant="outline" size="lg" className="bg-gradient-glass backdrop-blur-md border-[var(--border-glass)] hover:bg-background/20 shadow-glass">
                Ihr persönliches Team kennenlernen
              </Button>
            </div>
            <div className="lg:text-right">
              <div className="bg-gradient-glass backdrop-blur-md p-8 rounded-2xl border border-[var(--border-glass)] shadow-glass relative overflow-hidden">
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
                  <div className="mt-8 p-4 bg-background/20 rounded-xl border border-[var(--border-glass)] backdrop-blur-sm">
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
      <Section id="contact" className="bg-gradient-mystery">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle>Kontaktieren Sie uns</SectionTitle>
            <SectionDescription>
              Lassen Sie uns Ihnen helfen, Ihr verlorenes Vermögen zurückzuerlangen. Kontaktieren Sie uns noch heute.
            </SectionDescription>
          </SectionHeader>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-glass backdrop-blur-md rounded-2xl flex items-center justify-center shadow-glass border border-[var(--border-glass)] mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Telefon</h3>
              <p className="text-muted-foreground">+49 30 12345678</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-glass backdrop-blur-md rounded-2xl flex items-center justify-center shadow-glass border border-[var(--border-glass)] mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">E-Mail</h3>
              <p className="text-muted-foreground">info@cryptolaw.de</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-glass backdrop-blur-md rounded-2xl flex items-center justify-center shadow-glass border border-[var(--border-glass)] mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-muted-foreground">Unter den Linden 1<br />10117 Berlin</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-glass backdrop-blur-md rounded-2xl flex items-center justify-center shadow-glass border border-[var(--border-glass)] mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Sprechzeiten</h3>
              <p className="text-muted-foreground">Mo-Fr: 8:00-18:00<br />Sa: 9:00-14:00</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="bg-gradient-glass backdrop-blur-md border-[var(--border-glass)] hover:bg-background/20 shadow-glass">
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
