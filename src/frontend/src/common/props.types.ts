/** @format */
import React from 'react';
export interface StyleProp {
  style?: React.CSSProperties;
}
export interface ClassNameProp extends StyleProp {
  className?: string;
}

export type ChildrenWithClassname<T = {}> = React.PropsWithChildren<
  ClassNameProp & T
>;
