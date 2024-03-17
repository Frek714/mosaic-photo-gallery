import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { name: "Zoriography", href: "/home" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Who I am", href: "/who-i-am" },
  { name: "Socials", href: "/socials" },
  { name: "Buy", href: "/buy" },
];

const Navbar = () => {

  const [isHome, setIsHome] = useState(false);
  const [navExpand, setNavExpand] = useState(false);

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

  return (
    <div className={`${isHome ? " relative h-full" : "relative z-[2]"}`}>
      <div className="relative overflow-hidden bg-transparent flex flex-col justify-center content-center h-full w-full">
        <div className="mx-auto w-full">
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
              <div className="w-2/3 h-full fixed top-0 right-0 box-glassed flex flex-col text-center pt-20">
                {getLinksListed()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
