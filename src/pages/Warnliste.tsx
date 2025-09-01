import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Shield, Phone, Mail, Users, TrendingDown, Eye, FileText, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Warnliste = () => {
  const fraudulentBrokers = [
    { name: "Basic Loans (basicloans.uk)", category: "Unlizenziert", status: "Warnung" },
    { name: "SNUTX", category: "Krypto-Betrug", status: "Bestätigt" },
    { name: "Digital Crypto Market Pro", category: "Krypto-Trading", status: "FCA-Warnung" },
    { name: "Xmfastest Reliable Broker", category: "Trading", status: "Verdacht" },
    { name: "Standard Guarantee Trading Pro", category: "Trading", status: "FCA-Warnung" },
    { name: "Instant Pro Fx", category: "Forex", status: "Warnung" },
    { name: "TWAAO", category: "Krypto-Betrug", status: "Bestätigt" },
    { name: "fake NEWEX (owcup.com)", category: "Fake-Börse", status: "Betrug" },
    { name: "ZRAOX", category: "WhatsApp-Betrug", status: "BaFin-Warnung" },
    { name: "Ukuchuma Ltd.", category: "Trading", status: "Polizei-Warnung" },
    { name: "Pocket Option Fx", category: "Forex", status: "Verdacht" },
  ];

  const whatsappGroups = [
    "Reichtumslicht",
    "E Fidelity Institut und fake Fidelity App",
    "fake WhatsApp Gruppe von Marcel Fratzscher",
    "K2664.Gewinnkompass",
    "E4 – Der Weg zur finanziellen Freiheit",
    "D6VermögensforschungsCommunity",
    "Goldene Hände CC2 WhatsApp Gruppe",
  ];

  const additionalBrokers = [
    "4HEX (4xex.com)",
    "e-secure.io",
    "Jeento Global (jeentoglobal.com)",
    "Tohub Mining (tohub.xyz)",
    "Coinpass Limited Click (coinpasslimited.click)",
    "The TM Stock Well Fund (thetmstockwellfund.com)",
    "Super Star Finance (superstarfinance.co.uk)",
    "QUMAXCOFXS (qumaxcofxs.com)",
    "FIN Anwalt (finanwalt.com)",
    "TinePrime (tprimelimited.com)",
    "SpringFX (spring-fx.com)",
    "Brain Stone FX Ltd. (bsfxl.live)",
  ];

  return (
    <>
      <Helmet>
        <title>Warnliste Anlagebetrug 2025 | Betrügerische Broker melden | Bovensiepen & Partner</title>
        <meta 
          name="description" 
          content="Aktuelle Warnliste 2025 für Anlagebetrug. Prüfen Sie Ihren Broker auf Betrug. Bovensiepen & Partner hilft Betrugsopfern bei der Rückholung verlorener Gelder." 
        />
        <meta name="keywords" content="Anlagebetrug, Warnliste, betrügerische Broker, Krypto-Betrug, Trading-Betrug, Bovensiepen Partner" />
        <link rel="canonical" href="https://yoursite.com/warnliste-anlagebetrug" />
        <meta property="og:title" content="Warnliste Anlagebetrug 2025 | Bovensiepen & Partner" />
        <meta property="og:description" content="Schützen Sie sich vor Anlagebetrug. Aktuelle Warnliste betrügerischer Broker und Trading-Plattformen." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/5 to-background">
        {/* Hero Section */}
        <Section className="pt-24 pb-16 bg-gradient-to-r from-destructive/10 via-background to-destructive/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeader>
              <div className="flex items-center justify-center gap-3 mb-6">
                <AlertTriangle className="h-12 w-12 text-destructive animate-pulse" />
                <SectionTitle className="text-destructive mb-0">
                  Warnliste Anlagebetrug 2025
                </SectionTitle>
              </div>
              <SectionDescription className="text-xl">
                Diese Broker sind aufgefallen! Schützen Sie sich vor Anlagebetrug und prüfen Sie, 
                ob Ihr Anbieter auf unserer Warnliste steht.
              </SectionDescription>
            </SectionHeader>
          </div>
        </Section>

        {/* Introduction */}
        <Section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Warum diese Warnliste wichtig ist
                </h2>
                <p className="text-muted-foreground mb-6">
                  Mit der vorliegenden Warnliste Anlagebetrug sollen Geldanleger gewarnt werden. 
                  Bereits geschädigte Personen können in der Liste prüfen, ob ihr Anbieter aufgeführt wird.
                </p>
                <p className="text-muted-foreground mb-6">
                  Falls Sie Ihren Finanzdienstleister oder Broker hier vorfinden, sollten Sie zeitnah 
                  einen Rechtsanwalt für Anlagebetrug einschalten. Es gilt, schnellstmöglich gegen den 
                  möglichen Anlagebetrug vorzugehen.
                </p>
                <Link to="/kontakt">
                  <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    Jetzt unverbindlich kontaktieren
                  </Button>
                </Link>
              </div>
              <Card className="bg-gradient-glass backdrop-blur-sm border-border-glass shadow-glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Sofort-Hilfe bei Anlagebetrug
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Auf Wunsch können die juristisch notwendigen Maßnahmen eingeleitet werden, 
                    um möglichst Ihr Geld zurück holen zu können.
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">Kostenfreie Erstberatung</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm">Rechtliche Schritte einleiten</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-primary" />
                      <span className="text-sm">Geld zurückholen</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Table of Contents */}
        <Section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Inhaltsverzeichnis</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="hover:shadow-card transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm">Aktuelle Warnliste 2025</h3>
                  <p className="text-xs text-muted-foreground">Betrügerische Broker und Plattformen</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-card transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm">WhatsApp Betrugsgruppen</h3>
                  <p className="text-xs text-muted-foreground">Gefälschte Investment-Gruppen</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-card transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm">Was tun bei Betrug?</h3>
                  <p className="text-xs text-muted-foreground">Rechtliche Schritte und Hilfe</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Main Warning List */}
        <Section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeader>
              <SectionTitle>
                Aktuelle Warnliste Anlagebetrug - Diese Anbieter sind aufgefallen
              </SectionTitle>
              <SectionDescription>
                Aus unserer Beratungspraxis heraus führen wir zum Schutz von Anlegern unsere Warnliste Anlagebetrug!
              </SectionDescription>
            </SectionHeader>

            <div className="grid gap-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Hochriskante Broker und Trading-Plattformen
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-card">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 text-left font-semibold">Anbieter</th>
                      <th className="p-4 text-left font-semibold">Kategorie</th>
                      <th className="p-4 text-left font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fraudulentBrokers.map((broker, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-4 font-medium">{broker.name}</td>
                        <td className="p-4">
                          <Badge variant="secondary" className="text-xs">
                            {broker.category}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Badge 
                            variant={broker.status === "Bestätigt" ? "destructive" : 
                                   broker.status === "Warnung" ? "destructive" : "secondary"} 
                            className="text-xs"
                          >
                            {broker.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>

        {/* WhatsApp Groups Warning */}
        <Section className="py-16 bg-destructive/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeader>
              <SectionTitle className="text-destructive">
                Betrügerische WhatsApp- und Telegram-Gruppen
              </SectionTitle>
              <SectionDescription>
                Diese Messenger-Gruppen führen zu Anlagebetrug und sollten unbedingt gemieden werden.
              </SectionDescription>
            </SectionHeader>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatsappGroups.map((group, index) => (
                <Card key={index} className="border-destructive/20 bg-destructive/5">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-destructive mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm text-destructive mb-1">{group}</h4>
                        <p className="text-xs text-muted-foreground">
                          Finanzbetrug durch vorgespielte Investments
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Additional Brokers */}
        <Section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeader>
              <SectionTitle>
                Weitere Einträge auf der Warnliste
              </SectionTitle>
              <SectionDescription>
                Diese Anbieter stehen ebenfalls unter Verdacht oder wurden von Aufsichtsbehörden gewarnt.
              </SectionDescription>
            </SectionHeader>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalBrokers.map((broker, index) => (
                <Card key={index} className="hover:shadow-card transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Eye className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{broker}</h4>
                        <p className="text-xs text-muted-foreground">
                          Unter Beobachtung - Nicht empfehlenswert
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Case Study */}
        <Section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeader>
              <SectionTitle>
                Echte Fallschilderung einer betrogenen Investorin
              </SectionTitle>
              <SectionDescription>
                Ein Beispiel aus unserer Beratungspraxis zeigt, wie perfide die Betrüger vorgehen.
              </SectionDescription>
            </SectionHeader>

            <Card className="bg-gradient-glass backdrop-blur-sm border-border-glass shadow-glass">
              <CardContent className="p-8">
                <blockquote className="text-muted-foreground italic mb-6 text-lg leading-relaxed">
                  "Ich bin einem Bitcoin-Betrüger auf den Leim gegangen. Insgesamt habe ich 5.000 Euro verloren. 
                  1.000 Euro habe ich in Bitcoin investiert und einen angeblichen Gewinn von 38.000 Euro gemacht. 
                  Um diese ausgezahlt zu bekommen, sollte ich eine Provision von 4.000 Euro überweisen..."
                </blockquote>
                <div className="flex items-center gap-4">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-semibold">Anonymisierte Zuschrift</p>
                    <p className="text-sm text-muted-foreground">Betrugsopfer aus unserer Beratungspraxis</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">
                Wie ging dieser Fall aus?
              </h4>
              <p className="text-sm text-muted-foreground">
                Dieser Investorin konnte über Bovensiepen & Partner zeitnah weitergeholfen werden. 
                Es wurden umgehend die erforderlichen rechtlichen Schritte eingeleitet.
              </p>
            </div>
          </div>
        </Section>

        {/* What to do section */}
        <Section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeader>
              <SectionTitle>
                Was tun bei Anlagebetrug?
              </SectionTitle>
              <SectionDescription>
                Schnelles Handeln ist bei Anlagebetrug entscheidend. So können Sie sich schützen und Ihr Geld zurückholen.
              </SectionDescription>
            </SectionHeader>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-glass backdrop-blur-sm border-border-glass shadow-glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Sofortmaßnahmen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Kontakt zum Anbieter sofort abbrechen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Alle Kommunikation und Belege sichern</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Bank über möglichen Betrug informieren</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Spezialisierte Rechtsberatung einholen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-glass backdrop-blur-sm border-border-glass shadow-glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Rechtliche Schritte
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Strafanzeige bei Polizei erstatten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Zivilrechtliche Ansprüche geltend machen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Identitätsdiebstahl vorbeugen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Vermögensrückholung einleiten</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeader>
              <SectionTitle>
                Kostenfreie Ersteinschätzung zum Anlagebetrug einholen
              </SectionTitle>
              <SectionDescription>
                Falls Sie bereits Betrugsopfer geworden sind oder ein ungutes Gefühl bezüglich Ihres 
                Finanzdienstleisters haben, können Sie sich gern unverbindlich melden.
              </SectionDescription>
            </SectionHeader>

            <div className="bg-card rounded-lg p-8 shadow-card">
              <h3 className="text-lg font-semibold mb-4">Diese Fragen helfen uns bei der Ersteinschätzung:</h3>
              <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Bei welchem Broker oder Trading-Plattform haben Sie investiert?</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Wurden Kryptowährungen verwendet?</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Wird eine Auszahlung verweigert?</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Haben Sie die Warnliste diesbezüglich geprüft?</span>
                </li>
              </ul>

              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Zeitnah erhalten Sie eine kostenfreie Ersteinschätzung zu Ihrem konkreten Einzelfall.
                </p>
                <Link to="/kontakt">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    <Mail className="h-5 w-5 mr-2" />
                    Jetzt unverbindlich kontaktieren
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Warnliste;