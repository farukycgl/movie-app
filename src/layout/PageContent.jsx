import React from "react";

const PageContent = ({ children }) => {
  return (
    <div className="flex-grow mx-50">
      <main>{children}</main>
    </div>
  );
};

export default PageContent;
