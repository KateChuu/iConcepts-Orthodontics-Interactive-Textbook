/** @format */

'use client';

import { SignedIn, SignOutButton } from '@clerk/nextjs';
import { useState } from 'react';

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        className='fixed top-5 left-5 z-50 p-2 bg-[#f3edf7] text-black rounded-lg shadow-lg'
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? '<<' : '>>'}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#f3edf7] text-black p-5 shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className='mt-16'>
          <ul className='space-y-4'>
            <li>
              <a
                href='/'
                className='hover:bg-gray-200 transition-all block py-2 px-4 rounded'
              >
                Home
              </a>
            </li>
            
            <li>
              <a
                href='/contact'
                className='hover:bg-gray-200 transition-all block py-2 px-4 rounded'
              >
                Contact
              </a>
            </li>
            <li>
              <SignOutButton>
                <p className='hover:bg-gray-200 transition-all block py-2 px-4 rounded text-red-600 font-bold'>
                  Sign Out
                </p>
              </SignOutButton>
            </li>
          </ul>
        </nav>
      </aside>

      <main
        className={`flex transition-all duration-300 bg-gray-100 ${
          sidebarOpen ? 'ml-64 overflow-x-hidden' : 'ml-0'
        }`}
      >
        {children}
      </main>
    </>
  );
}
