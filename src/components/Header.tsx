import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
            <DropdownMenuTrigger className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group flex items-center gap-1" style={{ textShadow: 'var(--text-glow)' }}>
              Kanzlei
              <ChevronDown className="h-4 w-4" />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary text-white border-primary/30 shadow-xl p-6 w-80 rounded-lg" sideOffset={8}>
              <div className="grid grid-cols-1 gap-4">
                <DropdownMenuItem className="hover:bg-white/20 p-3 rounded-md text-white cursor-pointer">
                  <a href="/#about" className="w-full">Über Uns</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/20 p-3 rounded-md text-white cursor-pointer">
                  <a href="/#team" className="w-full">Team</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/20 p-3 rounded-md text-white cursor-pointer">
                  <Link to="/blog" className="w-full">News</Link>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dropdown - Kompetenzen */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group flex items-center gap-1" style={{ textShadow: 'var(--text-glow)' }}>
              Kompetenzen
              <ChevronDown className="h-4 w-4" />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary text-white border-primary/30 shadow-xl p-6 w-96 rounded-lg" sideOffset={8}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <DropdownMenuItem className="hover:bg-white/20 p-3 rounded-md text-white cursor-pointer">
                    <a href="/#services" className="w-full">Cybercrime</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/20 p-3 rounded-md text-white cursor-pointer">
                    <a href="/#services" className="w-full">Datenschutz und Compliance</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/20 p-3 rounded-md text-white cursor-pointer">
                    <a href="/#services" className="w-full">Gesellschafts- und Unternehmensrecht</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/20 p-3 rounded-md text-white cursor-pointer">
                    <a href="/#services" className="w-full">Immobilienrecht</a>
                  </DropdownMenuItem>
                </div>
                <div className="space-y-2">
                  <DropdownMenuItem className="hover:bg-white/20 p-3 rounded-md text-white cursor-pointer">
                    <a href="/#services" className="w-full">Private Clients / Family Offices</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/20 p-3 rounded-md text-white cursor-pointer">
                    <a href="/#services" className="w-full">Prozessführung</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/20 p-3 rounded-md text-white cursor-pointer">
                    <a href="/#services" className="w-full">Wertpaper- und Kapitalmarktrecht</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/20 p-3 rounded-md text-white cursor-pointer">
                    <a href="/#services" className="w-full">Kryptonachverfolgung und Mittelherkunftsnachweis</a>
                  </DropdownMenuItem>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Einzelne Links */}
          <a href="/#successes" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
            Erfolge
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="/#contact" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
            Kontakt
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="/stellenangebote" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
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