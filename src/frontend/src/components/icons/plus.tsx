/** @format */

import { ClassNameProp } from '@/common/props.types';
import { cn } from '@/lib/utils';

const HeroicPlusIcon: React.FC<ClassNameProp> = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={4}
    stroke='currentColor'
    className={cn('w-6 h-6', className)}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 4.5v15m7.5-7.5h-15'
    />
  </svg>
);

HeroicPlusIcon.displayName = 'HeroicPlusIcon';
export default HeroicPlusIcon;
