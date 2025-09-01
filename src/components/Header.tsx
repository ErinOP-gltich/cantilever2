
import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, DollarSign, User, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover-lift">
          <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-white font-bold text-sm">
            CL
          </div>
          <span className="text-2xl font-bold gradient-text">Cantilever Creators</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="https://mycantilever.com" className="text-foreground/80 hover:text-primary smooth-transition hover-lift">
            Main Page
          </a>
          <Link to="/upload" className="text-foreground/80 hover:text-primary smooth-transition hover-lift">
            Upload Design
          </Link>
          <Link to="/earnings" className="text-foreground/80 hover:text-primary smooth-transition hover-lift">
            Earnings
          </Link>
          <Link to="/portfolio" className="text-foreground/80 hover:text-primary smooth-transition hover-lift">
            Portfolio
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="hidden md:flex smooth-transition">
            <Link to="/signin">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </Button>
          <Button asChild className="btn-creator">
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
