import React from "react";

const PageContent = ({ children }) => {
  return (
    <div className="flex-grow">
      <main>{children}</main>
    </div>
  );
};

export default PageContent;
