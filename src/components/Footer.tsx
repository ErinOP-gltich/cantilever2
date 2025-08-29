import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-primary rounded-md flex items-center justify-center text-white font-bold text-xs">
                CL
              </div>
              <span className="text-lg font-bold gradient-text">Cantilever</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium architectural assets for users and professionals.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/upload" className="hover:text-primary smooth-transition">Upload Design</Link></li>
              <li><Link to="/earnings" className="hover:text-primary smooth-transition">Earnings</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary smooth-transition">Portfolio</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Marketplace</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://cantilever1.vercel.app" className="hover:text-primary smooth-transition">Main Page</a></li>
              <li><a href="https://cantilever1.vercel.app/about" className="hover:text-primary smooth-transition">About Us</a></li>
              <li><a href="https://cantilever1.vercel.app/contact" className="hover:text-primary smooth-transition">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary smooth-transition">Help Center</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Creator Guidelines</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Cantilever. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;