import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Clock, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Globe, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-accent to-accent/80 p-2 rounded-xl mr-3">
                <Shield className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">CryptoRecht</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-muted-foreground hover:text-accent transition-all duration-300 font-medium">Leistungen</a>
              <a href="#process" className="text-muted-foreground hover:text-accent transition-all duration-300 font-medium">Ablauf</a>
              <a href="#team" className="text-muted-foreground hover:text-accent transition-all duration-300 font-medium">Team</a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-all duration-300 font-medium">Kontakt</a>
            </div>
            <Button className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 rounded-xl font-semibold">
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Zap className="h-4 w-4 mr-2" />
              #1 Krypto-Betrug Wiederherstellung in Deutschland
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Holen Sie Ihre gestohlenen Kryptowährungen zurück
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-white/90 leading-relaxed max-w-4xl mx-auto">
              Spezialisierte Anwaltskanzlei mit 97% Erfolgsquote bei der Rückgewinnung von Krypto-Betrug. 
              Wir haben bereits über €45M für unsere Mandanten von komplexen Krypto-Betrugsmaschen zurückgeholt.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105">
                Rückgewinnung starten <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
                Kostenlose Fallbewertung
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-2">€45M+</div>
                <div className="text-white/80 font-medium">Zurückgeholt</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-2">97%</div>
                <div className="text-white/80 font-medium">Erfolgsquote</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-accent mb-2">750+</div>
                <div className="text-white/80 font-medium">Erfolgreiche Fälle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/20 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Globe className="h-4 w-4 mr-2" />
                Opfer von Krypto-Betrug?
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Sie sind nicht allein.
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Kryptowährungs-Betrug kostet Opfer jährlich Milliarden. Unser spezialisiertes Rechtsteam 
                weiß genau, wie man gestohlene digitale Vermögenswerte aufspürt, verfolgt und zurückholt.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-primary mb-8">Häufige Krypto-Betrugsarten, die wir bearbeiten:</h3>
                <div className="grid gap-4">
                  {[
                    "Investment-Betrug & Ponzi-Systeme",
                    "Romance-Scams mit Krypto",
                    "Gefälschte Exchange-Plattformen",
                    "DeFi-Protokoll-Exploits",
                    "NFT-Marktplatz-Betrug",
                    "Business Email Compromise"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50 hover:bg-card/80 transition-all duration-300">
                      <div className="bg-accent/20 p-2 rounded-lg mr-4">
                        <CheckCircle className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-accent/20 p-3 rounded-xl">
                        <TrendingUp className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-2xl text-accent">Unsere Lösung</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-lg">
                      Wir kombinieren fortschrittliche Blockchain-Forensik mit aggressiven rechtlichen Maßnahmen:
                    </p>
                    <div className="space-y-4">
                      {[
                        "Verfolgung gestohlener Gelder über mehrere Blockchains",
                        "Identifizierung und Lokalisierung von Tätern",
                        "Einfrieren von Vermögenswerten durch rechtliche Verfügungen",
                        "Rückgewinnung durch Zivilprozesse",
                        "Koordination mit Strafverfolgungsbehörden weltweit"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="bg-accent/20 p-1 rounded-full mt-1">
                            <ArrowRight className="h-3 w-3 text-accent" />
                          </div>
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Umfassende Rechtsdienstleistungen
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Vollspektrum-Rechtshilfe für Kryptowährungen
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Spezialisierte rechtliche Unterstützung bei kryptowährungsbezogenen Angelegenheiten
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Krypto-Betrug Rückgewinnung",
                  description: "Spezialisierte Rückgewinnung gestohlener Kryptowährungen durch rechtliche Kanäle und Blockchain-Forensik."
                },
                {
                  icon: Users,
                  title: "Zivilrechtsverfahren",
                  description: "Aggressive Verfolgung von Tätern vor Zivilgerichten zur Wiedererlangung von Schäden und Vermögenswerten."
                },
                {
                  icon: Clock,
                  title: "Notfall-Response",
                  description: "24/7 Notfall-Response für zeitkritische Krypto-Betrugsfälle, die sofortiges Handeln erfordern."
                },
                {
                  icon: Award,
                  title: "Regulatorische Compliance",
                  description: "Navigation durch komplexe Kryptowährungs-Vorschriften und Sicherstellung der Einhaltung entwickelnder Gesetze."
                },
                {
                  icon: CheckCircle,
                  title: "Asset-Verfolgung",
                  description: "Fortschrittliche Blockchain-Analyse zur Verfolgung und Identifizierung der Bewegung gestohlener digitaler Vermögenswerte."
                },
                {
                  icon: Phone,
                  title: "Rechtsberatung",
                  description: "Expertenberatung zu Kryptowährungs-Investitionen, Transaktionen und Sicherheitsmaßnahmen."
                }
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-gradient-to-br from-card to-card/80 border-0 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative z-10 pb-4">
                    <div className="bg-accent/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-muted-foreground leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-br from-secondary/20 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-40 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Clock className="h-4 w-4 mr-2" />
                Unser Rückgewinnungs-Prozess
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Bewährte 5-Schritte-Methodik für maximalen Erfolg
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Systematischer Ansatz mit nachweislich hoher Erfolgsquote bei der Rückgewinnung
              </p>
            </div>
            <div className="grid lg:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Fallbewertung", description: "Kostenlose Beratung zur Bewertung Ihres Falls und der Rückgewinnungsaussichten" },
                { step: "02", title: "Beweissammlung", description: "Sammlung aller Transaktionsaufzeichnungen, Kommunikation und relevanten Dokumentation" },
                { step: "03", title: "Blockchain-Analyse", description: "Fortschrittliche forensische Verfolgung gestohlener Gelder über mehrere Netzwerke" },
                { step: "04", title: "Rechtliche Schritte", description: "Einreichung von Klagen, Erwirkung von einstweiligen Verfügungen und Einfrieren identifizierter Vermögenswerte" },
                { step: "05", title: "Asset-Rückgewinnung", description: "Ausführung der Rückgewinnung durch Vergleiche oder gerichtlich angeordnete Wiedergutmachung" }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent transform translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="h-4 w-4 mr-2" />
                Unser Experten-Team
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Spezialisiertes Rechtsteam
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Fachexperten für Kryptowährungsrecht und digitale Vermögenswerte-Rückgewinnung
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
              {[
                {
                  name: "Dr. Markus Weber",
                  title: "Geschäftsführender Partner",
                  credentials: "LL.M. Finanzrecht, Fachanwalt IT-Recht",
                  experience: "18+ Jahre Erfahrung in Finanzkriminalität"
                },
                {
                  name: "Sarah Müller",
                  title: "Senior Associate",
                  credentials: "Staatsexamen, Zertifizierte Blockchain-Expertin",
                  experience: "Spezialistin für Krypto-Forensik und Rückgewinnung"
                },
                {
                  name: "Dr. Thomas Schmidt",
                  title: "Technischer Direktor",
                  credentials: "Dr. Informatik, CISSP, CEH",
                  experience: "Ehemaliger BKA Cybercrime-Ermittler"
                }
              ].map((member, index) => (
                <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/90 border-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative z-10 pb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/20 rounded-full flex items-center justify-center">
                        <Users className="h-10 w-10 text-accent" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">{member.name}</CardTitle>
                    <CardDescription className="text-accent font-semibold text-lg">{member.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-3">
                    <p className="text-muted-foreground font-medium">{member.credentials}</p>
                    <p className="text-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Lassen Sie Krypto-Betrüger nicht gewinnen
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto">
              Jeden Tag, den Sie warten, wird es schwieriger, Ihre gestohlenen Kryptowährungen zurückzuholen. 
              Starten Sie noch heute Ihren Rückgewinnungsprozess mit einer kostenlosen Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105">
                Kostenlose Beratung erhalten
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 text-xl font-semibold rounded-xl transition-all duration-300">
                Jetzt anrufen: +49 30 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-secondary/20 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Phone className="h-4 w-4 mr-2" />
                Kontaktieren Sie uns
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Kontaktieren Sie uns noch heute
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bereit, Ihre Krypto-Rückgewinnung zu starten? Kontaktieren Sie uns für eine kostenlose Fallbewertung.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="group text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 border-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 pb-6">
                  <div className="bg-accent/10 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                    <Phone className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">Anrufen</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-3">
                  <p className="text-3xl font-bold text-primary">+49 30 123-4567</p>
                  <p className="text-muted-foreground font-medium">24/7 Notfall-Hotline</p>
                </CardContent>
              </Card>
              <Card className="group text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 border-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 pb-6">
                  <div className="bg-accent/10 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                    <Mail className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">E-Mail</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-3">
                  <p className="text-xl font-semibold text-primary">wiederherstellung@cryptorecht.de</p>
                  <p className="text-muted-foreground font-medium">Sichere Beratung</p>
                </CardContent>
              </Card>
              <Card className="group text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 border-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 pb-6">
                  <div className="bg-accent/10 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                    <MapPin className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">Besuchen Sie uns</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-3">
                  <p className="text-primary font-medium">Potsdamer Platz 1<br />10785 Berlin</p>
                  <p className="text-muted-foreground font-medium">Nur nach Terminvereinbarung</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-accent/20 p-2 rounded-xl mr-3">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <span className="text-2xl font-bold">CryptoRecht</span>
              </div>
              <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-md">
                Führende Anwaltskanzlei für Kryptowährungs-Betrug-Rückgewinnung mit nachweisbaren Ergebnissen in Deutschland.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-accent">Leistungen</h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li className="hover:text-accent transition-colors cursor-pointer">Krypto-Betrug Rückgewinnung</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Zivilrechtsverfahren</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Asset-Verfolgung</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Rechtsberatung</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-accent">Rechtliches</h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li className="hover:text-accent transition-colors cursor-pointer">Über uns</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Fallstudien</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Datenschutz</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Impressum</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 CryptoRecht. Alle Rechte vorbehalten. Rechtsanwaltswerbung.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;