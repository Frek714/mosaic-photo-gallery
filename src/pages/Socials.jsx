import React, {Fragment} from "react";
import bannerImage from "../sources/background/wave-haikei-edit-2.png";
import Card from "../components/Card";

const Socials = () => {
  const socials = [
    {
      title: "Instagram",
      text: "/",
      image: "123"
    },
    {
      title: "Instagram",
      text: "/",
      image: "456"
    },
    {
      title: "Instagram",
      text: "/",
      image: "789"
    },
  ];

  return (
    <Fragment>
      <div className="w-full relative z-[3]">
        {/* <WaveShape /> */}
        <img src={bannerImage} alt="" className="rounded"/>
      </div>

      <div className="w-full container mx-auto px-10 md:px-14 mt-28">
        <div className="flex justify-center">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl">
            Folow Me on:
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-6 grid-rows-1 gap-20 mt-20 mb-40">
          {socials.map((social, index) => (
            <Card
              key={index}
              image={social.image}
              title={social.title}
              text={social.text}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Socials;
