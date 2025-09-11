import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full items-center h-30 px-5 bg-gray-800 text-white">
      <div className="flex items-center justify-start gap-2 flex-1">
        <h1 className="text-5xl">Footter</h1>
      </div>
      <div className="flex-1 flex justify-center">
        <h1>center</h1>
      </div>
      <div className="flex-1 flex justify-end">
        <h1>right</h1>
      </div>
    </div>
  );
};

export default Footer;
