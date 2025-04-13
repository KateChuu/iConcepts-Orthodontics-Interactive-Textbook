/** @format */
"use client";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { ClassNameProp } from "@/common/props.types";
import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaPlayerProps,
  MediaProvider,
  useMediaState,
} from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import { InteractiveMoment, SizeLevel } from "./InteractiveVideo.type";
import { parsePercentage, parseTime } from "@/lib/utils";
import PopupButton from "./PopupButton";
import { useVideoDimensions } from "./hooks";
import { set } from "lodash";

type VideoProps = Omit<MediaPlayerProps, "ref" | "children"> & {
  keyMoments?: InteractiveMoment[];
};

const VideoWithKeyMoments: React.FC<VideoProps> = ({
  keyMoments,

  ...playerProps
}) => {
  const markers = keyMoments?.map((moment) => ({
    time: parseTime(moment.start),
    label: "",
  }));

  const playerRef = useRef<MediaPlayerInstance>(null);
  const currentTime = useMediaState("currentTime", playerRef);
  const [shouldAutoResume, setShouldAutoResume] = useState(true);
  const [popupOpened, setPopupOpened] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const currentInteractiveMoments = useMemo(() => {
    return (
      keyMoments?.filter((moment) => {
        const start = parseTime(moment.start);
        const end = moment.end ? parseTime(moment.end) : start + 5;
        return currentTime >= start && currentTime <= end;
      }) || []
    );
  }, [currentTime, keyMoments]);
  const isFullScreen = useMediaState("fullscreen", playerRef);
  const mediaHeight = useMediaState("mediaHeight", playerRef);
  const mediaWidth = useMediaState("mediaWidth", playerRef);

  const { borders: _borders, actualVideoSize } = useVideoDimensions(
    playerRef.current?.$el?.querySelector("video"),
  );
  const size = useMemo(() => {
    if (mediaWidth < 400) {
      return "sm";
    }
    if (mediaWidth < 600) {
      return "md";
    }
    if (mediaWidth < 800) {
      return "lg";
    }
    return "xl";
  }, [mediaWidth]);
  const borders = useMemo(
    () => (!isFullScreen ? { top: 0, left: 0, right: 0, bottom: 0 } : _borders),
    [isFullScreen, _borders],
  );
  const videoSize = useMemo(
    () =>
      isFullScreen
        ? actualVideoSize
        : {
            width: mediaWidth,
            height: mediaHeight,
          },
    [isFullScreen, mediaHeight, mediaWidth, actualVideoSize],
  );

  const computeButtonOffset = useCallback(
    (style: React.CSSProperties): React.CSSProperties => {
      const { top, left, right, bottom, ...rest } = style;
      const topOffset =
        top !== undefined
          ? parsePercentage(top as string) * videoSize.height + borders.top
          : undefined;
      const leftOffset = left
        ? parsePercentage(left as string) * videoSize.width + borders.left
        : undefined;
      const rightOffset = right
        ? parsePercentage(right as string) * videoSize.width + borders.right
        : undefined;
      const bottomOffset = bottom
        ? parsePercentage(bottom as string) * videoSize.height + borders.bottom
        : undefined;

      const res = {
        ...rest,
        top: top ? `${topOffset}px` : undefined,
        left: left ? `${leftOffset}px` : undefined,
        right: right ? `${rightOffset}px` : undefined,
        bottom: bottom ? `${bottomOffset}px` : undefined,
      };
      return res;
    },
    [borders, videoSize],
  );
  const buttons = currentInteractiveMoments?.map((moment, index) => {
    return (
      <PopupButton
        open={popupOpened}
        size={size}
        key={`${playerProps.src}-key-moments-${index}`}
        className="absolute"
        style={computeButtonOffset(moment.popUpPosition || {})}
        contentPosition={moment.contentPosition}
        onOpenChange={async function (open: boolean) {
          console.log("onOpenChange", open);
          if (open) {
            await playerRef.current?.pause();
          } else {
            await playerRef.current?.play();
          }
          setPopupOpened(open);
        }}
      >
        {moment.content}
      </PopupButton>
    );
  });

  return (
    <div className="relative">
      <MediaPlayer
        onLoadedData={() => setLoaded(true)}
        onPlay={() => {
          setPopupOpened(false);
          setTimeout(() => playerRef.current?.play(), 200);
        }}
        {...playerProps}
        ref={playerRef}
        onEnd={() => setShouldAutoResume(false)}
        className="relative"
      >
        <MediaProvider />
        <PlyrLayout
          icons={plyrLayoutIcons}
          slots={{
            pipButton: null,
            download: null,
          }}
          markers={markers}
        />
        {loaded && buttons}
      </MediaPlayer>
    </div>
  );
};

VideoWithKeyMoments.displayName = "Video";
export default VideoWithKeyMoments;
