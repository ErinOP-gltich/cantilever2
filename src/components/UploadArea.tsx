
import React, { useState } from 'react';
import { Upload, Image, FileText, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const UploadArea = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <Card className="card-elevated p-8">
        <div
          className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
            dragActive 
              ? 'border-primary bg-primary/5 scale-105' 
              : 'border-muted hover:border-primary/50 hover:bg-primary/5'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            accept="image/*,.pdf,.ai,.psd,.sketch"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Drop your designs here</h3>
              <p className="text-muted-foreground">
                Support for images, PDFs, AI, PSD, and Sketch files
              </p>
              <p className="text-sm text-muted-foreground">
                Or <span className="text-primary font-medium">browse files</span> from your computer
              </p>
            </div>
          </div>
        </div>
      </Card>

      {files.length > 0 && (
        <Card className="card-elevated p-6 animate-slide-up">
          <h3 className="text-lg font-semibold mb-4">Uploaded Files</h3>
          <div className="space-y-3">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-surface-elevated rounded-lg hover-lift">
                <div className="flex items-center space-x-3">
                  {file.type.startsWith('image/') ? (
                    <Image className="h-5 w-5 text-primary" />
                  ) : (
                    <FileText className="h-5 w-5 text-primary" />
                  )}
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(index)}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card className="card-elevated p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Design Details</h3>
          <div className="grid gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Title</label>
              <Input placeholder="Enter your design title" className="smooth-transition focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Description</label>
              <Textarea 
                placeholder="Describe your design, inspiration, and usage rights..." 
                rows={4}
                className="smooth-transition focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Input placeholder="e.g., Logo, Illustration" className="smooth-transition focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Price ($)</label>
                <Input type="number" placeholder="0.00" className="smooth-transition focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
          </div>
          
          <Button className="btn-creator w-full mt-6" disabled={files.length === 0}>
            Publish Design
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UploadArea;
