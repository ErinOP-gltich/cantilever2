
import React from 'react';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Download, Heart, Edit } from 'lucide-react';

const Portfolio = () => {
  const designs = [
    { id: 1, title: 'Minimalist Logo Pack', views: 1250, downloads: 89, price: '$45', image: 'primary' },
    { id: 2, title: 'Business Card Templates', views: 890, downloads: 67, price: '$25', image: 'secondary' },
    { id: 3, title: 'Brand Identity Kit', views: 2100, downloads: 156, price: '$120', image: 'accent' },
    { id: 4, title: 'Social Media Templates', views: 1680, downloads: 134, price: '$35', image: 'primary' },
    { id: 5, title: 'Website Mockups', views: 945, downloads: 78, price: '$55', image: 'secondary' },
    { id: 6, title: 'Icon Set Collection', views: 1456, downloads: 201, price: '$30', image: 'accent' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Your <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage and showcase your creative work
              </p>
            </div>
            <Button className="btn-creator">
              Upload New Design
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs.map((design, i) => (
              <Card key={design.id} className="card-elevated overflow-hidden animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`w-full h-48 bg-gradient-to-br ${
                  design.image === 'primary' ? 'from-primary to-primary-600' :
                  design.image === 'secondary' ? 'from-primary-500 to-primary-700' :
                  'from-primary-600 to-primary'
                }`} />
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{design.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{design.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{design.downloads}</span>
                        </div>
                      </div>
                      <span className="font-semibold text-primary">{design.price}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="smooth-transition hover:border-primary">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
