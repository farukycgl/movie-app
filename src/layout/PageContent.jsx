import React from "react";

const PageContent = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-amber-600 mx-50">
      <main>{children}</main>
    </div>
  );
};

export default PageContent;
