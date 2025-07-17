import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock 
} from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostKreditgebuehr = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-primary">
              ATB Legal
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Über uns
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Leistungen
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/a381f9f2-d3de-40c4-abcc-45428867969e.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <Breadcrumb className="justify-center mb-6">
              <BreadcrumbList className="text-white/80">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="hover:text-white">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="#" className="hover:text-white">Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">OGH Kreditgebühr</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Verbraucherschutz
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                OGH-Urteil
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Kreditgebühren
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Kreditbearbeitungsgebühren unzulässig: OGH-Urteil ermöglicht Rückforderung
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              In welchen Fällen Sie die bereits bezahlte Bearbeitungsgebühren zurückfordern können
            </p>
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
                In einem richtungsweisenden Urteil hat der Oberste Gerichtshof (OGH) entschieden, dass bestimmte Kreditbearbeitungsgebühren unzulässig sind. Damit wurde ein deutliches Signal für den Verbraucherschutz gesetzt – und für viele Kreditnehmer:innen die Tür zur Rückforderung bereits bezahlter Gebühren geöffnet.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-primary mb-3">Bearbeitungsgebühr zurückholen</h3>
                <p className="text-muted-foreground">
                  Prüfen Sie jetzt kostenlos, ob Sie Anspruch auf Rückforderung haben.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-foreground">Der Anlassfall: Intransparente Klauseln im Kreditvertrag</h2>
              
              <p className="mb-6 leading-relaxed">
                Im Mittelpunkt des OGH-Urteils stand eine Klausel der WSK Bank, in der neben einer Bearbeitungsgebühr von 4 % auch zusätzliche Entgelte wie Erhebungsspesen, Überweisungsspesen sowie Druck- und Portokosten vorgesehen waren. Diese Beträge wurden dem Kreditkonto angelastet oder vom Auszahlungsbetrag abgezogen.
              </p>

              <p className="mb-8 leading-relaxed">
                Der OGH stellte klar: Eine derart gebündelte Gebührengestaltung sei intransparent. Die Bank verrechne für Leistungen, die im Rahmen der Kreditvergabe ohnehin zu ihren Aufgaben gehören – und das mehrfach. Aus Sicht des Gerichts benachteiligt eine solche Regelung Kreditnehmer:innen unangemessen.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">Was bedeutet das für Konsument:innen?</h2>
              
              <p className="mb-6 leading-relaxed">
                Viele Kreditverträge enthalten vergleichbare Formulierungen oder Klauseln. Besonders betroffen sind Verträge, in denen pauschale Bearbeitungsgebühren verlangt wurden, etwa in Form eines Prozentsatzes der Kreditsumme oder eines pauschalen Entgelts für Kreditbearbeitung und Vertragsabschluss.
              </p>

              <p className="mb-8 leading-relaxed">
                Für Konsument:innen eröffnet sich nun die Möglichkeit, diese Entgelte prüfen zu lassen. Bei unzulässigen Klauseln können bereits bezahlte Beträge zurückgefordert werden – selbst bei bereits getilgten Krediten. Denn die in der Regel mehrere Tausend Euro betragenden – Ansprüche verjähren erst 30 Jahre ab Zahlung und sind mit jährlich vier Prozent zu verzinsen.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">Worauf sollten Kreditnehmer:innen achten?</h2>
              
              <p className="mb-4 leading-relaxed">
                Prüfen Sie Ihren Kreditvertrag insbesondere auf folgende Begriffe:
              </p>

              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>„Bearbeitungsgebühr" oder „Bearbeitungsentgelt"</li>
                <li>„Vertragsabschlussgebühr" oder „Kreditspesen"</li>
                <li>Einmalige Spesen für Erhebung, Auszahlung oder Verwaltung</li>
                <li>Drucksorten- und Portokosten</li>
                <li>Schätzgebühr</li>
                <li>Gebühr für Grundbuchgesuch und Grundbuchauszug</li>
              </ul>

              <p className="mb-8 leading-relaxed">
                Solche Klauseln können rechtswidrig sein, wenn sie nicht klar nachvollziehbar sind oder doppelt für dieselbe Leistung verrechnet wird.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-foreground">Fazit: Prüfung lohnt sich</h2>
              
              <p className="mb-6 leading-relaxed">
                Das OGH-Urteil schafft Klarheit und stärkt die Rechte von Kreditnehmer:innen. Wer in den letzten Jahren einen Kreditvertrag abgeschlossen hat, sollte diesen nun sorgfältig prüfen (lassen). Wir übernehmen die Prüfung kostenlos und unverbindlich für Sie.
              </p>

              <p className="mb-8 leading-relaxed">
                Für weitere Informationen und eine Ersteinschätzung stehen Anela Blöch und Roman Taudes jederzeit unter office@atb.law bzw. telefonisch unter 01 39 12345 zur Verfügung.
              </p>
            </article>
          </div>
        </div>
      </Section>

      {/* Contact CTA Section */}
      <Section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Kostenlose Erstberatung</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Lassen Sie Ihren Fall von unseren Experten prüfen. Wir beraten Sie gerne und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Mail className="mr-2 h-5 w-5" />
                E-Mail senden
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-muted/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">ATB Legal</h3>
                <p className="text-muted-foreground">
                  Ihre Experten für Rechtsdurchsetzung und Schadenersatz. Wir kämpfen für Ihre Rechte.
                </p>
                <div className="flex space-x-4">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <h4 className="font-semibold">Newsletter</h4>
                <p className="text-sm text-muted-foreground">
                  Bleiben Sie über aktuelle Rechtsentwicklungen informiert.
                </p>
                <div className="flex flex-col space-y-2">
                  <Input 
                    type="email" 
                    placeholder="Ihre E-Mail-Adresse" 
                    className="bg-background/50 border-border/50"
                  />
                  <Button variant="default" size="sm">
                    Anmelden
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Legal Services */}
              <div className="space-y-4">
                <h4 className="font-semibold">Rechtsgebiete</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Krypto Recovery
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Betrugsaufklärung
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Verbraucherschutz
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Schadenersatz
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Zivilrecht
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h4 className="font-semibold">Kontakt</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">ATB Legal</p>
                      <p className="text-muted-foreground">
                        Mariahilfer Straße 123<br />
                        1060 Wien, Österreich
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">+43 1 39 12345</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">office@atb.law</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Mo-Fr: 09:00-18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="opacity-20" />
          
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © 2024 ATB Legal. Alle Rechte vorbehalten.
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Datenschutz
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  AGB
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie-Einstellungen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostKreditgebuehr;