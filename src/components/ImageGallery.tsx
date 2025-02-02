'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Image {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ImageGalleryProps {
  images: Image[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <div className="relative">
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative aspect-square cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg transition-opacity group-hover:opacity-90"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-black rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-video">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1536px) 100vw, 1536px"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white mb-2">{selectedImage.title}</h2>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}; 
