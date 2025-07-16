import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - same as landing page */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ATB</span>
              </div>
              <span className="font-semibold text-lg">ATB.LAW</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#leistungen" className="text-muted-foreground hover:text-primary transition-colors">
                Leistungen
              </a>
              <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">
                Team
              </a>
              <a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <Section className="pt-24 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Krypto Betrugsopfer bekommt 8,69 Bitcoin zurück</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </Section>

      {/* Hero Section */}
      <Section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <Badge variant="secondary">CyberCrime</Badge>
              <Badge variant="secondary">Kryptowährung</Badge>
              <Badge variant="secondary">Betrugsbekämpfung</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Krypto Betrugsopfer bekommt 8,69 Bitcoin zurück
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Ein österreichisches Betrugsopfer erhielt kürzlich 8,69 Bitcoin zurück – ein Wert von rund 800.000 EUR (Stand Juli 2025). Möglich wurde dies durch die Zusammenarbeit zwischen unserer Kanzlei ATB.LAW, den Strafverfolgungsbehörden und dem gezielten Einsatz von Blockchain-Forensik.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
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

      {/* Article Content */}
      <Section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-8 italic border-l-4 border-primary pl-6">
                  Wir berichten über einen Fall, der zeigt, wie effektiver Rechtsschutz im digitalen Raum aussehen kann – und welche juristischen Herausforderungen es zu meistern galt.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Was ist ein PigButchering Scam?</h2>
                <p className="mb-6">
                  Ein Pig Butchering Scam ist eine Form des Anlagebetrugs, bei dem Täter gezielt Vertrauen aufbauen, um Opfer zur Investition großer Geldsummen zu verleiten. Der Begriff stammt aus China und beschreibt das „Mästen" eines Opfers, bevor es „geschlachtet" wird – also alles verliert.
                </p>
                <p className="mb-6">
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

                <h2 className="text-3xl font-bold mt-12 mb-6">Nachverfolgung Kryptowährung – Schlüssel zum Erfolg bei der Rückholung</h2>
                <p className="mb-6">
                  Über Anleitung der Betrüger überwies unser Mandant im Jahr 2022 rd EUR 350.000,00 auf diverse Krypto-Exchanges (Coinbase, Bitpanda, Nexo) um diese dort in Bitcoin zu wechseln und an eine vermeintliche Handelsplattform zu transferieren. Nachdem er trotz mehrfacher Zusicherung die versprochenen Auszahlungen nicht erhielt sondern vielmehr aufgefordert wurde weiteres Geld einzuzahlen wandte sich das Opfer an die auf CyberCrime und Nachverfolgung von Kryptowährungen spezialisierten Rechtsanwälte von ATB.LAW sowie an die Kriminalpolizei.
                </p>
                <p className="mb-8">
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

                <h2 className="text-3xl font-bold mt-12 mb-6">Sicherstellung / Beschlagnahme durch Staatsanwaltschaft</h2>
                <p className="mb-6">
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

                <p className="mb-6">
                  Die Bitcoin des Opfers wurden daraufhin auf ein Wallet des Bundeskriminalamts – Cybercrime Competence Center (C4) übertragen.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Rechtliche Herausforderungen – Warum ist die Beiziehung von auf CyberCrime spezialisierten Anwälten sinnvoll?</h2>
                <p className="mb-6">
                  Der weitere juristische Weg von der Beschlagnahme bis zur Wiedererlangung der Verfügungsmacht über die Bitcoin war steinig und von zahlreichen juristischen Hürden geprägt. Zunächst beabsichtigte die Staatsanwaltschaft, die sichergestellten Bitcoin in Euro umzutauschen. Dies entsprach jedoch nicht dem Wunsch unseres Mandanten.
                </p>
                <p className="mb-6">
                  Hätte die Staatsanwaltschaft die Bitcoin zum Zeitpunkt der Beschlagnahme in EUR gewechselt, hätte das Opfer einen <strong>Verlust von über EUR 100.000,00</strong> erlitten. Durch konsequentes und argumentativ fundiertes Vorgehen konnten wir den Wechsel der beschlagnahmten Bitcoin in EUR gerichtlich verhindern.
                </p>
                <p className="mb-6">
                  Mit Inkrafttreten des Strafprozessrechtsänderungsgesetzes 2024 wurden die gesetzlichen Voraussetzungen geschaffen, um bereits im Ermittlungsverfahren (ohne Ausforschung und Verurteilung des Täters) eine vorzeitige Ausfolgung von beschlagnahmten Kryptowährungen zu ermöglichen. In der Folge stellten wir einen entsprechenden Antrag gemäß der neuen Rechtslage.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Zusammenarbeit mit Behörden: Ein Erfolgsmodell</h2>
                <p className="mb-6">
                  Besonders hervorzuheben ist die konstruktive Kooperation mit dem Landeskriminalamt Tirol, dem Bundeskriminalamt Cybercrime Competence Center (C4) sowie der Staatsanwaltschaft Innsbruck. Durch klare Kommunikation, gut dokumentierte Beweisketten und exakte rechtliche Argumentation wurde ein Ergebnis erzielt, das in dieser Form keineswegs selbstverständlich ist.
                </p>
                <p className="mb-8">
                  Ein möglichst effizient gehaltener Austausch zwischen Opfer, Rechtsanwalt, Polizei und Staatsanwaltschaft ist notwendig um im Kampf gegen die Cyberkriminalität erfolgreich zu sein.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Fazit – Was tun bei Krypto Betrug?</h2>
                <p className="mb-6">
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
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer - same as landing page */}
      <footer className="bg-card text-card-foreground py-12 border-t">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">ATB</span>
                </div>
                <span className="font-semibold text-lg">ATB.LAW</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ihre Experten für CyberCrime und Kryptowährung in Österreich.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Leistungen</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>CyberCrime Anwalt</li>
                <li>Krypto Betrug</li>
                <li>Online Betrug</li>
                <li>Blockchain Forensik</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Kanzlei</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Über uns</li>
                <li>Team</li>
                <li>Karriere</li>
                <li>Blog</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Kontakt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>office@atb.law</li>
                <li>+43 1 39 123 45</li>
                <li>Wien, Österreich</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 ATB.LAW. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;