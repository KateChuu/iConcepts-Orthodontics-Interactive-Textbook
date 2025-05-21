'use client';
import { useEffect, useState } from 'react';
type ImageItem = {
    src: string;
    caption?: string;
};
type Props = {
    images: ImageItem[];
};
export default function ImageGallery({ images }: Props) {
    const validImages = Array.isArray(images)
        ? images.filter(
                (img) => img && typeof img.src === 'string' && img.src.trim() !== ''
        )
        : [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
    };
    const goToNext = () => {
        setCurrentIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
    };
    // Add keyboard arrow support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goToPrev();
            if (e.key === 'ArrowRight') goToNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);
    if (validImages.length === 0) {
        return <div className="text-center text-red-500">No valid images available.</div>;
    }
    const currentImage = validImages[currentIndex];
    return (
        <div
            className="relative w-full max-w-xs mx-auto"
            role="region"
            aria-label="Image gallery"
            tabIndex={0} // Makes it focusable via keyboard
        >
            <img
                src={currentImage.src}
                alt={currentImage.caption || `Image ${currentIndex + 1}`}
                className="rounded shadow-md w-full"
            />
            {currentImage.caption && (
                <p className="text-sm italic text-zinc-500 mt-2 text-center">{currentImage.caption}</p>
            )}
            {/* Previous button */}
            <button
                onClick={goToPrev}
                className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Previous image"
                tabIndex={0}
            >
                ‹
            </button>
            {/* Next button */}
            <button
                onClick={goToNext}
                className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Next image"
                tabIndex={0}
            >
                ›
            </button>
            {/* Pagination info */}
            <div className="text-center mt-2 text-sm text-gray-500" aria-live="polite">
                Image {currentIndex + 1} of {validImages.length}
            </div>
        </div>
    );
}