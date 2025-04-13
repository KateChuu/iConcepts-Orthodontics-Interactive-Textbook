/** @format */
'use strict';
'use client';

import React, { useMemo, useRef, useState } from 'react';
import {
    MediaPlayer,
    MediaPlayerInstance,
    MediaPlayerProps,
    MediaProvider,
    useMediaState,
  } from '@vidstack/react';
  import {
    PlyrLayout,
    plyrLayoutIcons,
  } from '@vidstack/react/player/layouts/plyr';

  type VideoProps = Omit<MediaPlayerProps, 'ref' | 'children'>;

  const LectureVideo: React.FC<VideoProps> = ({ ...playerProps }) => {
    const playerRef = useRef<MediaPlayerInstance>(null);
    const [shouldAutoResume, setShouldAutoResume] = useState(true);
  
    return (
      <MediaPlayer
        {...playerProps}
        ref={playerRef}
        onEnd={() => setShouldAutoResume(false)}
        className='relative'
      >
        <MediaProvider />
        <PlyrLayout
          icons={plyrLayoutIcons}
          slots={{
            pipButton: null,
            download: null,
          }}
        />
      </MediaPlayer>
    );
  };
  
  LectureVideo.displayName = 'Video';
  export default LectureVideo;
  
