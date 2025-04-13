// This component is used to display a 404 page when a user tries to access a page that does not exist.

import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
