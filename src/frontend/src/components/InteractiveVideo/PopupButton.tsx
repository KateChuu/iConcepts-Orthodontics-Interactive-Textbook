/** @format */

import { ChildrenWithClassname } from "@/common/props.types";
import clsx from "clsx";
import React, { useMemo } from "react";
import { Popover, PopoverAnchor } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import HeroicPlusIcon from "../icons/plus";
import { SizeLevel } from "./InteractiveVideo.type";
import { cn } from "@/lib/utils";

export type PopupButtonProps = ChildrenWithClassname<{
  onOpenChange: (open: boolean) => void;
  contentPosition?: React.CSSProperties;
  side?: "top" | "bottom" | "left" | "right";
  size: SizeLevel;
  open: boolean;
}>;

const PopupButton: React.FC<PopupButtonProps> = ({
  className,
  open,
  style,
  size,
  contentPosition,
  onOpenChange,
  side,
  children,
}) => {
  const fontSize = useMemo(() => {
    if (size === "sm") {
      return "text-md";
    }
    if (size === "md") {
      return "text-lg";
    }
    if (size === "lg") {
      return "text-xl";
    }
    return "text-2xl";
  }, [size]);
  const padding = useMemo(() => {
    if (size === "sm") {
      return "px-3 py-2";
    }
    if (size === "md") {
      return "px-3 py-2";
    }
    if (size === "lg") {
      return "px-4 py-3";
    }
    return "px-5 py-4";
  }, [size]);
  const buttonPadding = useMemo(() => {
    if (size === "sm") {
      return "p-1";
    }
    if (size === "md") {
      return "p-1";
    }
    return "p-2";
  }, [size]);
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <button
          style={style}
          className={clsx(
            "rounded-full bg-purple-500  flex items-center justify-center text-white",
            className,
            buttonPadding,
          )}
        >
          <HeroicPlusIcon />
        </button>
      </PopoverTrigger>
      <PopoverAnchor
        className="absolute"
        style={contentPosition}
      ></PopoverAnchor>
      <PopoverContent
        side={side}
        className="bg-amber-200 rounded-sm dark:bg-slate-600 "
        // style={contentPosition}
      >
        <div className={cn(fontSize, padding)}>{children}</div>
      </PopoverContent>
    </Popover>
  );
};
PopupButton.displayName = "PopupButton";
export default PopupButton;
