import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Shield, Eye, Phone, Mail, ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Warnliste = () => {
  const fraudulentBrokers = [
    {
      name: "Basic Loans",
      website: "basicloans.uk",
      category: "Unlizenziert",
      description: "Anscheinend ist dieser Anbieter ohne die erforderliche Zulassung tätig. Daher Eintrag auf der Anlagebetrug Warnliste. Nicht einzahlen."
    },
    {
      name: "SNUTX",
      website: "snutx.com",
      category: "App Betrug",
      description: "Desaströse Erfahrungen mit der App und der Börse. Eindeutige Betrugsmasche, bei der Sie abgezockt werden."
    },
    {
      name: "Digital Crypto Market Pro",
      website: "digitalcryptompro.com",
      category: "FCA Warnung",
      description: "Erfahrungen könnten zunächst positiv sein – aber wie geht die Sache aus? Die britische FCA ist bereits aktiv geworden."
    },
    {
      name: "ZRAOX",
      website: "zraox.com",
      category: "BaFin Warnung",
      description: "Offizielle Warnmeldung der BaFin liegt vor. Anscheinend Anlagebetrug über WhatsApp Gruppenchat. Keinesfalls einzahlen oder den Chatgruppen vertrauen!"
    },
    {
      name: "TWAAO",
      website: "twaao.com",
      category: "Fake App",
      description: "Erfahrungen sehr schlecht. Keine Auszahlung. Völlig unseriös. Die App und Börse ist ein kompletter Fake."
    },
    {
      name: "Okwex",
      website: "okwex.com",
      category: "Totalverlust",
      description: "Wohlverdienter Eintrag auf unserer Anlagebetrug Warnliste. Übelste Erfahrungen liegen uns vor. Keinesfalls einzahlen!"
    },
    {
      name: "Super Star Finance",
      website: "superstarfinance.co.uk",
      category: "Dubios",
      description: "Keine Empfehlung. Womöglich wird Ihr Investment eingesackt und es kommt zu keiner Auszahlung. Es könnte sich um einen waschechten Betrug handeln."
    },
    {
      name: "QUMAXCOFXS",
      website: "qumaxcofxs.com",
      category: "FCA Warnung",
      description: "FCA hat diese Website auf ihre Warnliste verfrachtet. Möglicher Anlagebetrug. Lieber fernbleiben!"
    },
    {
      name: "FIN Anwalt",
      website: "finanwalt.com",
      category: "Identitätsdiebstahl",
      description: "Auch hier eine gefälschte Kanzlei. Es gibt diesen \"Rechtsanwalt Philipp Angelo\" nicht. Negative Erfahrungen liegen vor. Rechtsanwaltskammer wurde informiert."
    },
    {
      name: "TinePrime",
      website: "tprimelimited.com",
      category: "Keine Auszahlung",
      description: "Hier warten Anlegerinnen und Anleger vergeblich auf ihre Auszahlungen."
    },
    {
      name: "SpringFX",
      website: "spring-fx.com",
      category: "Dubios",
      description: "Eintrag auf der Anlagebetrug Warnliste, da hier Unstimmigkeiten festgestellt worden sind. Ihr Kapital ist dort in Gefahr."
    },
    {
      name: "Brain Stone FX Ltd.",
      website: "bsfxl.live",
      category: "Identitätsdiebstahl",
      description: "Hier wird im Wege eines Identitätsdiebstahls die Firmendaten eines echten Unternehmens zweckentfremdet. Nicht darauf eingehen. Erfahrungen dürften verheerend werden."
    },
    {
      name: "COZ FX",
      website: "mycozfx.com",
      category: "FCA Warnung",
      description: "Die englische FCA hat eine Warnung veröffentlicht und diese Website auf ihre eigene Warnliste gesetzt. Somit besteht die Möglichkeit, dass hier ein Anlagebetrug begangen wird."
    },
    {
      name: "World Pay Bank",
      website: "worldpaybank.icu",
      category: "Unlizenziert",
      description: "Anscheinend werden Investoren diverse Angebote gemacht – aber die rechtlichen Bestimmungen sind nicht eingehalten worden. Vielleicht kommt die Auszahlung, vielleicht nicht. Risiko lieber vermeiden!"
    },
    {
      name: "Mineo Trading FX",
      website: "mineotradingfx.com",
      category: "Behördliche Warnung",
      description: "Unklar, wie hier die Erfahrungen sind. Es könnte ein Betrug sein. Stand jetzt finden sich lediglich Hinweise darauf, dass behördlicherseits gewarnt wird, Investments dort zu tätigen."
    },
    {
      name: "FXGrowth",
      website: "fxgrowth.online",
      category: "Dubios",
      description: "Dubiose Plattform, die hiermit auf die Warnliste Anlagebetrug gesetzt wird. Anscheinend gibt es bereits negative Erfahrungen."
    },
    {
      name: "Ant Contract",
      website: "antcoins.cc",
      category: "Krypto-Betrug",
      description: "Vieles deutet auf einen Betrug mit Kryptowährungen hin."
    },
    {
      name: "Coin Fx Earners",
      website: "coin-fxearners.com",
      category: "Krypto-Betrug",
      description: "Kryptowährungen stehen hier im Fokus. Ob die Auszahlung erfolgt, ist jedoch nicht belegt. Aktuell besser kein Geschäft dort tätigen."
    },
    {
      name: "FX Finance Traders",
      website: "fx-financetraders.com",
      category: "Behördliche Warnung",
      description: "Hier gibt es die unschöne Erwähnung in einer behördlichen Warnliste für Anlagebetrug. Daher keine Empfehlung."
    },
    {
      name: "Crypto Limited",
      website: "cryptolimited.online",
      category: "FCA Warnung",
      description: "Von Seiten der britischen Finanzaufsicht wird dieser Anbieter kritisiert. Womöglich Betrug mit Kryptowährungen. Konkrete Erfahrungen bisher nicht vorliegend."
    },
    {
      name: "TMXB",
      website: "9bxz.com",
      category: "Dubios",
      description: "Dubiose Plattform, die Gewinne einzusacken scheint. Fernhalten und sich nicht \"hereinreden\" lassen!"
    },
    {
      name: "BCCN",
      website: "bcc.fun",
      category: "Dubios",
      description: "Vermutlich Anlagebetrug durch betrügerische Broker und hübsch gemachter Internetpräsenz."
    },
    {
      name: "xTuucu",
      website: "xtuucu.com",
      category: "Totalverlust",
      description: "Keine Empfehlung. Ein Anleger wurde hier geschädigt."
    },
    {
      name: "Spark Paradise Bank",
      website: "sparkparadisebank.com",
      category: "Dubios",
      description: "Ob es sich hierbei wirklich um eine seriöse Bank handelt, ist nicht gesagt. Denn es gibt Anzeichen, die auf ein unseriöses Geschäftsgebaren hindeuten."
    },
    {
      name: "Kingly Fx Trades",
      website: "kinglyfxtrades.com",
      category: "Behördliche Warnung",
      description: "Von einer Finanzaufsichtsbehörde gibt es einen Eintrag auf der Warnliste Anlagebetrug. Somit hochverdächtig. Keinesfalls dort einzahlen."
    },
    {
      name: "Unique Fx Trades",
      website: "uniquefxtrades.net",
      category: "FCA Warnung",
      description: "Die FCA kritisiert diese Website. Erfahrungen liegen uns noch nicht vor. Ob die Auszahlung kommt, ist nicht abzuschätzen. Besser nicht ausprobieren!"
    },
    {
      name: "Capizal Trade",
      website: "capizaltrade.com",
      category: "Dubios",
      description: "Nicht gesichert, ob dies ein seriöser Anbieter ist. Es gibt erste Hinweise darauf, dass etwas gehörig nicht stimmt. Daher Eintrag auf der Anlagebetrug Warnliste."
    },
    {
      name: "Lamatrade Investments Ltd.",
      website: "lamatrade.com",
      category: "Unlizenziert",
      description: "Die FCA teilt mit, dass diese Website ohne die erforderliche Zulassung tätig ist. Seriös ist das also nicht."
    },
    {
      name: "Fx Million Biz",
      website: "fxmillion.biz",
      category: "Dubios",
      description: "Diese Website wird von den Verantwortlichen hinter Lamatrade Investments Ltd. verwendet – was keinen großen Sinne ergibt, aber umso wachsamer machen sollte. Normal ist das sicher nicht!"
    },
    {
      name: "InstantGrow",
      website: "instantgrow.cc",
      category: "Dubios",
      description: "Anscheinend liegen schlechte Erfahrungen vor. Nehmen Sie Abstand von einer Einzahlung, da unklar ist, ob eine Auszahlung erfolgen würde."
    },
    {
      name: "Kingsway Commercial Bank",
      website: "kingswaycommercialbank.com",
      category: "Dubios",
      description: "Möglicher Anlagebetrug, daher Eintrag auf unserer Warnliste. Ob das eine echte Bank ist, dürfte mehr als fraglich sein."
    },
    {
      name: "Vertex Finworth",
      website: "vertexfinworth.com",
      category: "FCA Warnung",
      description: "Englische Finanzaufsicht hat diesen Anbieter unter kritischer Beobachtung. Keine Empfehlung."
    },
    {
      name: "Infinite Crypto",
      website: "infinitecryptoltd.com",
      category: "Krypto-Betrug",
      description: "Eventuell Anlagebetrug mit Kryptowährungen wie Bitcoin. Warnmeldung der FCA unbedingt ernst nehmen."
    },
    {
      name: "OkCoin-PM",
      website: "okcoin-pm.com",
      category: "Krypto-Betrug",
      description: "Anscheinend zwielichtige Plattform, die Kryptowährungen abzockt. Fern halten!"
    },
    {
      name: "City Finances",
      website: "city-finance.co.uk",
      category: "FCA Warnung",
      description: "Erfahrungen bisher noch ausstehend. Doch die britische Finanzaufsichtsbehörde warnt."
    },
    {
      name: "SpringWellFX",
      website: "springwellfx.com",
      category: "Behördliche Warnung",
      description: "Behördliche Kritik liegt vor. Somit Eintrag auf der Anlagebetrug Warnliste. Ihre Auszahlung ist dort in Gefahr. Lieber meiden!"
    },
    {
      name: "Ethereal Fx Pro",
      website: "etherealfxpro.com",
      category: "Dubios",
      description: "Auffälligkeiten festgestellt. Wie die Erfahrungen sind, wird sich noch zeigen müssen. Aber aktuell ist das Risiko unserer Ansicht nach zu groß."
    },
    {
      name: "Smart Coin FX",
      website: "smartcoinfx.com",
      category: "FCA Warnung",
      description: "FCA Warnmeldung wurde veröffentlicht. Es könnte ein Betrug mit Kryptowährungen sein. Wer dort investiert, spielt mit dem Feuer."
    },
    {
      name: "Assets PNC",
      website: "assetspnc.com",
      category: "Keine Auszahlung",
      description: "Übler Anbieter. Kein Geld wird ausgezahlt."
    },
    {
      name: "Stone X",
      website: "pc.stonexly.cc",
      category: "Dubios",
      description: "Keine vertrauenswürdige Handelsplattform."
    },
    {
      name: "Octa Fx Elite Trade",
      website: "octafxelitetrade.com",
      category: "Dubios",
      description: "Womöglich ein unseriöser Anbieter. Noch keine Erfahrungen vorliegend. Ob die Auszahlung gewährt wird, steht in den Sternen."
    },
    {
      name: "Krypto Reichtum",
      website: "krypto-reichtum.de",
      category: "Krypto-Betrug",
      description: "Vermutung auf Anlagebetrug mit Kryptowährungen wie Bitcoin. Daher Eintrag auf der vorliegenden Warnliste."
    },
    {
      name: "jpmgroup.io",
      website: "jpmgroup.io",
      category: "Identitätsdiebstahl",
      description: "Möglicher Identitätsdiebstahl zu Lasten eines echten, seriösen Finanzunternehmens. Ferner Erwähnung auf der Warnliste \"Watchlist Internet\" aus Österreich."
    },
    {
      name: "BMB Green",
      website: "bmbgreen.com",
      category: "Totalverlust",
      description: "Übler Anlagebetrug durch negative Erfahrungen belegt. Wohlverdienter Eintrag auf meiner Warnliste."
    },
    {
      name: "FX Genius",
      website: "",
      category: "Behördliche Warnung",
      description: "Behördliche Meldung aus UK liegt zu dieser Plattform vor. Hohe Gefahr, dass es in einem Anlagebetrug endet."
    },
    {
      name: "Profit Crunch",
      website: "profit-crunch.com",
      category: "Dubios",
      description: "Negative Erfahrungen wurden von betroffenen Anlegerinnen und Anlegern auf Trustpilot berichtet. Keine Empfehlung."
    }
  ];

  const chatGroups = [
    {
      name: "Reichtumslicht",
      platform: "WhatsApp",
      description: "Dubioser Gruppenchat auf WhatsApp, der zum Anlagebetrug führt. Nicht mitmachen!"
    },
    {
      name: "E Fidelity Institut",
      platform: "WhatsApp",
      description: "Das ist nicht die echte Onlinepräsenz von Fidelity, und die angebliche Fidelity App in der WhatsApp-Gruppe ist eine Fälschung."
    },
    {
      name: "fake Marcel Fratzscher Gruppe",
      platform: "WhatsApp",
      description: "Hier sprechen Sie nicht mit dem echten Marcel Fratzscher, sondern mit einem Betrugsnetzwerk – Identitätsdiebstahl und Anlagebetrug mit Kryptowährungen."
    },
    {
      name: "Venus Investment Alliance",
      platform: "WhatsApp/Telegram",
      description: "Wohlverdienter Eintrag auf unserer Warnliste Anlagebetrug. Hier wird abgezockt – und zwar per WhatsApp Gruppenchat."
    },
    {
      name: "E02 – Wertsteigerung",
      platform: "WhatsApp/Telegram",
      description: "Anlagebetrug vom Feinsten. Keinesfalls den Anweisungen dieser Leute folgen."
    },
    {
      name: "C=01 SSCP Vermögensstrategie Akademie",
      platform: "Telegram",
      description: "Investment Betrugsmasche über Messengerdienst."
    },
    {
      name: "Kapital und Wachstum 17",
      platform: "WhatsApp/Telegram",
      description: "Üble Chatgruppe auf Telegram und WhatsApp, die im Finanzbetrug endet. Nicht darauf einlassen!"
    },
    {
      name: "KKR Investorenclub",
      platform: "WhatsApp/Telegram",
      description: "Ihr Investment würde hier im Totalverlust enden – daher meiden Sie diese Chatgruppe besser."
    },
    {
      name: "Makro am Morgen Telegram Chatgruppe",
      platform: "Telegram",
      description: "Sicherlich keine echte Finanzberatung, sondern ein Investment-Scam."
    }
  ];

  const warningSignals = [
    "Broker zahlt nicht aus",
    "Kontaktabbruch mit Trading-Plattform",
    "Dubiose Dokumente wurden übersandt",
    "Angebliche Steuern, Gebühren oder Liquiditätsnachweise sollen erbracht werden",
    "Die persönlichen Betreuer wechseln ständig",
    "Auszahlung wird verweigert"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Helmet>
        <title>Warnliste Anlagebetrug 2025 | Bovensiepen & Partner - Betrugs-Broker erkennen</title>
        <meta name="description" content="Aktuelle Warnliste Anlagebetrug 2025 ✓ Betrügerische Broker & Trading-Plattformen ✓ WhatsApp Betrugsgruppen ✓ Schutz vor Krypto-Betrug ✓ Rechtshilfe bei Anlagebetrug" />
        <meta name="keywords" content="Warnliste Anlagebetrug, Broker Betrug, Trading Betrug, Krypto Betrug, Bitcoin Betrug, Anlagebetrug Anwalt, Betrugs Broker, Investment Scam" />
        <link rel="canonical" href="https://bovensiepen-partner.de/warnliste-anlagebetrug" />
        <meta property="og:title" content="Warnliste Anlagebetrug 2025 | Bovensiepen & Partner" />
        <meta property="og:description" content="Schützen Sie sich vor Anlagebetrug! Aktuelle Liste betrügerischer Broker, Trading-Plattformen und WhatsApp-Betrugsgruppen. Professionelle Rechtshilfe." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://bovensiepen-partner.de/warnliste-anlagebetrug" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Warnliste Anlagebetrug 2025: diese Broker sind aufgefallen!",
            "description": "Aktuelle Warnliste vor betrügerischen Brokern, Trading-Plattformen und Investment-Scams. Schutz vor Anlagebetrug und rechtliche Hilfe.",
            "author": {
              "@type": "Organization",
              "name": "Bovensiepen & Partner Rechtsanwälte"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bovensiepen & Partner",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bovensiepen-partner.de/logo.png"
              }
            },
            "datePublished": "2025-01-01",
            "dateModified": "2025-09-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bovensiepen-partner.de/warnliste-anlagebetrug"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section with Video Background */}
      <Section className="py-20 lg:py-32 relative overflow-hidden h-[60vh] flex items-center bg-gray-800">
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Warning Background Video"
          />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 via-transparent to-destructive/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-white/80 hover:text-white">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbPage className="text-white">Warnliste Anlagebetrug 2025</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-16 w-16 text-white mr-4" />
              <Badge variant="destructive" className="text-lg px-4 py-2 bg-destructive/80 text-white border-white/30">
                Warnliste 2025
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ textShadow: 'var(--text-glow-strong), 0 0 60px hsl(0 84% 60% / 0.8)' }}>
              Warnliste Anlagebetrug 2025: <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">diese Broker sind aufgefallen!</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow), 0 0 30px hsl(0 84% 60% / 0.4)' }}>
              Mit unserer aktuellen Warnliste sollen Geldanleger vor betrügerischen Brokern und Trading-Plattformen gewarnt werden.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/kontakt">
                  <Shield className="mr-2 h-5 w-5" />
                  Sofortige Rechtshilfe
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Eye className="mr-2 h-5 w-5" />
                Liste durchsuchen
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-3">
            <a href="#intro" className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Hinweise
            </a>
            <a href="#statistiken" className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Statistiken
            </a>
            <a href="#broker-liste" className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Broker Warnliste
            </a>
            <a href="#whatsapp-gruppen" className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Chat Gruppen
            </a>
            <a href="#warnsignale" className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Warnsignale
            </a>
            <a href="#fallstudie" className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Fallbeispiel
            </a>
            <a href="#rechtshilfe" className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Rechtshilfe
            </a>
            <a href="#kontakt" className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Beratung
            </a>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <Section id="intro" className="scroll-mt-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="text-xs">
                Wichtige Hinweise
              </Badge>
            </div>
            
            <Card className="border-0 shadow-card bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Falls Sie Ihren Finanzdienstleister oder Broker hier vorfinden, sollten Sie zeitnah 
                    <strong className="text-foreground"> einen spezialisierten Rechtsanwalt für Anlagebetrug</strong> einschalten. 
                    Es gilt, schnellstmöglich gegen den möglichen Anlagebetrug vorzugehen.
                  </p>
                  
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <p className="text-foreground font-medium mb-2">
                      ⚠️ Wichtiger Hinweis:
                    </p>
                    <p className="text-muted-foreground">
                      Falls Sie Ihren Finanzdienstleister oder Broker auf unserer Warnliste Anlagebetrug nicht finden, 
                      bedeutet dies leider nicht, dass es ein seriöser Anbieter ist. Betrüger sind oft monatelang 
                      aktiv, bevor der Betrug auffliegt.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Table of Contents */}
      <Section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="mr-2 h-5 w-5" />
                  Inhaltsverzeichnis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3">Aktuelle Warnungen</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#broker-liste" className="text-primary hover:underline">Betrügerische Broker</a></li>
                      <li><a href="#whatsapp-gruppen" className="text-primary hover:underline">WhatsApp Betrugsgruppen</a></li>
                      <li><a href="#warnsignale" className="text-primary hover:underline">Warnsignale erkennen</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Hilfe & Beratung</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#fallstudie" className="text-primary hover:underline">Echte Fallschilderung</a></li>
                      <li><a href="#rechtshilfe" className="text-primary hover:underline">Rechtliche Schritte</a></li>
                      <li><a href="#kontakt" className="text-primary hover:underline">Kostenlose Erstberatung</a></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Statistics */}
      <Section id="statistiken" className="scroll-mt-24 bg-gradient-glass">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <Badge variant="outline" className="text-xs">
              Aktuelle Zahlen
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Betrügerische Broker gelistet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Geschädigten geholfen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">€50M+</div>
              <div className="text-sm text-muted-foreground">Schäden dokumentiert</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Notfallberatung</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Fraudulent Brokers List */}
      <Section id="broker-liste" className="scroll-mt-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="destructive" className="text-xs">
              Broker Warnliste
            </Badge>
          </div>
          
          <SectionHeader>
            <SectionTitle>Aktuelle Warnliste: Betrügerische Broker</SectionTitle>
            <SectionDescription>
              Diese Anbieter sind uns durch Betrugsvorwürfe, behördliche Warnungen oder negative Erfahrungsberichte aufgefallen.
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6">
              {fraudulentBrokers.map((broker, index) => (
                <Card key={index} className="border-l-4 border-l-destructive">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-foreground">{broker.name}</h3>
                          <Badge variant="destructive">{broker.category}</Badge>
                        </div>
                        {broker.website && (
                          <p className="text-sm text-muted-foreground mb-2">
                            Website: <span className="font-mono bg-muted px-2 py-1 rounded">{broker.website}</span>
                          </p>
                        )}
                        <p className="text-muted-foreground">{broker.description}</p>
                      </div>
                      <Button variant="destructive" size="sm">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Nicht einzahlen!
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Hinweis:</strong> Diese Liste ist nicht abschließend. Ein Eintrag erfolgt nur bei erhärtetem Betrugsverdacht 
                durch geschädigte Investoren oder behördliche Warnmeldungen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* WhatsApp Groups */}
      <Section id="whatsapp-gruppen" className="scroll-mt-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-xs border-orange-500 text-orange-600">
              Chat Betrug
            </Badge>
          </div>
          
          <SectionHeader>
            <SectionTitle>Betrügerische WhatsApp & Telegram Gruppen</SectionTitle>
            <SectionDescription>
              Vorsicht vor diesen Investment-Gruppen in Messengerdiensten - hier lauern Betrüger!
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {chatGroups.map((group, index) => (
                <Card key={index} className="border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-foreground">{group.name}</h3>
                      <Badge variant="outline">{group.platform}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{group.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Warning Signals */}
      <Section id="warnsignale" className="scroll-mt-24 bg-gradient-glass">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-xs border-destructive text-destructive">
              Warnsignale
            </Badge>
          </div>
          
          <SectionHeader>
            <SectionTitle>Warnsignale für Anlagebetrug erkennen</SectionTitle>
            <SectionDescription>
              Diese Anzeichen deuten auf möglichen Betrug hin - werden Sie aktiv!
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {warningSignals.map((signal, index) => (
                <div key={index} className="flex items-center p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-destructive mr-3 flex-shrink-0" />
                  <span className="text-sm">{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Case Study */}
      <Section id="fallstudie" className="scroll-mt-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-xs border-primary text-primary">
              Praxis-Beispiel
            </Badge>
          </div>
          
          <SectionHeader>
            <SectionTitle>Echte Fallschilderung einer betrogenen Investorin</SectionTitle>
            <SectionDescription>
              Ein anonymisierter Fall aus unserer Beratungspraxis zeigt, wie perfide die Betrüger vorgehen.
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <blockquote className="border-l-4 border-muted pl-4 italic text-muted-foreground mb-6">
                    "Sehr geehrte Damen und Herren von Bovensiepen & Partner,<br/><br/>
                    ich bin einem Bitcoin-Betrüger auf den Leim gegangen. Insgesamt habe ich 5.000 Euro verloren. 
                    1.000 Euro habe ich in Bitcoin investiert und einen angeblichen Gewinn von 38.000 Euro gemacht. 
                    Um diese ausgezahlt zu bekommen, sollte ich eine Provision von 4.000 Euro überweisen..."
                  </blockquote>
                  
                  <h4 className="text-lg font-semibold mb-3">Typisches Betrugsmuster:</h4>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <Card className="p-4">
                      <div className="text-center">
                        <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">1</div>
                        <h5 className="font-semibold mb-2">Kleine Einzahlung</h5>
                        <p className="text-sm text-muted-foreground">1.000€ "Test-Investment"</p>
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="text-center">
                        <div className="bg-yellow-100 text-yellow-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">2</div>
                        <h5 className="font-semibold mb-2">Scheingewinne</h5>
                        <p className="text-sm text-muted-foreground">38.000€ angeblicher Gewinn</p>
                      </div>
                    </Card>
                    <Card className="p-4">
                      <div className="text-center">
                        <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">3</div>
                        <h5 className="font-semibold mb-2">Nachzahlung</h5>
                        <p className="text-sm text-muted-foreground">4.000€ "Provision" gefordert</p>
                      </div>
                    </Card>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Erfolgreiche Hilfe:</strong> Dieser Investorin konnten wir zeitnah weiterhelfen. 
                      Durch schnelle rechtliche Schritte war eine teilweise Rückholung der Gelder möglich.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Legal Action */}
      <Section id="rechtshilfe" className="scroll-mt-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-xs border-primary text-primary">
              Rechtshilfe
            </Badge>
          </div>
          
          <SectionHeader>
            <SectionTitle>Rechtlich gegen Anlagebetrüger vorgehen</SectionTitle>
            <SectionDescription>
              Betrugsopfer sind nicht schutzlos - wir helfen Ihnen bei der Rückholung Ihres Geldes.
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Beweise sichern</h3>
                <p className="text-muted-foreground">
                  Sämtliche Kommunikationsdaten und Geldströme gerichtsfest dokumentieren
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strafanzeige</h3>
                <p className="text-muted-foreground">
                  Schnellstmögliche, juristisch fundierte Strafanzeige bei den Ermittlungsbehörden
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Geld zurückholen</h3>
                <p className="text-muted-foreground">
                  Zivilrechtliche Maßnahmen zur Rückholung der verlorenen Gelder
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Contact CTA */}
      <Section id="kontakt" className="scroll-mt-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Badge variant="outline" className="text-xs border-primary text-primary">
              Kostenlose Beratung
            </Badge>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <Card className="border-0 shadow-glass bg-card/80 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Kostenfreie Ersteinschätzung zum Anlagebetrug
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Wurden Sie Opfer von Anlagebetrug?</h3>
                    <ul className="text-left space-y-2 text-muted-foreground">
                      <li>• Bei welchem Broker haben Sie investiert?</li>
                      <li>• Wurden Kryptowährungen verwendet?</li>
                      <li>• Wird eine Auszahlung verweigert?</li>
                      <li>• Haben Sie die Warnliste geprüft?</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Das erwartet Sie:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Rückmeldung innerhalb von 60 Minuten</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">100% vertraulich und DSGVO-konform</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Spezialisiert auf Anlagebetrug</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/kontakt">
                      <Mail className="mr-2 h-5 w-5" />
                      Kostenlose Beratung anfragen
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+4930123456789">
                      <Phone className="mr-2 h-5 w-5" />
                      Sofort anrufen
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  Zeitnah erhalten Sie eine kostenfreie Ersteinschätzung zu Ihrem konkreten Einzelfall. 
                  Auf dieser Grundlage können Sie entscheiden, ob Sie rechtliche Maßnahmen wünschen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      {/* Additional Information */}
      <Section className="bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Anlagebetrug im Internet durch hochprofessionelle Betrügernetzwerke</h2>
                
                <div className="prose max-w-none text-muted-foreground">
                  <p className="mb-4">
                    Es handelt sich um ein internationales Netzwerk an hochprofessionellen Straftätern. 
                    Einerseits werden eine Unzahl an seriös wirkenden, letztlich aber gefälschten Trading-Plattformen vorbereitet.
                  </p>
                  
                  <p className="mb-4">
                    Diese Handelsplattformen werden von den Tätern in sozialen Medien oder auf YouTube massiv beworben. 
                    Den Betrugsopfern wird suggeriert, sie könnten spielend leicht und zunächst mit sehr überschaubaren, 
                    kleineren Geldsummen die Trading-Plattform „testen".
                  </p>

                  <div className="bg-destructive/5 border-l-4 border-destructive p-4 rounded-r-lg my-6">
                    <h4 className="font-semibold text-foreground mb-2">Typisches Betrugsmuster:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>Kleine "Test"-Einzahlung wird verlangt</li>
                      <li>Scheingewinne werden angezeigt</li>
                      <li>"Persönlicher Betreuer" meldet sich</li>
                      <li>Größere Einzahlungen werden gefordert</li>
                      <li>Auszahlung wird verweigert oder verzögert</li>
                      <li>Weitere Gebühren werden erfunden</li>
                    </ol>
                  </div>

                  <p>
                    Wichtig: Viele der Finanzbetrüger haben gefälschte Dokumente an die Betrugsopfer versendet. 
                    Diese Schriftstücke sind meist als „von der Blockchain" stammend gekennzeichnet. 
                    <strong className="text-foreground"> Keinesfalls sollten daraufhin Zahlungen geleistet werden</strong>, 
                    sonst vergrößert sich der Vermögensschaden.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Warnliste;