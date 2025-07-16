import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Clock, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-accent mr-2" />
              <span className="text-xl font-bold text-primary">CryptoLegal</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">Process</a>
              <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">Team</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Free Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Recover Your Stolen Cryptocurrency with Expert Legal Help
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Specialized law firm with 95% success rate in crypto fraud recovery. 
              We've recovered over $50M for our clients from complex crypto scams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
                Start Your Recovery <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                Free Case Review
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent">$50M+</div>
                <div className="text-white/80">Recovered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-white/80">Cases Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Victim of Crypto Fraud? You're Not Alone.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cryptocurrency scams cost victims billions annually. Our specialized legal team 
                knows exactly how to track, trace, and recover your stolen digital assets.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Common Crypto Fraud Types We Handle:</h3>
                <ul className="space-y-4">
                  {[
                    "Investment Scams & Ponzi Schemes",
                    "Romance Scams with Crypto",
                    "Fake Exchange Platforms",
                    "DeFi Protocol Exploits",
                    "NFT Marketplace Fraud",
                    "Business Email Compromise"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-accent">Our Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We combine advanced blockchain forensics with aggressive legal action to:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Trace stolen funds across multiple blockchains",
                        "Identify and locate perpetrators",
                        "Freeze assets through legal injunctions",
                        "Pursue recovery through civil litigation",
                        "Coordinate with law enforcement globally"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Comprehensive Legal Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Full-spectrum legal support for cryptocurrency-related matters
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Crypto Fraud Recovery",
                  description: "Specialized recovery of stolen cryptocurrency through legal channels and blockchain forensics."
                },
                {
                  icon: Users,
                  title: "Civil Litigation",
                  description: "Aggressive pursuit of perpetrators through civil courts to recover damages and assets."
                },
                {
                  icon: Clock,
                  title: "Emergency Response",
                  description: "24/7 emergency response for time-sensitive crypto fraud cases requiring immediate action."
                },
                {
                  icon: Award,
                  title: "Regulatory Compliance",
                  description: "Navigate complex cryptocurrency regulations and ensure compliance with evolving laws."
                },
                {
                  icon: CheckCircle,
                  title: "Asset Tracing",
                  description: "Advanced blockchain analysis to trace and identify the movement of stolen digital assets."
                },
                {
                  icon: Phone,
                  title: "Legal Consultation",
                  description: "Expert legal advice on cryptocurrency investments, transactions, and security measures."
                }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow duration-300">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-accent mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Our Recovery Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Proven 5-step methodology for maximum recovery success
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Case Assessment", description: "Free consultation to evaluate your case and recovery prospects" },
                { step: "02", title: "Evidence Collection", description: "Gather all transaction records, communications, and relevant documentation" },
                { step: "03", title: "Blockchain Analysis", description: "Advanced forensic tracing of stolen funds across multiple networks" },
                { step: "04", title: "Legal Action", description: "File lawsuits, obtain injunctions, and freeze identified assets" },
                { step: "05", title: "Asset Recovery", description: "Execute recovery through settlements or court-ordered restitution" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Expert Legal Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialists in cryptocurrency law and digital asset recovery
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  title: "Managing Partner",
                  credentials: "J.D., LL.M. in Financial Law",
                  experience: "15+ years in financial crime litigation"
                },
                {
                  name: "Michael Rodriguez",
                  title: "Senior Associate",
                  credentials: "J.D., Certified Blockchain Expert",
                  experience: "Specialist in crypto forensics and recovery"
                },
                {
                  name: "Dr. Amanda Foster",
                  title: "Technical Director",
                  credentials: "Ph.D. Computer Science, CISSP",
                  experience: "Former FBI cybercrime investigator"
                }
              ].map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-accent" />
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-accent font-medium">{member.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{member.credentials}</p>
                    <p className="text-sm">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Don't Let Crypto Fraudsters Win
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Every day you wait, it becomes harder to recover your stolen cryptocurrency. 
              Start your recovery process today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                Call Now: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Contact Us Today
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to start your crypto recovery? Get in touch for a free case evaluation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">(555) 123-4567</p>
                  <p className="text-muted-foreground">24/7 Emergency Line</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary mb-2">recovery@cryptolegal.com</p>
                  <p className="text-muted-foreground">Secure consultation</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary mb-2">123 Financial District<br />New York, NY 10004</p>
                  <p className="text-muted-foreground">By appointment only</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-accent mr-2" />
                <span className="text-xl font-bold">CryptoLegal</span>
              </div>
              <p className="text-primary-foreground/80">
                Leading cryptocurrency fraud recovery law firm with proven results.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Crypto Fraud Recovery</li>
                <li>Civil Litigation</li>
                <li>Asset Tracing</li>
                <li>Legal Consultation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Press</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Attorney Advertising</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 CryptoLegal. All rights reserved. Attorney Advertising.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;