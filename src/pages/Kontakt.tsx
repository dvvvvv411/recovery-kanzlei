import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock, Shield, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/ui/section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().optional(),
  topic: z.string().min(1, 'Bitte wählen Sie ein Thema aus'),
  damage_amount: z.string().optional(),
  message: z.string().min(20, 'Nachricht muss mindestens 20 Zeichen haben'),
  consent: z.boolean().refine((val) => val === true, 'Sie müssen der Datenschutzerklärung zustimmen'),
  honeypot: z.string().max(0, 'Bot detected'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Kontakt() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStartTime, setSubmitStartTime] = useState<number>(0);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      topic: '',
      damage_amount: '',
      message: '',
      consent: false,
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    const submitDuration = Date.now() - submitStartTime;
    const spamScore = submitDuration < 2000 ? 10 : 0; // Flag if submitted too quickly
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          topic: data.topic,
          damage_amount: data.damage_amount || null,
          message: data.message,
          consent: data.consent,
          source: 'kontakt_form',
          status: 'new',
          spam_score: spamScore,
          submit_duration: submitDuration,
        });

      if (error) {
        console.error('Error submitting form:', error);
        toast.error('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
      } else {
        toast.success('Vielen Dank für Ihre Nachricht! Wir melden uns innerhalb von 60 Minuten bei Ihnen.');
        form.reset();
      }
    } catch (err) {
      console.error('Submission error:', err);
      toast.error('Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormStart = () => {
    if (submitStartTime === 0) {
      setSubmitStartTime(Date.now());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Header />
      
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader>
            <SectionTitle className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Schnelle Hilfe bei Krypto-Betrug
            </SectionTitle>
            <SectionDescription className="text-xl">
              Kostenlose Erstberatung • Rückmeldung in der Regel innerhalb von 60 Minuten
            </SectionDescription>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                500+ erfolgreiche Fälle
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Spezialisiert auf Krypto-Recovery
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Kein Erfolg = keine Kosten
              </Badge>
            </div>
          </SectionHeader>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Left Column - Info */}
            <div className="space-y-8">
              <Card className="glass-card border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Kontaktinformationen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Telefon</p>
                      <p className="text-muted-foreground">+49 (0) 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">E-Mail</p>
                      <p className="text-muted-foreground">kontakt@recovery-kanzlei.de</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Adresse</p>
                      <p className="text-muted-foreground">Musterstraße 123<br />12345 Musterstadt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Öffnungszeiten</p>
                      <p className="text-muted-foreground">Mo-Fr: 8:00 - 18:00 Uhr<br />Sa: 9:00 - 14:00 Uhr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Warum uns vertrauen?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Kostenlose Erstberatung</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Persönliche Ansprechperson</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Diskret & schnell</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Spezialisiert auf Cybercrime</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong>Datenschutz:</strong> Ihre Daten werden streng vertraulich behandelt und gemäß DSGVO verarbeitet.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Form */}
            <Card className="glass-card border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Kostenlose Erstberatung anfragen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" onFocus={handleFormStart}>
                    
                    {/* Honeypot field - hidden from users */}
                    <FormField
                      control={form.control}
                      name="honeypot"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input {...field} tabIndex={-1} autoComplete="off" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vor- und Nachname *</FormLabel>
                          <FormControl>
                            <Input placeholder="Max Mustermann" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-Mail-Adresse *</FormLabel>
                            <FormControl>
                              <Input placeholder="max@beispiel.de" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefonnummer (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+49 123 456789" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Thema/Anliegen *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Bitte wählen" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="cybercrime">Cybercrime/Betrug</SelectItem>
                                <SelectItem value="kryptonachverfolgung">Kryptonachverfolgung</SelectItem>
                                <SelectItem value="wertpapier">Wertpapier/Kapitalmarkt</SelectItem>
                                <SelectItem value="datenschutz">Datenschutz</SelectItem>
                                <SelectItem value="immobilienrecht">Immobilienrecht</SelectItem>
                                <SelectItem value="sonstiges">Sonstiges</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="damage_amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Schadenshöhe (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="z.B. 50.000 EUR" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ihre Nachricht *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Beschreiben Sie Ihren Fall bitte so detailliert wie möglich..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm">
                              Ich habe die Datenschutzerklärung gelesen und akzeptiere sie. *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Kostenlose Erstberatung anfragen'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader>
              <SectionTitle>Häufig gestellte Fragen</SectionTitle>
            </SectionHeader>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="glass-card border-0 px-6 rounded-lg">
                <AccordionTrigger className="text-left">
                  Wie schnell melden Sie sich bei mir?
                </AccordionTrigger>
                <AccordionContent>
                  Wir melden uns in der Regel innerhalb von 60 Minuten bei Ihnen zurück, 
                  oft sogar schneller. Bei Eingang außerhalb der Geschäftszeiten spätestens 
                  am nächsten Werktag bis 9:00 Uhr.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="glass-card border-0 px-6 rounded-lg">
                <AccordionTrigger className="text-left">
                  Was kostet die Erstberatung?
                </AccordionTrigger>
                <AccordionContent>
                  Die Erstberatung ist für Sie völlig kostenlos und unverbindlich. 
                  Erst wenn Sie sich für eine Zusammenarbeit entscheiden, entstehen Kosten - 
                  und diese nur bei erfolgreichem Ausgang Ihres Falls.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="glass-card border-0 px-6 rounded-lg">
                <AccordionTrigger className="text-left">
                  Welche Informationen sollte ich bereitstellen?
                </AccordionTrigger>
                <AccordionContent>
                  Je mehr Details Sie uns mitteilen können, desto besser können wir Ihnen helfen. 
                  Wichtig sind: Zeitpunkt des Betrugs, beteiligte Plattformen, Transaktionsdaten, 
                  Kommunikation mit den Betrügern und bereits unternommene Schritte.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}