/** @format */

export type InteractiveMoment = {
  start: DurationStr;
  end?: string;
  content: string;
  popUpPosition?: React.CSSProperties;
  contentPosition?: React.CSSProperties;
};
export type DurationStr = `${number}:${number}`;

export enum InteractiveVideoNames {
  TipTorqueBiomechanics = 'TipTorqueBiomechanics',
  IteroPosteriorCrossbite = 'IteroPosteriorCrossbite',
  DeepTraumaticBite = 'DeepTraumaticBite',
  ClassII2Cat = 'ClassII2Cat',
  ClassIIDiv = 'ClassIIDiv',
  AnteriorOpenBite = 'AnteriorOpenBite',
}

export type SizeLevel = 'sm' | 'md' | 'lg' | 'xl';
