import React, { useState } from 'react';

const images = [
  "https://i.imgur.com/Uuzqf1c.jpg",
  "https://i.imgur.com/2Xt777t.jpg",
  "https://i.imgur.com/QW4KJxz.jpg",
  "https://i.imgur.com/Y8J6vvF.jpg",
  "https://i.imgur.com/nZcGDtM.jpg",
  "https://i.imgur.com/L2X8jP9.jpg"
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-50">
        <img
          src={selectedImage}
          alt="Handpan Produktbild"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="grid grid-cols-6 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-square border-2 rounded-md overflow-hidden bg-gray-50 ${
              selectedImage === image ? 'border-blue-500' : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <img 
              src={image} 
              alt={`Handpan Ansicht ${index + 1}`} 
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}