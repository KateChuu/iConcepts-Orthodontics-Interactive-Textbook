/** @format */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseTime(time: string) {
  const [minutes, seconds] = time.split(':').map(Number);
  return minutes * 60 + seconds;
}

export const parsePercentage = (value: string) => {
  return parseFloat(value) / 100;
};
