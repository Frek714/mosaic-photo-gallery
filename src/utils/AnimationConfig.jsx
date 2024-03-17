import React, { Fragment } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AnimationConfig = ({ refs, child }) => {
  const {
    galleryRef,
    mainImageRef,
    // mainImageRowColRef,
    mainImageContainerRef,
    mosaicRef,
  } = refs;

  const getMinWidth = (viewportWidth) => {
    console.log(viewportWidth);
    const breakpoints = [640, 768, 1024, 1280, 1536]; // Tailwind default values
    let minWidth = breakpoints[0];

    for (const breakpoint of breakpoints) {
      if (viewportWidth >= breakpoint) {
        minWidth = breakpoint;
      } else {
        break;
      }
    }

    console.log("width: ", minWidth);

    return minWidth;
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top top",
          end: "center bottom",
          scrub: 3,
          pin: true,
          markers: true,
        },
      });
      tl.add("reducing-container");
      tl.to(
        mainImageContainerRef.current,
        {
          marginLeft: (window.innerWidth - getMinWidth(window.innerWidth)) / 2,
          marginRight: (window.innerWidth - getMinWidth(window.innerWidth)) / 2,
        },
        "reducing-container"
      );
      tl.to(
        mainImageRef.current,
        {
          scaleX: 0.265,
          scaleY: 0.21,
          borderRadius: "0.2rem",
        },
        "reducing-container"
      );
      tl.to(
        mainImageRef.current,
        {
          translateY: 45,
        },
        "reducing-container"
      );
      tl.to(
        mosaicRef.current,
        {
          opacity: 1,
          delay: 0.2,
        },
        "reducing-container"
      );

      tl.from(
        ".zero",
        {
          scale: 6,
        },
        "reducing-container"
      );
      tl.from(
        ".uno",
        {
          translateX: -1000,
          translateY: -1000,
          opacity: 0,
          delay: 0.2,
        },
        "reducing-container"
      );
      tl.from(
        ".due",
        {
          // translateX: -1000,
          translateY: -1000,
          opacity: 0,
          delay: 0.2,
        },
        "reducing-container"
      );
      tl.from(
        ".tre",
        {
          translateX: 1000,
          translateY: -1000,
          opacity: 0,
          delay: 0.2,
        },
        "reducing-container"
      );
      tl.from(
        ".quattro",
        {
          translateX: 1200,
          translateY: -1000,
          opacity: 0,
          delay: 0.2,
        },
        "reducing-container"
      );
      tl.from(
        ".cinque",
        {
          translateX: -1000,
          translateY: 1000,
          opacity: 0,
          delay: 0.2,
        },
        "reducing-container"
      );
      tl.from(
        ".sei",
        {
          // translateX: -1000,
          translateY: 1000,
          opacity: 0,
          delay: 0.2,
        },
        "reducing-container"
      );
      tl.from(
        ".sette",
        {
          translateX: 1200,
          translateY: 500,
          opacity: 0,
          delay: 0.2,
        },
        "reducing-container"
      );
      tl.from(
        ".dieci, .otto, .nove",
        {
          // translateX: 1000,
          translateY: 2000,
          opacity: 0,
          delay: 0.2,
        },
        "reducing-container"
      );
    },
    { scope: galleryRef }
  );

  return <>{child}</>;
};

export default AnimationConfig;
