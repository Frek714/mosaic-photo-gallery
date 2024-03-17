import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-48 bg-image opacity-90 pt-16">
      <div className="flex flex-col justify-center content-center text-center">
        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-neutral-400 mb-4 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>Zoriography</p>
        <p className="text-xs font-light italic text-neutral-400">This website and all the photos on that is property of D'Ursi Federico. <br/>Nobody is authorized to take and use any photo for commercial use.</p>
      </div>
    </div>
  );
};

export default Footer;
