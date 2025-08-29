import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Star, Heart } from 'lucide-react';

const ViewExamples = () => {
  const examples = [
    {
      id: 1,
      title: 'Modern Office Building BIM Family',
      creator: 'Sarah Chen',
      rating: 4.8,
      downloads: 1240,
      price: 45,
      tags: ['BIM', 'Revit', 'Commercial'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    },
    {
      id: 2,
      title: 'Residential Stair Details',
      creator: 'Michael Rodriguez',
      rating: 4.9,
      downloads: 890,
      price: 32,
      tags: ['CAD', 'DWG', 'Residential'],
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400',
    },
    {
      id: 3,
      title: 'Contemporary Kitchen Spec Template',
      creator: 'Priya Sharma',
      rating: 4.7,
      downloads: 650,
      price: 28,
      tags: ['Spec', 'Template', 'Interior'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    },
    {
      id: 4,
      title: 'PBR Material Pack - Concrete',
      creator: 'David Thompson',
      rating: 4.9,
      downloads: 1560,
      price: 55,
      tags: ['Render', 'Materials', 'PBR'],
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Examples</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover high-quality architectural assets from our top creators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examples.map((example, i) => (
              <Card key={example.id} className="card-elevated overflow-hidden animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold line-clamp-2">{example.title}</h3>
                    <p className="text-sm text-muted-foreground">by {example.creator}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {example.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{example.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{example.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${example.price}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="btn-hero">
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-hero">
              <a href="https://cantilever1.vercel.app">View Full Marketplace</a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ViewExamples;