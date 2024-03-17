import React from "react";

const Card = ({ image, title, text }) => {
  return (
    <div className="border-2 border-white col-span-2 text-white text-center">
      <div className="grid grid-cols-1 grid-rows-5">
        <div className="row-span-3">
          <img
            src={"https://picsum.photos/id/" + image + "/1200/800"}
            alt=""
            className=""
            loading="lazy"
          />
        </div>
        <div className="row-span-1 flex justify-center items-center">
          <h4 className="text-2xl lg:text-3xl">{title}</h4>
        </div>
        <div className="row-span-1 px-8">
          <p className="text-xs">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
