import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Shield, Scale, Users, Phone, Mail, MapPin, Clock, CheckCircle, Award, TrendingUp, Star, User, Gavel, Heart, Globe, TreePine, Camera, Euro, Building2, Target, ChevronRight, AlertTriangle, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { NewsCarousel } from "@/components/NewsCarousel";

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

  const partnerLogos = [
    {
      name: "Cybercrime Komplettschutz",
      logo: "/lovable-uploads/da91dba8-4542-49e2-a65f-f3c47c7a5afd.png"
    },
    {
      name: "Polizei Nordrhein-Westfalen",
      logo: "/lovable-uploads/1834d8de-5216-4084-be7f-b4973552d4e2.png"
    },
    {
      name: "Bundeskriminalamt", 
      logo: "/lovable-uploads/b2f48b3f-04a9-45fa-93e8-b4a2979906d0.png"
    },
    {
      name: "Coinbase",
      logo: "/lovable-uploads/40855976-8084-4aa6-8ab3-40a1b0d75ab6.png"
    },
    {
      name: "Binance",
      logo: "/lovable-uploads/a353d06a-d600-40b4-8ac2-e8fae21230d5.png"
    },
    {
      name: "HKCM",
      logo: "/lovable-uploads/a086ae08-4b5f-455b-b45e-f472a01b4701.png"
    }
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
      <Section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
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
        </div>
      </Section>

      {/* Company Statistics Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 items-center">
            {/* First Stat */}
            <div className="text-center relative">
              <div className="mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-white/70 text-sm uppercase tracking-wider font-medium">
                Jahre Fachexpertise
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
                Euro verfolgtes Schadensvolumen bei Cybercrime
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
                topmotivierte Mitarbeiter:innen
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
                Erfolgreich abgewickelte Immobilientransaktionen
              </p>
            </div>
          </div>
        </div>
        </div>
      </Section>

      {/* Krypto News Carousel Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Kanzlei News
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Aktuelle Entwicklungen und Erfolgsgeschichten aus der Welt der Kryptowährung-Recovery
              </p>
            </div>

            {/* News Carousel */}
            <NewsCarousel />
          </div>
        </div>
      </Section>

      {/* Unser Team Section */}
      <Section className="py-16 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Unser Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Lernen Sie unser erfahrenes Team kennen
              </p>
            </div>

            {/* Team Carousel */}
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
                {/* Daniel Azem */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="https://atb.law/wp-content/uploads/2024/05/Daniel-Azem-1025x1536.jpg"
                        alt="Daniel Azem"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Daniel Azem</h3>
                    <p className="text-gray-600">Rechtsanwalt</p>
                  </div>
                </CarouselItem>

                {/* Anela Blöch */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="https://atb.law/wp-content/uploads/2024/05/Anela-Bloech-1366x2048.jpg"
                        alt="Anela Blöch"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Anela Blöch</h3>
                    <p className="text-gray-600">Rechtsanwältin</p>
                  </div>
                </CarouselItem>

                {/* Roman Taudes */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="https://atb.law/wp-content/uploads/2024/05/Roman-Taudes-1-1025x1536.jpg"
                        alt="Roman Taudes"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Roman Taudes</h3>
                    <p className="text-gray-600">Rechtsanwalt</p>
                  </div>
                </CarouselItem>

                {/* Patrick Brunsteiner */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="https://atb.law/wp-content/uploads/2024/05/Patrick-Brunsteiner-1-1366x2048.jpg"
                        alt="Patrick Brunsteiner"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Patrick Brunsteiner</h3>
                    <p className="text-gray-600">Rechtsanwaltsanwärter</p>
                  </div>
                </CarouselItem>

                {/* Olja Drljevic */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="https://atb.law/wp-content/uploads/2025/05/088A7307-1366x2048.jpg"
                        alt="Olja Drljevic"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Olja Drljevic</h3>
                    <p className="text-gray-600">Teamassistentin</p>
                  </div>
                </CarouselItem>

                {/* Nerma Hadzic */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="text-left">
                    <div className="mb-6">
                      <img
                        src="https://atb.law/wp-content/uploads/2024/05/Nerma-Hadzic-1025x1536.jpg"
                        alt="Nerma Hadzic"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nerma Hadzic</h3>
                    <p className="text-gray-600">Teamassistentin</p>
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

      {/* Testimonials & Awards Section */}
      <Section className="py-16 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100/20 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Awards */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Ausgezeichnete 
                    <span className="text-orange-500"> Kompetenz</span>
                  </h2>
                  <p className="text-lg text-gray-700">
                    Unsere Expertise wird regelmäßig von führenden Bewertungsportalen und Fachmagazinen anerkannt.
                  </p>
                </div>
                
                {/* Awards Images */}
                <div className="space-y-6">
                  {/* anwalt.de Rating Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <img 
                      src="/lovable-uploads/7edeed99-525e-43a2-bc10-8d0175049754.png" 
                      alt="anwalt.de 5.0 Sterne Bewertung"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  
                  {/* Multiple Awards */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <img 
                      src="/lovable-uploads/5ea7e3c1-6d4f-4274-80b0-e82b8b3cb534.png" 
                      alt="Verschiedene Auszeichnungen 2024/2025"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Testimonials */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371.34 70.81" className="h-8 w-auto">
                    <path fill="#e95a0c" d="M103.12,48.56h-17.71l-3.52,9.66h-5.14l15.02-39.66h4.86l15.14,39.66h-5.14l-3.52-9.66Zm-1.56-4.25l-7.26-19.83h-.11l-7.21,19.83h14.58Z"></path>
                    <path fill="#e95a0c" d="M149.93,18.56V58.22h-4.97l-22.23-31.28h-.11v31.28h-4.86V18.56h4.8l22.4,31.61h.11V18.56h4.86Z"></path>
                    <path fill="#e95a0c" d="M208.09,18.56l-12.68,39.66h-4.69l-9.16-32.51h-.06l-9.33,32.51h-4.69l-12.68-39.66h5.19l9.77,31.67h.11l8.94-31.67h5.31l8.94,31.78h.06l9.77-31.78h5.19Z"></path>
                    <path fill="#e95a0c" d="M233.18,48.56h-17.71l-3.52,9.66h-5.14l15.02-39.66h4.86l15.14,39.66h-5.14l-3.52-9.66Zm-1.56-4.25l-7.26-19.83h-.11l-7.21,19.83h14.58Z"></path>
                    <path fill="#e95a0c" d="M247.81,18.56h4.86V53.75h19.66v4.47h-24.52V18.56Z"></path>
                    <path fill="#e95a0c" d="M277.86,23.03h-11.9v-4.47h28.71v4.47h-11.95V58.22h-4.86V23.03Z"></path>
                    <path fill="#385171" d="M293.41,54.37c0-2.2,1.69-3.92,3.92-3.92,2.09,0,3.85,1.72,3.85,3.92s-1.76,3.85-3.85,3.85c-2.23,0-3.92-1.72-3.92-3.85Z"></path>
                    <path fill="#385171" d="M308.75,18.56h11.9c12.57,0,20.56,8.15,20.56,19.88s-7.76,19.77-20.39,19.77h-12.07V18.56Zm11.73,35.24c9.55,0,15.75-6.42,15.75-15.36s-6.26-15.47-15.53-15.47h-7.09v30.83h6.87Z"></path>
                    <path fill="#385171" d="M345.87,18.56h24.3v4.47h-19.38v13.24h15.92v4.47h-15.92v13.01h20.55v4.47h-25.47V18.56Z"></path>
                    <circle fill="#385171" cx="35.41" cy="35.41" r="35.41"></circle>
                    <g><path fill="#fff" d="M42.65,39.13l6.62-12.98c.19-.38,.73-.38,.92,0l6.62,12.98s0,.02,0,.03h.55c-.67,3.61-3.83,6.35-7.63,6.35s-6.96-2.74-7.63-6.35h.55s0-.02,0,.03Zm11.53,.03l-3.99-8.12c-.19-.38-.74-.38-.92,0l-3.99,8.12h8.91Z"></path><path fill="#fff" d="M14.44,46.03s0-.02,0-.03l6.62-12.98c.19-.38,.73-.38,.92,0l6.62,12.98s0,.02,0,.03h.55c-.67,3.61-3.83,6.35-7.63,6.35s-6.96-2.74-7.63-6.35h.55Zm11.54,0l-3.99-8.12c-.19-.38-.74-.38-.92,0l-3.99,8.12h8.91Z"></path><rect fill="#fff" x="18.13" y="24.08" width="33.15" height="3.56" rx=".92" ry=".92" transform="translate(-5.07 8.79) rotate(-13.46)"></rect></g>
                  </svg>
                  <span className="text-lg font-semibold text-gray-700">Bewertungen</span>
                </div>

                {/* Testimonials */}
                <div className="space-y-4">
                  {/* Testimonial 1 */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">5,0</span>
                    </div>
                    <p className="text-gray-700 mb-3 italic">
                      "Hervorragende Beratung bei meinem Krypto-Betrugsfall. Das Team hat mich professionell durch den gesamten Prozess begleitet und konnte tatsächlich einen großen Teil meiner verlorenen Investition zurückholen."
                    </p>
                    <div className="text-sm text-gray-500">
                      <div className="font-medium">Michael S.</div>
                      <div>vor 2 Wochen</div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">5,0</span>
                    </div>
                    <p className="text-gray-700 mb-3 italic">
                      "Kompetente und verständliche Beratung. Die Anwälte kennen sich sehr gut mit Blockchain-Technologie aus und konnten mir bei einem komplexen ICO-Betrugsfall helfen."
                    </p>
                    <div className="text-sm text-gray-500">
                      <div className="font-medium">Sarah M.</div>
                      <div>vor 1 Monat</div>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">5,0</span>
                    </div>
                    <p className="text-gray-700 mb-3 italic">
                      "Schnelle und effiziente Hilfe bei einem Wallet-Hack. Das Team arbeitet sehr strukturiert und transparent. Kann ich nur weiterempfehlen!"
                    </p>
                    <div className="text-sm text-gray-500">
                      <div className="font-medium">Thomas K.</div>
                      <div>vor 3 Wochen</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Partner Logo Carousel Section */}
      <Section className="py-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/2 via-transparent to-orange-500/2"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
                Vertrauensvolle Partnerschaften
              </h2>
              <p className="text-muted-foreground">Gemeinsam für Ihre Rechte</p>
            </div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                })
              ]}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {partnerLogos.map((partner, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="group flex items-center justify-center h-20 p-4 transition-all duration-300 hover:scale-110">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain transition-all duration-300 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      {/* Enhanced Professional Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-orange-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
        
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 mb-12">
              
              {/* Company Info & Newsletter */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg">
                    <Scale className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
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
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600">
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
                <Button className="w-full mt-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-0">
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

export default Index;
