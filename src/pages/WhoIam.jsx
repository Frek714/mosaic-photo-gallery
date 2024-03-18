import React, { Fragment } from "react";
import PortfolioElement from "../components/PortfolioElement";
import Card from "../components/Card";

const WhoIam = () => {
  const config = {
    imageFrist: true,
    title: "About me",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "334",
  };

  const jobsConfig = [
    {
      title: "Nature",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima.",
      image: "999",
    },
    {
      title: "Landscapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima.",
      image: "287",
    },
    {
      title: "Wildlife",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima.",
      image: "222",
    },
    {
      title: "Travel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima.",
      image: "222",
    },
  ];

  return (
    <div className="w-full container mx-auto px-10 md:px-14 mt-28">
      <div className="grid grid-cols-9 grid-rows-1 gap-0 mt-20 gap-y-40 relative">
        <div className="border-2 border-white col-span-9 md:col-span-5">
          <img
            src={"https://picsum.photos/id/" + config.image + "/1200/800"}
            alt=""
            className=""
            loading="lazy"
          />
        </div>
        <div className="col-span-8 md:col-end-10 md:col-span-5 absolute -bottom-20 sm:bottom-8 md:top-8 lg:top-1/4 p-5 bg-black">
          <div className="text-white flex flex-col justify-center h-full">
            <h3 className="text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl">
              {config.title}
            </h3>
            <span className="text-xs md:text-xs lg:text-sm xl:text-md mt-6">
              {config.text}
            </span>
          </div>
        </div>
      </div>

      <div className="my-40 mb-10 text-center text-white flex flex-col justify-center content-center items-center">
        <h3 className="text-4xl md:text-5xl lg:text-6xl mb-4">What i do</h3>
        <p className="text-xs max-w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          necessitatibus dolorum vitae tempore unde enim minima, porro rerum
          eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis,
          assumenda expedita.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-8 grid-rows-1 gap-5">
        {jobsConfig.map((job, index) => (
          <Card
            key={index}
            image={job.image}
            title={job.title}
            text={job.text}
          />
        ))}
      </div>

      <div className="my-40 mb-10 text-center text-white flex flex-col justify-center content-center items-center">
        <h3 className="text-4xl md:text-5xl lg:text-6xl mb-6">Contact me</h3>
        <p className="text-sm sm:text-md">
          zoriography@gmail.com
        </p>
      </div>
    </div>
  );
};

export default WhoIam;
