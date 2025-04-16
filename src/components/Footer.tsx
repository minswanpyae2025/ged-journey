
import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-auto">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-ged-purple">GED</span>
              <span className="text-xl font-semibold text-ged-blue">Journey</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your comprehensive platform for GED preparation with personalized learning, interactive content, and AI-powered assistance.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Contact</h4>
            <div className="flex items-center space-x-2 mb-2">
              <Mail size={16} className="text-muted-foreground" />
              <a href="mailto:support@gedjourney.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                support@gedjourney.com
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-ged-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-ged-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-ged-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-ged-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-4 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GED Journey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
