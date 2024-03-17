import React, { Fragment, useEffect, useRef, useState } from "react";
// import Gallery from "../components/Gallery";
// import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Mosaic from "../components/Mosaic";
import { photos, photos2 } from "../utils/ImageConfig";
import { redirect, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const galleryRef = useRef();
  // const mainImageRef = useRef();
  // const mainImageRowColRef = useRef();
  const mainImageContainerRef = useRef();
  const secondImageContainerRef = useRef();
  const secondImageRef = useRef();
  // const mosaicRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     ScrollTrigger.refresh();
  //     console.log("scrolltrigger refresh!");
  //   }, 100);
  // }, [])

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("scrolltrigger refresh!");
      // loading && setLoading(false);
    }, 100);

    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      const tlFade = gsap.timeline({
        scrollTrigger: {
          trigger: mainImageContainerRef.current,
          start: "top +=800",
          end: "top center",
          scrub: 2,
          // pin: true,
          // markers: true,
        },
      });
      tlFade.add("fade-zero");
      tlFade.from(
        ".zero",
        {
          opacity: 0,
          // delay: 0.1,
        },
        "fade-zero"
      );
      ScrollTrigger.refresh();
    },
    { scope: mainImageContainerRef, revertOnUpdate: true }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainImageContainerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
          pin: true,
          // markers: true,
        },
      });

      tl.add("reducing-container");
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
          translateY: 2000,
          opacity: 0,
          delay: 0.2,
        },
        "reducing-container"
      );
      ScrollTrigger.refresh();
    },
    { scope: mainImageContainerRef, revertOnUpdate: true }
  );

  useGSAP(
    () => {
      const tlSecond = gsap.timeline({
        scrollTrigger: {
          trigger: secondImageContainerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          // pin: secondImageContainerRef.current,
          // markers: true,
        },
      });
      tlSecond.add("inner-second-images");
      tlSecond.from(
        ".uno2, .due2, .tre2",
        {
          translateY: 800,
          opacity: 0,
          delay: 0.2,
        },
        "inner-second-images"
      );
      tlSecond.from(
        ".zero2, .quattro2, .cinque2",
        {
          translateY: 500,
          opacity: 0,
          delay: 0.5,
        },
        "inner-second-images"
      );
      tlSecond.from(
        ".sei2, .sette2, .otto2",
        {
          translateY: 300,
          opacity: 0,
          delay: 0.8,
        },
        "inner-second-images"
      );
      ScrollTrigger.refresh();
    },
    { scope: secondImageContainerRef }
  );

  // if (loading) {
  //   return <span class="material-symbols-outlined">progress_activity</span>;
  // }

  return (
    <Fragment>
      <div ref={mainImageContainerRef} className="h-[100vh] relative mt-8 z-[2]">
        <Mosaic photos={photos} isAbsolute k={12} />
      </div>
      <div ref={secondImageContainerRef} className="h-[100vh] relative z-[2]">
        <Mosaic photos={photos2} isAbsolute={false} k={44} />
      </div>
    </Fragment>
  );
};

export default Home;
