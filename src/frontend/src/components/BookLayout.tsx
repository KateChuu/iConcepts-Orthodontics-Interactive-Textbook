// components/BookLayout.tsx
import React, { ReactNode } from 'react';

interface BookLayoutProps {
  children: ReactNode;
}

const BookLayout = ({ children }: BookLayoutProps) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen p-12 bg-gray-100">
      <div className="relative w-[1800px] h-full flex flex-col p-12 bg-white shadow-lg mx-auto">
        {children}
      </div>
    </div>
  );
};

export default BookLayout;