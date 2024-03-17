import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Power3, Bounce } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { name: "Zoriography", href: "/home" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Who I am", href: "/who-i-am" },
  { name: "Socials", href: "/socials" },
  { name: "Buy", href: "/buy" },
];

const Hero = () => {
  const [isHome, setIsHome] = useState(false);
  const [navExpand, setNavExpand] = useState(false);

  const scrollDownTextRef = useRef(null);
  const heroContainerRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    setIsHome(location.pathname.includes("home") || location.pathname === "/");
  }, [location]);

  const getLinksListed = () => {
    return links
      .filter((link) => {
        return isHome ? !link.href.includes("home") : link;
      })
      .map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={`mx-8 text-white hover:font-bold ${
            navExpand ? "my-4" : ""
          } ${isHome ? "my-4 text-xs sm:text-sm md:text-base lg:text-lg" : ""}`}
          onClick={() => setIsHome(false)}
        >
          {link.name}
        </Link>
      ));
  };

  useGSAP(
    () => {
      const tlBounce = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tlBounce.to(".scroll-text", {
        y: -30,
        duration: 1,
        ease: Power3.easeOut,
      });
      tlBounce.to(".scroll-text", { y: 0, duration: 1, ease: Bounce.easeOut });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollDownTextRef.current,
          start: "bottom bottom",
          end: "bottom +=600",
          scrub: 2,
          // markers: true,
        },
      });

      tl.add("fade-scroll-text");
      tl.to(
        ".scroll-text",
        {
          opacity: 0,
          delay: 0.1,
        },
        "fade-scroll-text"
      );
      ScrollTrigger.refresh();
    },
    { scope: heroContainerRef }
  );

  return (
    <div
      className={`${isHome ? " relative h-[100vh]" : "relative z-[4]"}`}
      ref={heroContainerRef}
    >
      <div className="relative overflow-hidden bg-transparent flex flex-col justify-center content-center h-full w-full">
        <div className="mx-auto w-full">
          {/* HERO */}
          <div
            className={`mx-auto w-full text-center ${!isHome ? "hidden" : ""}`}
          >
            <h2 className="tracking-tight text-white font-manifesto font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
              <a href="/home" onClick={() => setIsHome(true)}>
                Zoriography
              </a>
            </h2>
            <p className="mt-5 leading-8 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Federico D'Ursi
            </p>
          </div>
          {/* NAVBAR */}
          <div
            className={`mt-6 flex justify-end pr-5 ${
              !isHome ? "fixed top-0 w-full" : "flex justify-center"
            }`}
          >
            <div className="text-lg font-light leading-7 text-white md:flex hidden z-50 text-center ">
              {getLinksListed()}
            </div>
            {isHome ? (
              <div className="md:hidden flex flex-col text-center">
                {getLinksListed()}
              </div>
            ) : (
              <div className={`md:hidden mr-4 z-50`}>
                <button
                  type="button"
                  className="text-white"
                  onClick={() => setNavExpand(!navExpand)}
                >
                  <span className="material-symbols-outlined">
                    {navExpand ? "close" : "menu"}
                  </span>
                </button>
              </div>
            )}
            {navExpand && (
              <div
                className="bg-transparent w-[100vw] h-[100vh] -mt-5 absolute"
                onClick={() => setNavExpand(false)}
              >
                <div className="w-2/3 h-full fixed top-0 right-0 box-glassed flex flex-col text-center pt-20">
                  {getLinksListed()}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="scroll-text w-full flex flex-col justify-center content-center items-center absolute bottom-0 text-neutral-400"
          ref={scrollDownTextRef}
        >
          <span className="text-xs">Scroll down</span>
          <span className="material-symbols-outlined text-3xl">
            arrow_downward_alt
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
