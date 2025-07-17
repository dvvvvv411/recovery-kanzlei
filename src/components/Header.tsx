import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              {/* Kanzlei Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group data-[state=open]:text-primary" style={{ textShadow: 'var(--text-glow)' }}>
                  Kanzlei
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-2 bg-white/95 backdrop-blur-md border border-white/20 shadow-glass rounded-lg">
                    <NavigationMenuLink asChild>
                      <Link to="/ueber-uns" className="block px-4 py-3 text-gray-800 hover:bg-white/80 hover:text-primary rounded-md transition-all duration-300">
                        Über Uns
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/team" className="block px-4 py-3 text-gray-800 hover:bg-white/80 hover:text-primary rounded-md transition-all duration-300">
                        Team
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/news" className="block px-4 py-3 text-gray-800 hover:bg-white/80 hover:text-primary rounded-md transition-all duration-300">
                        News
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Kompetenzen Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group data-[state=open]:text-primary" style={{ textShadow: 'var(--text-glow)' }}>
                  Kompetenzen
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[300px] p-2 bg-white/95 backdrop-blur-md border border-white/20 shadow-glass rounded-lg">
                    <NavigationMenuLink asChild>
                      <Link to="/kompetenzen/cybercrime" className="block px-4 py-3 text-gray-800 hover:bg-white/80 hover:text-primary rounded-md transition-all duration-300">
                        Cybercrime
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/kompetenzen/datenschutz" className="block px-4 py-3 text-gray-800 hover:bg-white/80 hover:text-primary rounded-md transition-all duration-300">
                        Datenschutz und Compliance
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/kompetenzen/gesellschaftsrecht" className="block px-4 py-3 text-gray-800 hover:bg-white/80 hover:text-primary rounded-md transition-all duration-300">
                        Gesellschafts- und Unternehmensrecht
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/kompetenzen/immobilienrecht" className="block px-4 py-3 text-gray-800 hover:bg-white/80 hover:text-primary rounded-md transition-all duration-300">
                        Immobilienrecht
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/kompetenzen/private-clients" className="block px-4 py-3 text-gray-800 hover:bg-white/80 hover:text-primary rounded-md transition-all duration-300">
                        Private Clients / Family Offices
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/kompetenzen/prozessfuehrung" className="block px-4 py-3 text-gray-800 hover:bg-white/80 hover:text-primary rounded-md transition-all duration-300">
                        Prozessführung
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/kompetenzen/wertpapierrecht" className="block px-4 py-3 text-gray-800 hover:bg-white/80 hover:text-primary rounded-md transition-all duration-300">
                        Wertpaper- und Kapitalmarktrecht
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/kompetenzen/kryptonachverfolgung" className="block px-4 py-3 text-gray-800 hover:bg-white/80 hover:text-primary rounded-md transition-all duration-300">
                        Kryptonachverfolgung und Mittelherkunftsnachweis
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Einzelne Links */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/erfolge" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
                    Erfolge
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/kontakt" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
                    Kontakt
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/stellenangebote" className="text-white hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(214_100%_60%_/_0.8)] relative group" style={{ textShadow: 'var(--text-glow)' }}>
                    Stellenangebote
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="outline" className="bg-gradient-glass backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-primary/50 transition-all duration-300 shadow-glass hover:shadow-[0_0_30px_hsl(214_100%_60%_/_0.6)] hover:border-primary/80" style={{ textShadow: 'var(--text-glow)', boxShadow: '0 0 20px hsl(214 100% 60% / 0.3), var(--shadow-glass)' }}>
            Beratung anfragen
          </Button>
        </div>
      </div>
    </nav>
  );
};