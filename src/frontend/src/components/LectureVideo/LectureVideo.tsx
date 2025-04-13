/** @format */
'use strict';
'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { ChildrenWithClassname } from '@/common/props.types';
import clsx from 'clsx';

import Video from './Video';

export type LectureVideoProps = ChildrenWithClassname<{
  src: string;
}>;
export const LectureVideo = ({
  src,
  className,
  style,
}: LectureVideoProps) => {
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
      <Video
        src={src}
        title='Lecture Video'
      />
    </div>
  );
};

LectureVideo.displayName = 'LectureVideo';
export default LectureVideo;
