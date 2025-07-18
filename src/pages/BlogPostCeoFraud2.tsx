import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Scale, Mail, ChevronRight, MapPin, Phone, AlertTriangle, Shield, Award, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const BlogPostCeoFraud2 = () => {
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
                <BreadcrumbPage className="text-white">CEO-Fraud und Überweisungsbetrug</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">CyberCrime</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">CEO-Fraud</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Überweisungsbetrug</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(214 100% 60% / 0.8)' }}>
              CEO-Fraud und <span className="bg-gradient-primary bg-clip-text text-transparent">Überweisungsbetrug</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(214 100% 60% / 0.4)' }}>
              Was tun bei Falschüberweisung nach gefälschten E-Mails?
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>16. Juli 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min Lesezeit</span>
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
                Ein Klick, eine kurze Unachtsamkeit und eine erhebliche Geldsumme wurde auf ein Konto überwiesen, das sich später als Empfängerkonto von Betrügern anstatt des eigenen Geschäftspartners hausstellt. In vielen Fällen liegt ein gezielter Angriff durch CEO-Fraud vor – eine professionelle Betrugsmasche, bei der sich Täter als Entscheidungsträger oder Geschäftspartner ausgeben und Mitarbeiter (oft der Buchhaltung) durch Vorspielen falscher Tatsachen zur Überweisung bewegen.
              </p>

              <p className="mb-8 text-foreground">
                Als spezialisierte Rechtsanwaltskanzlei im Bereich Cybercrime begleiten wir regelmäßig Mandanten, die Opfer solcher Täuschungshandlungen wurden.
              </p>

              <p className="mb-8 text-foreground">
                Durch schnelles, rechtlich fundiertes Handeln und enger Zusammenarbeit mit den Strafverfolgungsbehörden ist es möglich die Sicherstellung bzw. Beschlagnahme der überwiesenen Gelder zu erwirken, bevor diese von den Tätern weiter transferiert werden und damit der Zugriff durch die Strafverfolgungsbehörden erheblich erschwert wird.
              </p>

              {/* CEO Fraud Illustration */}
              <div className="my-12">
                <img 
                  src="/lovable-uploads/e6fcfe46-5300-4b17-bafe-fda583555ddc.png"
                  alt="CEO-Fraud und Überweisungsbetrug - Illustration"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-4 italic">
                  CEO-Fraud: Professionelle Betrugsmasche mit gefälschten E-Mails
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Was ist CEO-Fraud?</h2>
              <p className="mb-6 text-foreground">
                Beim CEO-Fraud handelt es sich um eine Form des Social Engineering: Die Täter geben sich mittels gefälschter, täuschend echt wirkender E-Mails als Geschäftsführer, leitende Mitarbeitende oder externe Geschäftspartner aus.
              </p>
              <p className="mb-8 text-foreground">
                Unter Ausnutzung interner Informationen und mit hohem psychologischem Druck werden Mitarbeiter dazu gebracht, (Sofort-)Überweisungen auf (meist) ausländische Bankkonten zu tätigen – häufig unter dem Hinweis auf Diskretion oder zeitkritische Transaktionen.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Erste Schritte nach einer Falschüberweisung</h2>
              <div className="bg-accent/30 p-6 rounded-lg my-8">
                <ol className="space-y-3">
                  <li className="text-foreground"><strong>1.</strong> Kontaktieren Sie umgehend Ihre Bank, um – falls möglich – die Transaktion zu stoppen oder rückgängig zu machen.</li>
                  <li className="text-foreground"><strong>2.</strong> Sichern Sie alle relevanten Kommunikationsverläufe, insbesondere E-Mails, Anhänge und Zahlungsanweisungen.</li>
                  <li className="text-foreground"><strong>3.</strong> Nehmen Sie rechtlichen Beistand in Anspruch, um gezielt und ohne Zeitverlust Anzeige zu erstatten.</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Warum fundierter rechtlicher Beistand entscheidend ist</h2>
              <p className="mb-6 text-foreground">
                In der Praxis zeigt sich: Eine Anzeige allein bei der örtlichen Polizeiinspektion führt nicht zwangsläufig zu raschen und effizienten Ermittlungshandlungen. Gerade bei Überweisungsbetrug / CEO-Fraud ist es essenziell, dass die Ermittlungen von den zuständigen Spezialisten durchgeführt werden und keine Zeit verloren geht.
              </p>

              <p className="mb-6 text-foreground">Als erfahrene Kanzlei können wir</p>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <ul className="space-y-3">
                  <li className="text-foreground">• den Sachverhalt rechtlich korrekt einordnen</li>
                  <li className="text-foreground">• die Anzeigeerstattung professionell abwickeln sowie die zuständigen Spezialisten der Kriminalpolizei in Kenntnis setzen</li>
                  <li className="text-foreground">• notwendige Ermittlungsmaßnahmen beantragen und unmittelbare Anordnungen von Sicherstellungen und Beschlagnahmen erwirken</li>
                  <li className="text-foreground">• Geldwäscheverdachtsmeldungen bei den Empfängerbanken erstatten und dadurch die Verfügungsgewalt über die Gelder faktisch einschränken</li>
                  <li className="text-foreground">• Haftpflichtversicherungsmeldung zur Erfüllung der versicherungsrechtlichen Obliegenheitspflichten erstatten</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Fazit</h2>
              <p className="mb-6 text-foreground">
                Bei CEO-Fraud und vergleichbaren Formen des Überweisungsbetrugs handelt es sich um professionell geplante Straftaten, die schnelle und gezielte Gegenmaßnahmen erfordern. Unsere Kanzlei verfügt über die nötige Erfahrung, die rechtliche Expertise und die notwendigen Kontakte, damit ihn Ihrem Fall die richtigen Schritte gesetzt werden und Sie eine Chance auf Rückführung der herausgelockten Gelder haben.
              </p>
              <p className="mb-8 text-foreground">
                Neben der akuten Soforthilfe stehen wir Ihnen auch zu Fragen der zivilrechtlichen Haftung und/oder interner Verantwortlichkeiten zur Verfügung. Gerade Fragen zur Geschäftsführerhaftung oder internen Kontrollpflichten spielen im Nachgang häufig eine zentrale Rolle.
              </p>

              <div className="mt-12 p-8 bg-card border rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ihre Experten für CyberCrime & Überweisungsbetrug</h3>
                <p className="mb-4">
                  Bei CEO-Fraud und Überweisungsbetrug ist schnelles Handeln entscheidend. Als spezialisierte CyberCrime Anwälte unterstützen wir Sie umfassend – juristisch fundiert, schnell und effizient.
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
                      <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                        <ChevronRight className="h-3 w-3 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-white mb-6 text-lg">Kontakt</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Mariahilfer Straße 123<br />
                        1060 Wien, Österreich
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <a href="tel:+4313912345" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                      +43 1 391 23 45
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <a href="mailto:office@cryptolaw.at" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                      office@cryptolaw.at
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-white mb-3 text-sm">Öffnungszeiten</h4>
                  <div className="text-xs text-gray-400 space-y-1">
                    <div className="flex justify-between">
                      <span>Mo - Fr:</span>
                      <span>08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sa:</span>
                      <span>09:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>So:</span>
                      <span>Geschlossen</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources & Social */}
              <div>
                <h3 className="font-semibold text-white mb-6 text-lg">Ressourcen</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "FAQ",
                    "Rechtsblog",
                    "Fallstudien",
                    "Downloads",
                    "Termine",
                    "Impressum",
                    "Datenschutz"
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group text-sm">
                        <ChevronRight className="h-3 w-3 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Social Media */}
                <div>
                  <h4 className="font-semibold text-white mb-4 text-sm">Folgen Sie uns</h4>
                  <div className="flex space-x-3">
                    {[
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Twitter, href: "#", label: "Twitter" },
                      { icon: Facebook, href: "#", label: "Facebook" },
                      { icon: Youtube, href: "#", label: "YouTube" }
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        className="p-2 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-200 group"
                        aria-label={label}
                      >
                        <Icon className="h-4 w-4 text-gray-400 group-hover:text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Awards & Certifications */}
            <div className="border-t border-slate-700 pt-8 mb-8">
              <h3 className="font-semibold text-white mb-6 text-center">Auszeichnungen & Zertifizierungen</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-yellow-400" />
                  <span className="text-sm text-gray-400">Beste Krypto-Anwaltskanzlei 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-400" />
                  <span className="text-sm text-gray-400">ISO 27001 Zertifiziert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Scale className="h-6 w-6 text-green-400" />
                  <span className="text-sm text-gray-400">Rechtsanwaltskammer Wien</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2024 CryptoLaw Rechtsanwaltskanzlei. Alle Rechte vorbehalten.
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Datenschutz
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Impressum
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  AGB
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Cookie-Einstellungen
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostCeoFraud2;