'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const formatLabel = (segment: string) => {
    return segment.replace(/([a-z])([0-9])/g, '$1\u00A0$2').replace(/^./, str => str.toUpperCase());
  };

const BreadcrumbBar: React.FC = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter(path => path);

  if (pathArray.length === 0) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 text-sm text-gray-600">
        <li>
        <Link href="/" className="hover:text-blue-400 text-base">Home</Link>
        </li>
        {pathArray.map((path, idx) => {
          const routePath = `/${pathArray.slice(0, idx + 1).join('/')}`;
          const isLast = idx === pathArray.length - 1;
          const label = formatLabel(path);

          return (
            <li key={routePath} className="flex items-center">
              <span className="mx-2">{'>'}</span>
              {!isLast ? (
                <Link href={routePath} className="hover:text-blue-400 text-base">
                  {label}
                </Link>
              ) : (
                <span className="text-gray-500 text-base">{label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbBar;
