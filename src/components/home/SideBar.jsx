import React, { useState } from "react";
import Genre from "./Genre";

const SideBar = ({setSelectedGenre}) => {

  return (
    <div>
      <Genre setSelectedGenre={setSelectedGenre} />
    </div>
  );
};

export default SideBar;
