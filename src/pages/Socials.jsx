import React, { Fragment } from "react";
import bannerImage from "../sources/background/wave-haikei-edit-2.png";

const Socials = () => {
  const socials = [
    {
      social: "Instagram",
      link: "/",
    },
    {
      social: "Instagram",
      link: "/",
    },
    {
      social: "Instagram",
      link: "/",
    },
  ];

  return (
    <Fragment>
      <div className="w-full relative z-[1]">
        {/* <WaveShape /> */}
        <img src={bannerImage} alt="" className="rounded" />
      </div>

      <div className="w-full container mx-auto px-10 md:px-14">
        <div className="flex justify-center">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl">
            Folow Me on:
          </h2>
        </div>

        <div className="h-full md:flex md:justify-center md:content-center">
          {socials.map((social) => (
            <div className="border-red">
              <h3>{social.social}</h3>
              <p>test</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Socials;
