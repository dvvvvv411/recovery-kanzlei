import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, Shield, TrendingUp, Target, Users, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";

export const NewsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
      className="w-full relative"
    >
      <CarouselContent className="-ml-4">
        {/* Slide 1 - Original Story */}
        <CarouselItem className="pl-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Krypto Betrugsopfer bekommt 
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> 8,69 Bitcoin zurück</span>
              </h3>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-800">
                  Erfolg und Hoffnung im Kampf gegen Internetbetrug / CyberCrime
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ein österreichisches Betrugsopfer erhielt kürzlich 8,69 Bitcoin zurück – ein Wert von rund 800.000 EUR (Stand Juli 2025). Möglich wurde dies durch die Zusammenarbeit zwischen unserer Kanzlei ATB.LAW, den Strafverfolgungsbehörden und dem gezielten Einsatz von Blockchain-Forensik.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wir berichten über einen Fall, der zeigt, wie effektiver Rechtsschutz im digitalen Raum aussehen kann – und welche juristischen Herausforderungen es zu meistern galt.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">800.000 EUR zurückgeholt</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">Blockchain-Forensik</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full flex items-stretch">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2 w-full">
                <img 
                  src="/lovable-uploads/77e79b13-9bec-4809-ba2f-258c1dc251ef.png" 
                  alt="Rechtsdokument Bitcoin Rückgabe"
                  className="w-full h-[400px] object-cover object-center rounded-xl"
                />
              </div>
            </div>
          </div>
        </CarouselItem>

        {/* Slide 2 - New Story */}
        <CarouselItem className="pl-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Ethereum Recovery bringt
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> 2,1 Millionen EUR zurück</span>
              </h3>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-800">
                  Bahnbrechender Fall in der DeFi-Recovery
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Durch innovative Smart Contract Analyse gelang es unserer Kanzlei, gestohlene Ethereum im Wert von 2,1 Millionen EUR aus einem DeFi-Protokoll zurückzuholen. Der komplexe Fall erforderte monatelange Blockchain-Forensik und internationale Kooperation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dieser Präzedenzfall zeigt neue Möglichkeiten auf, auch bei komplexesten DeFi-Betrügereien erfolgreich vorzugehen und Vermögenswerte zu rekonstruieren.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">2,1 Mio EUR Recovery</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full">
                  <Target className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-800 font-medium">DeFi-Expertise</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full flex items-stretch">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2 w-full">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=smart"
                  alt="Ethereum Blockchain Forensik"
                  className="w-full h-[400px] object-cover object-center rounded-xl"
                />
              </div>
            </div>
          </div>
        </CarouselItem>

        {/* Slide 3 - New Story */}
        <CarouselItem className="pl-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Internationale NFT-Betrug Aufklärung
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> erfolgreich abgeschlossen</span>
              </h3>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-800">
                  Grenzüberschreitende Zusammenarbeit führt zum Erfolg
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In einem spektakulären Fall konnten wir gemeinsam mit internationalen Behörden einen groß angelegten NFT-Betrug aufdecken. Über 500 Geschädigte erhielten ihre Investitionen zurück, nachdem die Täter zur Rechenschaft gezogen wurden.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Die Kooperation zwischen deutschen, amerikanischen und asiatischen Strafverfolgungsbehörden zeigt die Effektivität moderner Cybercrime-Bekämpfung.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">500+ Geschädigte</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                  <Globe className="h-5 w-5 text-orange-600" />
                  <span className="text-orange-800 font-medium">International</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full flex items-stretch">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2 w-full">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=smart"
                  alt="NFT und Blockchain Technologie"
                  className="w-full h-[400px] object-cover object-center rounded-xl"
                />
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>

      {/* Navigation Buttons - Glasmorphic design */}
      <CarouselPrevious className="absolute -left-20 top-1/2 -translate-y-1/2 h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-blue-600 hover:text-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl" />
      <CarouselNext className="absolute -right-20 top-1/2 -translate-y-1/2 h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-blue-600 hover:text-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl" />

      {/* Modern Progress Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'w-8 h-3 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                : 'w-3 h-3 bg-blue-200 hover:bg-blue-400 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
};