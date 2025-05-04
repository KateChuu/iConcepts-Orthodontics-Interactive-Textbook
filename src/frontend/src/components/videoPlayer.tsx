'use client';

import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  cloudName: string;
  publicId: string;
  sourceUrl: string;
  videoId: string;
  interactiveButtons?: React.ReactNode;
  caption?: string;
}

export default function VideoPlayer({
  cloudName,
  publicId,
  sourceUrl,
  videoId,
  interactiveButtons,
  caption,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run in the browser
    async function setupAnalytics() {
      if (videoRef.current && typeof window !== 'undefined') {
        const { connectCloudinaryAnalytics } = await import('cloudinary-video-analytics');
        const analytics = connectCloudinaryAnalytics(videoRef.current);
        analytics.startManualTracking({
          cloudName,
          publicId,
        });
      }
    }

    setupAnalytics();
  }, [cloudName, publicId]);

  const handleFullscreen = () => {
    if (containerRef.current?.requestFullscreen) {
      containerRef.current.requestFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[960px] mx-auto"
      style={{ aspectRatio: '16/9' }}
    >
      <video
        ref={videoRef}
        id={videoId}
        controls
        className="w-full h-full object-contain bg-black"
      >
        <source src={sourceUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={handleFullscreen}
        className="absolute top-2 right-2 bg-white bg-opacity-80 text-black text-xs px-2 py-1 rounded shadow-md z-50"
      >
        Fullscreen
      </button>

      {interactiveButtons}

      {caption && (
        <p className="text-sm italic text-gray-500 text-center mt-2">
          {caption}
        </p>
      )}
    </div>
  );
}
