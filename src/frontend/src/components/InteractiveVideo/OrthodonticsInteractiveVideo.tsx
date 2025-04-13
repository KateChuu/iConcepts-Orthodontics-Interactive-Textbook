/** @format */

import { ClassNameProp } from '@/common/props.types';
import keyMomentsByVideoName from './keyMoments';
import InteractiveVideo from './InteractiveVideo';

export enum InteractiveVideoNames {
  TipTorqueBiomechanics = 'TipTorqueBiomechanics',
  IteroPosteriorCrossBite = 'IteroPosteriorCrossbite',
  DeepTraumaticBite = 'DeepTraumaticBite',
  ClassII2Cat = 'ClassII2Cat',
  ClassIIDiv = 'ClassIIDiv',
  AnteriorOpenBite = 'AnteriorOpenBite',
}

export type OrthodonticsInteractiveVideoProps = ClassNameProp & {
  name: InteractiveVideoNames;
};

export const srcByVideoName: Record<InteractiveVideoNames, string> = {
  TipTorqueBiomechanics: '/interactive-videos/TipTorqueBiomechanics.mov',
  IteroPosteriorCrossbite: '/interactive-videos/IteroPosteriorCrossbite.mov',
  AnteriorOpenBite: '/interactive-videos/AnteriorOpenBite.mov',
  ClassII2Cat: '/interactive-videos/ClassII2Cat.mov',
  ClassIIDiv: '/interactive-videos/ClassIIDiv.mov',
  DeepTraumaticBite: '/interactive-videos/DeepTraumaticBite.mov',
};
const OrthodonticsInteractiveVideo: React.FC<
  OrthodonticsInteractiveVideoProps
> = ({ name, className, style }) => {
  const keyMoments = keyMomentsByVideoName[name];
  const src = srcByVideoName[name];
  return (
    <InteractiveVideo
      keyMoments={keyMoments}
      className={className}
      src={src}
      style={style}
    />
  );
};

export default OrthodonticsInteractiveVideo;
