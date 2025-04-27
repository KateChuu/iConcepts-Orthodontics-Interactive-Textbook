'use client';

import { useState } from 'react';

type ImageItem = {
    src: string;
    caption?: string;
};

type Props = {
    images: ImageItem[];
};

export default function ImageGallery({ images }: Props) {
    // Check if images is a valid array and contains at least one image
    if (!Array.isArray(images) || images.length === 0) {
        return (
            <div className="text-center text-red-500">
                No images available.
            </div>
        );
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-xs mx-auto">
            <img
                src={images[currentIndex].src}
                alt={`Gallery ${currentIndex + 1}`}
                className="rounded shadow-md w-full"
            />
            {images[currentIndex].caption && (
                <p className="text-sm italic text-zinc-500 mt-2 text-center">
                    {images[currentIndex].caption}
                </p>
            )}
            
            {/* Left Arrow */}
            <button
                onClick={goToPrev}
                className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
                aria-label="Previous image"
            >
                ‹
            </button>

            {/* Right Arrow */}
            <button
                onClick={goToNext}
                className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
                aria-label="Next image"
            >
                ›
            </button>

            {/* Optional: Image counter */}
            <div className="text-center mt-2 text-sm text-gray-500">
                Image {currentIndex + 1} of {images.length}
            </div>
        </div>
    );
}