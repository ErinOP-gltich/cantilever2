
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Creators</span> Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from creators who've grown their business with Cantilever
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                name: 'Sarah Chen',
                role: 'Architect',
                feedback: 'Increased my monthly earnings by 300% within the first quarter. The platform is incredibly user-friendly.'
              },
              {
                icon: Users,
                name: 'Michael Rodriguez',
                role: 'Interior Designer',
                feedback: 'Amazing community of buyers! My designs get discovered by clients I never would have reached otherwise.'
              },
              {
                icon: Award,
                name: 'Priya Sharma',
                role: 'BIM Specialist',
                feedback: 'The quality control process really helped me improve my work. Now my designs are top-rated consistently.'
              },
              {
                icon: Zap,
                name: 'David Thompson',
                role: 'CAD Designer',
                feedback: 'Upload process is so smooth. I can focus on creating instead of worrying about technicalities.'
              }
            ].map((testimonial, i) => (
              <Card key={i} className="card-elevated p-6 text-center animate-slide-up" style={{ animationDelay: `${i * 200}ms` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <testimonial.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
                <p className="text-sm text-primary mb-3">{testimonial.role}</p>
                <p className="text-muted-foreground italic">"{testimonial.feedback}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Creative Journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of creators already earning from their passion. Upload your first design today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-hero">
                <Link to="/upload">Start Selling Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="smooth-transition hover:border-primary">
                <a href="https://cantilever1.vercel.app">Browse Marketplace</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
