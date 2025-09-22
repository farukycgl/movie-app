import React from "react";

const PageContent = ({ children}) => {
  return (
    <div className="flex-grow pt-20">
      <main>{children}</main>
    </div>
  );
};

export default PageContent;
