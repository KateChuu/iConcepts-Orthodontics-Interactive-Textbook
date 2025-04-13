/* @format */

import { useCallback, useEffect, useMemo, useState } from 'react';

export const useHandlers = () => {
  const handleTimeupdate = useCallback(
    (event: HTMLVideoElementEventMap['timeupdate']) => {
      console.log('timeupdate', event);
    },
    []
  );

  return {
    handleTimeupdate,
  };
};

function detectBlackBorders(videoElement: HTMLVideoElement) {
  // Get the actual dimensions of the video element
  const videoWidth = videoElement.videoWidth;
  const videoHeight = videoElement.videoHeight;

  // Get the dimensions of the screen (or container)
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Calculate the aspect ratios
  const videoAspectRatio = videoWidth / videoHeight;
  const windowAspectRatio = windowWidth / windowHeight;

  let borderSize = { top: 0, bottom: 0, left: 0, right: 0 };

  // Determine where the black borders are
  if (videoAspectRatio > windowAspectRatio) {
    console.log('Black bars on top and bottom');
    const scaleRatio = windowWidth / videoWidth;
    const scaledHeight = videoHeight * scaleRatio;
    // The video is wider than the container, black bars on top and bottom
    const borderHeight = (windowHeight - scaledHeight) / 2;
    borderSize.top = borderHeight;
    borderSize.bottom = borderHeight;
  } else {
    console.log('Black bars on left and right');
    const scaleRatio = windowHeight / videoHeight;
    const scaledWidth = videoWidth * scaleRatio;
    console.log('scaledWidth', scaledWidth);
    console.log('windowWidth', windowWidth);
    // The video is taller than the container, black bars on left and right
    const borderWidth = (windowWidth - scaledWidth) / 2;
    borderSize.left = borderWidth;
    borderSize.right = borderWidth;
  }

  return borderSize;
}

export const useVideoDimensions = (videoEl?: HTMLVideoElement | null) => {
  'use client';
  const [borders, setBorders] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });
  const [actualVideoSize, setActualVideoSize] = useState({
    width: 0,
    height: 0,
  });
  const calcActualVideoSize = useCallback(() => {
    if (!videoEl) {
      return {
        width: 0,
        height: 0,
      };
    }
    const videoWidth = videoEl.videoWidth;
    const videoHeight = videoEl.videoHeight; // avoid division by zero
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const videoAspectRatio = videoWidth! / videoHeight!;
    const windowAspectRatio = windowWidth / windowHeight;
    console.log('videoAspectRatio', videoWidth, videoHeight, videoAspectRatio);
    if (videoAspectRatio > windowAspectRatio) {
      console.log();
      const scaleRatio = windowWidth / videoWidth;
      const scaledHeight = videoHeight * scaleRatio;
      return {
        width: windowWidth,
        height: scaledHeight,
      };
    } else {
      const scaleRatio = windowHeight / videoHeight;
      const scaledWidth = videoWidth * scaleRatio;
      return {
        width: scaledWidth,
        height: windowHeight,
      };
    }
  }, [videoEl]);

  const memoedDetectBlackBorders = useCallback(() => {
    if (!videoEl) {
      return;
    }
    const borderSize = detectBlackBorders(videoEl);
    const videosize = calcActualVideoSize();
    setActualVideoSize(videosize);
    setBorders(borderSize);
  }, [calcActualVideoSize, videoEl]);
  useEffect(() => {
    window.addEventListener('resize', memoedDetectBlackBorders);
    return () => {
      window.removeEventListener('resize', memoedDetectBlackBorders);
    };
  }, [memoedDetectBlackBorders]);
  return { borders, memoedDetectBlackBorders, actualVideoSize };
};

// Example usage
