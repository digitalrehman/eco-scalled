import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 text-center">
      <h1 className="text-7xl md:text-9xl font-extrabold text-[#0065B1]">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-4 mb-8 max-w-md">
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-[#0065B1] hover:bg-[#00529c] text-white font-semibold px-6 py-3 rounded-md transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
