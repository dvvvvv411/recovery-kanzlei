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
          {/* Kanzlei Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group flex items-center gap-1" style={{ textShadow: 'var(--text-glow)' }}>
              Kanzlei
              <ChevronDown size={16} />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gradient-glass backdrop-blur-md border-[var(--border-glass)] shadow-glass text-white z-50">
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                <Link to="/#about" className="w-full">Über Uns</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                <Link to="/#team" className="w-full">Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                <Link to="/blog" className="w-full">News</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Kompetenzen Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group flex items-center gap-1" style={{ textShadow: 'var(--text-glow)' }}>
              Kompetenzen
              <ChevronDown size={16} />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gradient-glass backdrop-blur-md border-[var(--border-glass)] shadow-glass text-white z-50 w-80">
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                <a href="/#services" className="w-full">Cybercrime</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                <a href="/#services" className="w-full">Datenschutz und Compliance</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                <a href="/#services" className="w-full">Gesellschafts- und Unternehmensrecht</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                <a href="/#services" className="w-full">Immobilienrecht</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                <a href="/#services" className="w-full">Private Clients / Family Offices</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                <a href="/#services" className="w-full">Prozessführung</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                <a href="/#services" className="w-full">Wertpapier- und Kapitalmarktrecht</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 focus:bg-white/10">
                <a href="/#services" className="w-full">Kryptonachverfolgung und Mittelherkunftsnachweis</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Individual Links */}
          <a href="/#successes" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
            Erfolge
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="/#contact" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
            Kontakt
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="/#jobs" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
            Stellenangebote
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
          </a>

          <Button variant="outline" className="bg-gradient-glass backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-primary/50 transition-all duration-300 shadow-glass hover:shadow-[0_0_30px_hsl(214_100%_60%_/_0.6)] hover:border-primary/80" style={{ textShadow: 'var(--text-glow)', boxShadow: '0 0 20px hsl(214 100% 60% / 0.3), var(--shadow-glass)' }}>
            Beratung anfragen
          </Button>
        </div>
      </div>
    </nav>
  );
};