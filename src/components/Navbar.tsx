
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background border-b">
      <div className="container-content flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <span className="text-2xl font-bold text-ged-purple">GED</span>
            <span className="text-2xl font-semibold text-ged-blue">Journey</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/faq" className="text-foreground/80 hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="default" className="bg-ged-blue hover:bg-ged-blue/90">Sign In</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden items-center p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden animate-fade-in">
          <nav className="flex flex-col gap-4 p-6">
            <Link to="/" className="text-lg py-2 border-b" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/how-it-works" className="text-lg py-2 border-b" onClick={closeMenu}>
              How It Works
            </Link>
            <Link to="/pricing" className="text-lg py-2 border-b" onClick={closeMenu}>
              Pricing
            </Link>
            <Link to="/faq" className="text-lg py-2 border-b" onClick={closeMenu}>
              FAQ
            </Link>
            <Link to="/contact" className="text-lg py-2 border-b" onClick={closeMenu}>
              Contact
            </Link>
            <div className="pt-4">
              <Link to="/login" onClick={closeMenu}>
                <Button className="w-full bg-ged-blue hover:bg-ged-blue/90">Sign In</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
