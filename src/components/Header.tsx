import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-glass backdrop-blur-md border-b border-[var(--border-glass)] shadow-glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/3863a302-63a5-4e77-ac24-0c7f1592c2ea.png" 
              alt="CryptoLaw Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {/* Dropdown - Kanzlei */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] flex items-center gap-1" style={{ textShadow: 'var(--text-glow)' }}>
              Kanzlei
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-gray-700 z-50">
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/#about" className="w-full">Über Uns</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/#team" className="w-full">Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/blog" className="w-full">News</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/unsere-partner" className="w-full">Unsere Partner</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dropdown - Kompetenzen */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] flex items-center gap-1" style={{ textShadow: 'var(--text-glow)' }}>
              Kompetenzen
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-gray-700 z-50">
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/cybercrime" className="w-full">Cybercrime</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/datenschutz-und-compliance" className="w-full">Datenschutz und Compliance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/gesellschafts-und-unternehmensrecht" className="w-full">Gesellschafts- und Unternehmensrecht</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/immobilienrecht" className="w-full">Immobilienrecht</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/private-clients-family-offices" className="w-full">Private Clients / Family Offices</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/prozessfuhrung" className="w-full">Prozessführung</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/wertpapier-und-kapitalmarktrecht" className="w-full">Wertpapier- und Kapitalmarktrecht</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                <Link to="/kompetenz/kryptonachverfolgung-und-mittelherkunftsnachweis" className="w-full">Kryptonachverfolgung und Mittelherkunftsnachweis</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Einzelne Links */}
          <Link to="/#successes" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)]" style={{ textShadow: 'var(--text-glow)' }}>
            Erfolge
          </Link>
          <Link to="/#contact" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)]" style={{ textShadow: 'var(--text-glow)' }}>
            Kontakt
          </Link>
          <Link to="/#stellenangebote" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)]" style={{ textShadow: 'var(--text-glow)' }}>
            Stellenangebote
          </Link>

          <Button variant="outline" className="bg-gradient-glass backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-primary/50 transition-all duration-300 shadow-glass hover:shadow-[0_0_30px_hsl(214_100%_60%_/_0.6)] hover:border-primary/80" style={{ textShadow: 'var(--text-glow)', boxShadow: '0 0 20px hsl(214 100% 60% / 0.3), var(--shadow-glass)' }}>
            Beratung anfragen
          </Button>
        </div>
      </div>
    </nav>
  );
};