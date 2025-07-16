import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Scale } from "lucide-react";

const BlogPostCeoFraud = () => {
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

      {/* Footer - same as landing page */}
      <footer className="bg-card text-card-foreground py-12 border-t">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">
                  Crypto<span className="bg-gradient-primary bg-clip-text text-transparent">Law</span>
                </span>
              </div>
              <p className="text-muted-foreground">
                Ihre Experten für CyberCrime, Kryptowährungsrecht und Online-Betrug. Schnell, kompetent und erfolgsorientiert.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Rechtsbereiche</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>CyberCrime & Online-Betrug</li>
                <li>Kryptowährungsrecht</li>
                <li>Blockchain-Forensik</li>
                <li>CEO-Fraud & Phishing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>office@atb.law</li>
                <li>+43 1 39 123 45</li>
                <li>Wien, Österreich</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Impressum</li>
                <li>Datenschutz</li>
                <li>AGB</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 ATB.LAW. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostCeoFraud;