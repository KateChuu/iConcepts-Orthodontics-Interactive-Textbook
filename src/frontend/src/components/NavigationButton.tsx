/** @format */

'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface NavigationButtonProps {
  direction: 'left' | 'right';
  target: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  target,
}) => {
  const router = useRouter();
  const positionClass = direction === 'left' ? 'left-4' : 'right-4';

  return (
    <button
      onClick={() => router.push(target)}
      className={`fixed ${positionClass} top-1/2 transform -translate-y-1/2 bg-gray-200 p-4 opacity-30 hover:opacity-100`}
      data-testid={direction === 'left' ? 'previousPage' : 'nextPage'}
    >
      {direction === 'left' ? '<' : '>'}
    </button>
  );
};

export default NavigationButton;
