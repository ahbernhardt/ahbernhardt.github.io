import React from "react";
import Gif from "/public/projects/statement/images/tw22-timberwolves-loading-white.gif";

const Loading = () => {
  return (
    <div className="bg-wolvesShadow h-screen w-screen flex justify-center items-center">
      <img src={Gif} alt="timberwolves loading white" className="w-[28rem]" />
    </div>
  );
};

export default Loading;
