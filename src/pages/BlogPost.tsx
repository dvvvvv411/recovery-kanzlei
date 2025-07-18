import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const BlogPost = () => {
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
                  <BreadcrumbLink href="/blog" className="text-white/80 hover:text-white">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbPage className="text-white">Krypto Betrugsopfer bekommt 8,69 Bitcoin zurück</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">CyberCrime</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Kryptowährung</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Betrugsbekämpfung</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              Krypto Betrugsopfer bekommt <span className="bg-gradient-primary bg-clip-text text-transparent">8,69 Bitcoin</span> zurück
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Ein österreichisches Betrugsopfer erhielt kürzlich 8,69 Bitcoin zurück – ein Wert von rund 800.000 EUR (Stand Juli 2025).
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>7. Juli 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min Lesezeit</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>ATB.LAW Team</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Article Content - transparent background */}
      <Section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8 italic border-l-4 border-primary pl-6">
                Möglich wurde dies durch die Zusammenarbeit zwischen unserer Kanzlei ATB.LAW, den Strafverfolgungsbehörden und dem gezielten Einsatz von Blockchain-Forensik. Wir berichten über einen Fall, der zeigt, wie effektiver Rechtsschutz im digitalen Raum aussehen kann – und welche juristischen Herausforderungen es zu meistern galt.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Was ist ein PigButchering Scam?</h2>
              <p className="mb-6 text-foreground">
                Ein Pig Butchering Scam ist eine Form des Anlagebetrugs, bei dem Täter gezielt Vertrauen aufbauen, um Opfer zur Investition großer Geldsummen zu verleiten. Der Begriff stammt aus China und beschreibt das „Mästen" eines Opfers, bevor es „geschlachtet" wird – also alles verliert.
              </p>
              <p className="mb-6 text-foreground">
                Die Täter nehmen über Dating-Apps oder soziale Medien Kontakt auf und geben sich als erfolgreiche Investoren aus. Über manipulierte Trading-Apps oder Webseiten täuschen sie hohe Gewinne vor. Das Opfer wird schrittweise zu immer größeren Einzahlungen verleitet. Sobald hohe Summen investiert wurden, werden Auszahlungen blockiert oder mit Gebühren verhindert.
              </p>

              <div className="bg-accent/30 p-6 rounded-lg my-8">
                <h4 className="font-semibold mb-3">Typische Warnzeichen:</h4>
                <ul className="space-y-2">
                  <li>• Unrealistische Renditeversprechen</li>
                  <li>• Emotionale Bindung und Manipulation</li>
                  <li>• Druck zu weiteren Zahlungen</li>
                  <li>• Kommunikation über Messenger wie WhatsApp oder Telegram</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Nachverfolgung Kryptowährung – Schlüssel zum Erfolg bei der Rückholung</h2>
              <p className="mb-6 text-foreground">
                Über Anleitung der Betrüger überwies unser Mandant im Jahr 2022 rd EUR 350.000,00 auf diverse Krypto-Exchanges (Coinbase, Bitpanda, Nexo) um diese dort in Bitcoin zu wechseln und an eine vermeintliche Handelsplattform zu transferieren. Nachdem er trotz mehrfacher Zusicherung die versprochenen Auszahlungen nicht erhielt sondern vielmehr aufgefordert wurde weiteres Geld einzuzahlen wandte sich das Opfer an die auf CyberCrime und Nachverfolgung von Kryptowährungen spezialisierten Rechtsanwälte von ATB.LAW sowie an die Kriminalpolizei.
              </p>
              <p className="mb-8 text-foreground">
                Durch gezielte Nachverfolgung der Kryptowährung auf der Blockchain war es möglich, den Weg der gestohlenen Assets zu rekonstruieren. Mithilfe modernster forensischer Tools und Know-how im Bereich der Blockchainanalyse konnten die BTC von den Wallets des Opfers zu einer Adresse bei der Kryptohandelsbörse Binance nachverfolgt werden.
              </p>

              {/* Bitcoin Tracking Diagram */}
              <div className="my-12">
                <img 
                  src="/lovable-uploads/ab82bf83-5ca8-46b3-83b4-5cb6f9c16646.png"
                  alt="Nachverfolgung Bitcoin - Blockchain-Forensik Diagramm"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  Nachverfolgung Bitcoin: Die Spur der Kryptowährung auf der Blockchain
                </p>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <p className="font-medium text-center">
                  💡 Die Nachverfolgung der Krypto-Assets auf der Blockchain nehmen wir selbst vor – damit sparen wir Zeit und Kosten
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Sicherstellung / Beschlagnahme durch Staatsanwaltschaft</h2>
              <p className="mb-6 text-foreground">
                Auf Grundlage der erfolgten Nachverfolgung der BTC richtete die Kriminalpolizei unmittelbar eine direkte Anfrage an die Kryptohandelsbörse die die inkriminierten Vermögenswerte erhalten hatte und ließ die sich auf dem Konto befindlichen Gelder vorläufig einfrieren. Seitens der Staatsanwaltschaft Innsbruck wurde daraufhin eine sogenannte Sicherstellungsanordnung erlassen und die Beschlagnahme der dem Opfer betrügerisch herausgelockten Bitcoin angeordnet.
              </p>

              {/* Legal Document */}
              <div className="my-12">
                <img 
                  src="/lovable-uploads/c35afcf3-2404-4d36-a3f3-66dee674bbb9.png"
                  alt="Sicherstellungsanordnung der Staatsanwaltschaft Innsbruck"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  Sicherstellungsanordnung der Staatsanwaltschaft Innsbruck über 8,69532127 BTC
                </p>
              </div>

              <p className="mb-6 text-foreground">
                Die Bitcoin des Opfers wurden daraufhin auf ein Wallet des Bundeskriminalamts – Cybercrime Competence Center (C4) übertragen.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Rechtliche Herausforderungen – Warum ist die Beiziehung von auf CyberCrime spezialisierten Anwälten sinnvoll?</h2>
              <p className="mb-6 text-foreground">
                Der weitere juristische Weg von der Beschlagnahme bis zur Wiedererlangung der Verfügungsmacht über die Bitcoin war steinig und von zahlreichen juristischen Hürden geprägt. Zunächst beabsichtigte die Staatsanwaltschaft, die sichergestellten Bitcoin in Euro umzutauschen. Dies entsprach jedoch nicht dem Wunsch unseres Mandanten.
              </p>
              <p className="mb-6 text-foreground">
                Hätte die Staatsanwaltschaft die Bitcoin zum Zeitpunkt der Beschlagnahme in EUR gewechselt, hätte das Opfer einen <strong>Verlust von über EUR 100.000,00</strong> erlitten. Durch konsequentes und argumentativ fundiertes Vorgehen konnten wir den Wechsel der beschlagnahmten Bitcoin in EUR gerichtlich verhindern.
              </p>
              <p className="mb-6 text-foreground">
                Mit Inkrafttreten des Strafprozessrechtsänderungsgesetzes 2024 wurden die gesetzlichen Voraussetzungen geschaffen, um bereits im Ermittlungsverfahren (ohne Ausforschung und Verurteilung des Täters) eine vorzeitige Ausfolgung von beschlagnahmten Kryptowährungen zu ermöglichen. In der Folge stellten wir einen entsprechenden Antrag gemäß der neuen Rechtslage.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Zusammenarbeit mit Behörden: Ein Erfolgsmodell</h2>
              <p className="mb-6 text-foreground">
                Besonders hervorzuheben ist die konstruktive Kooperation mit dem Landeskriminalamt Tirol, dem Bundeskriminalamt Cybercrime Competence Center (C4) sowie der Staatsanwaltschaft Innsbruck. Durch klare Kommunikation, gut dokumentierte Beweisketten und exakte rechtliche Argumentation wurde ein Ergebnis erzielt, das in dieser Form keineswegs selbstverständlich ist.
              </p>
              <p className="mb-8 text-foreground">
                Ein möglichst effizient gehaltener Austausch zwischen Opfer, Rechtsanwalt, Polizei und Staatsanwaltschaft ist notwendig um im Kampf gegen die Cyberkriminalität erfolgreich zu sein.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Fazit – Was tun bei Krypto Betrug?</h2>
              <p className="mb-6 text-foreground">
                Viele Betroffene von Krypto-Betrug geben die Hoffnung zu früh auf. Unser Fall zeigt: Wer rasch handelt, einen spezialisierten CyberCrime Anwalt kontaktiert und auf fundierte Nachverfolgung setzt, hat Chancen auf Rückholung.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Wenn Sie Opfer eines ähnlichen Betrugs geworden sind:</h3>
                <ol className="space-y-3">
                  <li><strong>1.</strong> Dokumentieren Sie alle Transaktionen und Kommunikationsverläufe.</li>
                  <li><strong>2.</strong> Kontaktieren Sie umgehend einen erfahrenen Rechtsanwalt für CyberCrime / Online Betrug.</li>
                  <li><strong>3.</strong> Lassen Sie die Nachverfolgung der Kryptowährung durch Experten durchführen.</li>
                </ol>
              </div>

              <div className="mt-12 p-8 bg-card border rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ihre Experten für CyberCrime & Kryptowährung</h3>
                <p className="mb-4">
                  Als CyberCrime Anwälte mit Spezialisierung auf die Nachverfolgung von Kryptowährungen unterstützen wir Sie umfassend – juristisch fundiert, schnell und effizient.
                </p>
                <p className="text-sm text-muted-foreground">
                  Für weitere Informationen und individuelle Beratung stehen Ihnen <strong>Lukas Riedler</strong> und <strong>Roman Taudes</strong> jederzeit zur Verfügung.
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
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 mb-12">
              
              {/* Company Info & Newsletter */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg">
                    <Scale className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
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
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
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
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0">
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

export default BlogPost;