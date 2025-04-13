/** @format */

import {
  InteractiveMoment,
  InteractiveVideoNames,
} from './InteractiveVideo.type';

const keyMomentsByVideoName: Record<
  InteractiveVideoNames,
  InteractiveMoment[]
> = {
  TipTorqueBiomechanics: [
    {
      popUpPosition: {
        top: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      contentPosition: {
        top: '8%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      start: '00:00',
      content: 'Midline Diastema and AOB= Anterior Open Bite',
    },
    {
      popUpPosition: {
        top: '33%',
        left: '40%',
      },
      contentPosition: {
        top: '8%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      start: '00:20',
      content: 'Individual Tooth movements on CAD CAM',
    },
    {
      popUpPosition: {
        top: '42%',
        left: '32%',
      },
      contentPosition: {
        top: '8%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      start: '00:56',
      content: 'Correction of Molar relationship',
    },
    {
      popUpPosition: {
        top: '37%',
        right: '40%',
      },
      contentPosition: {
        top: '8%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      start: '01:44',
      content: 'Intrusion of 22 for ideal Smile Aesthetics',
    },
    {
      popUpPosition: {
        top: '44%',
        right: '35.5%',
      },
      contentPosition: {
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      start: '02:04',
      content: 'Ideal OJ OB Class I MR achieved in CAD CAM',
    },
  ],
  IteroPosteriorCrossbite: [
    {
      popUpPosition: {
        top: '60%',
        right: '25%',
      },
      contentPosition: {
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      start: '00:00',
      content: 'Posterior Crossbite Leftside',
    },
    {
      popUpPosition: {
        bottom: '19%',
        right: '25%',
      },
      contentPosition: {
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      start: '00:09',
      content: 'Unilateral Posterior Generalised CrossBite Left side',
    },
    {
      popUpPosition: {
        top: '26%',
        left: '42%',
      },
      contentPosition: {
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      start: '00:21',
      content:
        'Occlusogram with heat maps shows over loading of posterior dentition',
    },
  ],
  DeepTraumaticBite: [
    {
      popUpPosition: {
        left: '11.5%',
        bottom: '23.5%',
      },
      contentPosition: {
        bottom: '25%',
        left: '40%',
      },
      start: '00:02',
      content: 'Excessive DEEP TRAUMATIC BITE',
    },
    {
      popUpPosition: {
        left: '61.5%',
        top: '30%',
      },
      contentPosition: {
        top: '10%',
        left: '50%',
      },
      start: '00:08',
      content:
        'Excessive DEEP TRAUMATIC BITE with Attrition of anterior dentition',
    },
    {
      popUpPosition: {
        top: '50%',
        right: '35%',
      },
      contentPosition: {
        top: '23%',
        left: '60%',
      },
      start: '00:22',
      content: 'Lingual View of DEEP TRAUMATIC BITE',
    },
    {
      popUpPosition: {
        bottom: '35%',
        right: '4%',
      },
      contentPosition: {
        top: '5%',
        right: '15%',
      },
      start: '00:49',
      content:
        'Observe the TORQUE added on Upper and lower incisors with CADCAM tools',
    },
  ],
  ClassII2Cat: [
    {
      popUpPosition: {
        top: '15%',
        left: '16%',
      },
      contentPosition: {
        top: '5%',
        left: '10%',
      },
      content: 'Typical Class II /2 with lateral incisors proclined',
      start: '00:00',
    },
    {
      popUpPosition: {
        bottom: '35%',
        left: '6%',
      },
      contentPosition: {
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      content: 'Observe the Crossbite correction',
      start: '00:03',
    },
    {
      popUpPosition: {
        top: '48%',
        right: '23%',
      },
      contentPosition: {
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      content:
        'Observe the OB correction from the lingual aspect only available in CADCAM',
      start: '00:37',
    },
  ],
  ClassIIDiv: [
    {
      popUpPosition: {
        top: '25%',
        left: '36.5%',
      },
      contentPosition: {
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      start: '00:06',
      content:
        'Compare Right and Left side modifications with blue superimpositions and Table below with details for changes',
    },
    {
      popUpPosition: {
        top: '25%',
        left: '36.5%',
      },
      contentPosition: {
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      start: '00:11',
      content: 'Observe the significant change in OJ and Maxillary expansion',
    },
    {
      popUpPosition: {
        top: '25%',
        left: '36.5%',
      },
      contentPosition: {
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      start: '00:39',
      content:
        'Now observe mandibular arch and changes Green squares are extra space - LEEWAY SPACE',
    },
  ],
  AnteriorOpenBite: [
    {
      popUpPosition: {
        top: '30%',
        right: '39.7%',
      },
      contentPosition: {
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      content: 'Adult case with Skeletal Anterior Open Bite (AOB)',
      start: '00:03',
    },
    {
      popUpPosition: {
        top: '30%',
        right: '39.7%',
      },
      contentPosition: {
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      content: 'Compare the Treatment plans for ideal reduction of AOB',
      start: '00:31',
    },
    {
      popUpPosition: {
        top: '30%',
        right: '39.7%',
      },
      contentPosition: {
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      content: 'Aim for ideal OJ OB with correct inter-incisal angles',
      start: '01:08',
    },
  ],
};

export default keyMomentsByVideoName;
