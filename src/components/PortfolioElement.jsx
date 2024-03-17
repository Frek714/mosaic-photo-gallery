import React, { Fragment, useEffect, useState, useCallback } from "react";

const PortfolioElement = ({ imageFrist, title, text, image }) => {
  const [width, seiWidth] = useState(window.innerWidth);

  useEffect(() => {
    const reportWindowSize = () => {
      seiWidth(window.innerWidth);
      // console.log("effect: ", window.innerWidth);
    };
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  const imageEl = (
    <div
      className={`border-2 border-white col-span-8 ${
        imageFrist ? "md:col-span-3" : "md:col-end-9 md:col-span-3"
      }`}
    >
      <img
        src={"https://picsum.photos/id/" + image + "/800/1000"}
        alt=""
        className="rounded"
        // loading="lazy"
      />
    </div>
  );

  const textEl = (
    <div
      className={`text-center text-white flex flex-col justify-center col-span-8 ${
        imageFrist ? "md:col-end-9 md:col-span-4" : "md:col-span-4"
      }`}
    >
      <h3 className="text-4xl">{title}</h3>
      <span className="text-xl mt-6">{text}</span>
    </div>
  );

  return (
    <Fragment>
      {width > 768 ? (
        imageFrist ? (
          <Fragment>
            {imageEl} {textEl}
          </Fragment>
        ) : (
          <Fragment>
            {textEl} {imageEl}
          </Fragment>
        )
      ) : (
        <Fragment>
          {imageEl} {textEl}
        </Fragment>
      )}
    </Fragment>
  );
};

export default PortfolioElement;
