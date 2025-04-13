import React from 'react';

interface PageNumberProps {
  page: number; // The page number to display
}

const PageNumber: React.FC<PageNumberProps> = ({ page }) => {
  return (
    <div className="absolute bottom-4 right-4">
      {page}
    </div>
  );
};

export default PageNumber;