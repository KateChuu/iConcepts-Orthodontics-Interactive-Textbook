'use client';

import React, { use, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faExpand, faCompress, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'; // Add icons for forward and backward


interface VideoProps {
    src: string;
    className?: string; 
    style?: React.CSSProperties; 
}

const Video: React.FC<VideoProps> = ({ src, className, style }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [played, setPlayed] = useState(0);  // Percentage of video played
    const [controlsVisible, setControlsVisible] = useState(true);

    let controlstimer: NodeJS.Timeout | null = null;

    // Hide controls after 10 seconds of inactivity
    const resetControlsTimer = () => {
        if (controlstimer) {
            clearTimeout(controlstimer);
        }
        controlstimer = setTimeout(() => {
            setControlsVisible(false);
        }, 3000);
    };

    // Show controls when mouse moves
    const handleMouseMove = () => {
        setControlsVisible(true);
        resetControlsTimer();
    }

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            setPlayed(videoRef.current.currentTime / videoRef.current.duration); // Set played percentage
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPlayed = parseFloat(e.target.value);
        setPlayed(newPlayed);
        if (videoRef.current) {
            videoRef.current.currentTime = newPlayed * videoRef.current.duration; // Seek to new position based on played %
        }
    };

    const toggleFullscreen = () => {
        if (containerRef.current) {
            if (!document.fullscreenElement) {
                containerRef.current.requestFullscreen().then(() => {
                    setIsFullscreen(true);
                }).catch(err => console.error("Failed to enter fullscreen", err));
            } else if (document.exitFullscreen) {
                document.exitFullscreen().then(() => {
                    setIsFullscreen(false);
                }).catch(err => console.error("Failed to exit fullscreen", err));
            }
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const videoLen = () => {
        if (videoRef.current) {
            return videoRef.current.duration;
        }
        return 0;
    }

    const rewind = (seconds: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - seconds);
            setCurrentTime(videoRef.current.currentTime);
            setPlayed(videoRef.current.currentTime / videoRef.current.duration);
        }
    };

    const fastForward = (seconds: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + seconds);
            setCurrentTime(videoRef.current.currentTime);
            setPlayed(videoRef.current.currentTime / videoRef.current.duration);
        }
    };

    useEffect(() => {
        // add mousemove event listener to video container
        const videoContainer = containerRef.current;
        if (videoContainer) {
            videoContainer.addEventListener('mousemove', handleMouseMove);
        }
        
        return () => {
            if (videoContainer) {
                videoContainer.removeEventListener('mousemove', handleMouseMove);
            }
            if (controlstimer) {
                clearTimeout(controlstimer);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full max-w-[800px] mx-auto">
            <video 
                ref={videoRef} 
                src={src} 
                className={`w-full h-auto bg-black ${className}`} 
                style={style} 
                controls={false} 
                onContextMenu={(e) => e.preventDefault()}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
            <div className={`video-controls ${controlsVisible ? 'visible' : 'hidden'}`}>
                <div className="relative group">
                    <button onClick={togglePlayPause} className="bg-transparent border-none text-white py-1.5 px-4 text-base rounded cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black">
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                        <span className="invisible group-hover:visible bg-gray-800 text-white text-center rounded py-1 px-2 absolute z-10 top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Play</span>
                    </button>
                </div>

                <div className="relative group">
                    <button onClick={() => rewind(10)} className="bg-transparent border-none text-white py-1.5 px-4 text-base rounded cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black">
                        <FontAwesomeIcon icon={faBackward} />
                        <span className="invisible group-hover:visible bg-gray-800 text-white text-center rounded py-1 px-2 absolute z-10 top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Rewind 10 seconds</span>
                    </button>
                </div>

                <div className="relative group">
                    <button onClick={() => fastForward(10)} className="bg-transparent border-none text-white py-1.5 px-4 text-base rounded cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black">
                        <FontAwesomeIcon icon={faForward} />
                        <span className="invisible group-hover:visible bg-gray-800 text-white text-center rounded py-1 px-2 absolute z-10 top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Fast forward 10 seconds</span>
                    </button>
                </div>

                <div className="text-white text-sm mx-2 flex-shrink-0">
                    {formatTime(currentTime)} / {formatTime(videoLen())}
                </div>

                <input 
                    type="range"
                    min="0" 
                    max={1} 
                    step="any"
                    value={played} 
                    onChange={handleSeekChange} 
                    className="w-full h-1 bg-gray-300 outline-none opacity-70 transition-opacity duration-200 rounded"
                    style={{ background: `linear-gradient(to right, #1be468 ${played * 100}%, #ddd ${played * 100}%)` }}
                />

                <div className="relative group">
                    <button onClick={toggleFullscreen} className="bg-transparent border-none text-white py-1.5 px-4 text-base rounded cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black">
                        <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
                        <span className="invisible group-hover:visible bg-gray-800 text-white text-center rounded py-1 px-2 absolute z-10 top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Toggle fullscreen</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Video;
