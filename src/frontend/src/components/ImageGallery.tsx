'use client';

import { useState } from 'react';

type Props = {
    images: string[];
};

export default function ImageGallery({ images }: Props) {
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
                src={images[currentIndex]}
                alt={`Gallery ${currentIndex + 1}`}
                className="rounded shadow-md w-full"
            />

            {/* Left Arrow */}
            <button
                onClick={goToPrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
                aria-label="Previous image"
            >
                ‹
            </button>

            {/* Right Arrow */}
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
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
