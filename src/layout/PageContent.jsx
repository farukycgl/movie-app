import React from "react";

const PageContent = ({ children}) => {
  return (
    <div className="flex-grow md:pt-20 lg:pt-20 overflow-x-hidden">
      <main>{children}</main>
    </div>
  );
};

export default PageContent;
