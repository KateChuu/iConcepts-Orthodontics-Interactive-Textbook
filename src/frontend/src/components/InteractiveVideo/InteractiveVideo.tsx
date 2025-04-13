/** @format */
'use strict';
'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { ChildrenWithClassname } from '@/common/props.types';
import PopupButton from './PopupButton';
import clsx from 'clsx';

import { parseTime } from '@/lib/utils';
import VideoWithKeyMoments from './Video';
import { MediaPlayerInstance, useMediaState } from '@vidstack/react';
import { InteractiveMoment, SizeLevel } from './InteractiveVideo.type';

export type InteractiveVideoProps = ChildrenWithClassname<{
  src: string;
  keyMoments: InteractiveMoment[];
}>;
export const InteractiveVideo = ({
  src,
  className,
  style,
  keyMoments,
}: InteractiveVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
    containerRef.current?.addEventListener('resize', () => {
      setWidth(containerRef.current?.offsetWidth || 0);
    });
  }, []);

  return (
    <div className={clsx(className)} style={style} ref={containerRef}>
      <VideoWithKeyMoments
        src={src}
        title='Interactive Video'
        keyMoments={keyMoments}
      />
    </div>
  );
};

InteractiveVideo.displayName = 'InteractiveVideo';
export default InteractiveVideo;
