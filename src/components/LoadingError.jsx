import React from "react";

const LoadingError = ({ error }) => {
  return (
    <div className="bg-amber-300 h-50 w-full flex justify-center items-center text-red-700 text-5xl">
      <p>{error}</p>
    </div>
  );
};

export default LoadingError;
