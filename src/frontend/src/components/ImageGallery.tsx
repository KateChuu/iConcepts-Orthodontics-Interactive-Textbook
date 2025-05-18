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
    // Filter out invalid image objects
    const validImages = Array.isArray(images)
        ? images.filter(
                (img) => img && typeof img.src === 'string' && img.src.trim() !== ''
        )
        : [];

    const [currentIndex, setCurrentIndex] = useState(0);

    if (validImages.length === 0) {
        return (
            <div className="text-center text-red-500">
                No valid images available.
            </div>
        );
    }

    const goToPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? validImages.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prev) =>
            prev === validImages.length - 1 ? 0 : prev + 1
        );
    };

    const currentImage = validImages[currentIndex];

    return (
        <div className="relative w-full max-w-xs mx-auto">
            <img
                src={currentImage.src}
                alt={`Gallery ${currentIndex + 1}`}
                className="rounded shadow-md w-full"
            />
            {currentImage.caption && (
                <p className="text-sm italic text-zinc-500 mt-2 text-center">
                    {currentImage.caption}
                </p>
            )}

            <button
                onClick={goToPrev}
                className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
                aria-label="Previous image"
            >
                ‹
            </button>

            <button
                onClick={goToNext}
                className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
                aria-label="Next image"
            >
                ›
            </button>

            <div className="text-center mt-2 text-sm text-gray-500">
                Image {currentIndex + 1} of {validImages.length}
            </div>
        </div>
    );
}
