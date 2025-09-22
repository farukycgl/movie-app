import React, { useState } from "react";
import Genre from "./Genre";

const SideBar = ({setSelectedGenre}) => {

  return (
    <div className="bg-[#DECE9C] rounded-2xl p-4 sticky top-24 ">
      <Genre setSelectedGenre={setSelectedGenre} />
    </div>
  );
};

export default SideBar;
