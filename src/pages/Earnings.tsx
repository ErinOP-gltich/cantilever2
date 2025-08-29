
import React from 'react';
import Header from '@/components/Header';
import EarningsChart from '@/components/EarningsChart';

const Earnings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Your <span className="gradient-text">Earnings Dashboard</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Track your progress and optimize your creative business
            </p>
          </div>
          
          <EarningsChart />
        </div>
      </div>
    </div>
  );
};

export default Earnings;
