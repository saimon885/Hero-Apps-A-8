import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex items-center justify-center z-50">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mb-3"></div>

        <p className="text-xl font-semibold text-gray-700">Loading...</p>

        <div className="flex space-x-2 mt-2">
          <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse delay-75"></div>
          <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse delay-150"></div>
          <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
