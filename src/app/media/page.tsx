'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react';
import Image from 'next/image';

interface BlobImage {
  url: string;
  pathname: string;
}

export default function MediaPage() {
  const [images, setImages] = useState<BlobImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/list');
      const data = await response.json();
      setImages(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadStatus('uploading');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: 'POST',
        body: file,
      });

      if (!response.ok) throw new Error('Upload failed');

      const blob = await response.json();
      setImages([...images, { url: blob.url, pathname: blob.pathname }]);
      setUploadStatus('success');
      setTimeout(() => setUploadStatus('idle'), 2000);
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus('error');
      setTimeout(() => setUploadStatus('idle'), 2000);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') goToNext();
      if (event.key === 'ArrowLeft') goToPrevious();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [images.length]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-green-500 p-8">
        <div className="text-xl font-mono">Loading media assets...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-500 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <div className="font-mono text-sm mb-2">$ cat media_gallery.txt</div>
          <h1 className="text-3xl font-bold mb-4">Media Gallery</h1>
          <div className="flex items-center space-x-4">
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="flex items-center space-x-2 bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition-colors">
                <Upload size={20} />
                <span>Upload Image</span>
              </div>
            </label>
            {uploadStatus === 'uploading' && (
              <span className="text-yellow-500">Uploading...</span>
            )}
            {uploadStatus === 'success' && (
              <span className="text-green-500">Upload successful!</span>
            )}
            {uploadStatus === 'error' && (
              <span className="text-red-500">Upload failed. Please try again.</span>
            )}
          </div>
        </header>

        {images.length > 0 ? (
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[currentIndex].url}
                alt={`Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full">
              <span className="font-mono">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-900 rounded-lg">
            <p className="text-xl font-mono">No images uploaded yet.</p>
            <p className="text-sm mt-2">Upload some images to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}