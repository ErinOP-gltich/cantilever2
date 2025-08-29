
import React from 'react';
import Header from '@/components/Header';
import UploadArea from '@/components/UploadArea';

const Upload = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Upload Your <span className="gradient-text">Creative Work</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Share your designs with the world and start earning from your creativity
            </p>
          </div>
          
          <UploadArea />
        </div>
      </div>
    </div>
  );
};

export default Upload;
