
import React from 'react';
import { ArrowRight, Upload, TrendingUp, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-background" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Turn Your 
                <span className="gradient-text"> Creative Vision</span> 
                <br />Into Profit
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Join thousands of creators earning from their designs. Upload, showcase, and monetize your creative work with our powerful platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-hero group">
                <Link to="/upload">
                  Start Creating
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="smooth-transition hover:border-primary">
                <Link to="/portfolio">View Examples</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Upload, label: "Upload", desc: "Easy uploads" },
                { icon: TrendingUp, label: "Earn", desc: "Track earnings" },
                { icon: Palette, label: "Create", desc: "Showcase work" }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-2 animate-slide-up" style={{ animationDelay: `${i * 200}ms` }}>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto hover-lift">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <Card className="card-elevated p-6 space-y-4 animate-float">
                <div className="w-full h-32 bg-gradient-to-br from-primary to-primary-600 rounded-lg"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-primary/20 rounded w-3/4"></div>
                  <div className="h-2 bg-muted rounded w-1/2"></div>
                </div>
              </Card>
              
              <Card className="card-elevated p-6 space-y-4 animate-float mt-8" style={{ animationDelay: '1s' }}>
                <div className="w-full h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-primary/20 rounded w-2/3"></div>
                  <div className="h-2 bg-muted rounded w-3/4"></div>
                </div>
              </Card>

              <Card className="card-elevated p-6 space-y-4 animate-float -mt-4" style={{ animationDelay: '2s' }}>
                <div className="w-full h-32 bg-gradient-to-br from-primary-600 to-primary rounded-lg"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-primary/20 rounded w-1/2"></div>
                  <div className="h-2 bg-muted rounded w-2/3"></div>
                </div>
              </Card>

              <Card className="card-elevated p-6 space-y-4 animate-float mt-4" style={{ animationDelay: '3s' }}>
                <div className="w-full h-32 bg-gradient-to-br from-primary-700 to-primary-500 rounded-lg"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-primary/20 rounded w-4/5"></div>
                  <div className="h-2 bg-muted rounded w-1/3"></div>
                </div>
              </Card>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute -bottom-8 -left-4 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
