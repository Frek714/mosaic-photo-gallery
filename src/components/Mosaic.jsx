import React from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mosaic = ({mosaicRef, foto}) => {
  
  return (
    <div ref={mosaicRef} className="h-[100vh] w-full absolute-top-center border-green-700 opacity-0 z-0">
      <div className="grid grid-rows-9 grid-cols-11 gap-4 h-[100vh]">
        <div className="row-start-1 row-end-6 col-start-1 col-end-5 rounded-2xl bg-green-300">
          {/*<span>PHOTO !!!</span>*/}
          <img src={foto} alt=""/>
        </div>
        <div className="row-start-1 row-end-5 col-start-5 col-end-8 rounded-2xl bg-purple-300">
          {/*<span>PHOTO !!!</span>*/}
          <img src={foto} alt=""/>
        </div>
        <div className="row-start-1 row-end-6 col-start-8 col-end-10 rounded-2xl bg-blue-300">
          {/*<span>PHOTO !!!</span>*/}
          <img src={foto} alt=""/>
        </div>
        <div className="row-start-1 row-end-6 col-start-10 col-end-12 rounded-2xl bg-neutral-400">
          {/*<span>PHOTO !!!</span>*/}
          <img src={foto} alt=""/>
        </div>
        <div className="row-start-6 row-end-10 col-start-1 col-end-5 rounded-2xl bg-blue-500">
          {/*<span>PHOTO !!!</span>*/}
          <img src={foto} alt=""/>
        </div>
        <div className="row-start-7 row-end-9 col-start-5 col-end-8 rounded-2xl bg-green-200">
          {/*<span>PHOTO !!!</span>*/}
          <img src={foto} alt=""/>
        </div>
        <div className="row-start-6 row-end-10 col-start-8 col-end-12 rounded-2xl bg-yellow-200">
          {/*<span>PHOTO !!!</span>*/}
          <img src={foto} alt=""/>
        </div>
        <div className="row-start-9 row-end-10 col-start-5 col-end-6 rounded-2xl bg-pink-300">
          {/*<span>PHOTO !!!</span>*/}
          <img src={foto} alt=""/>
        </div>
        <div className="row-start-9 row-end-10 col-start-6 col-end-7 rounded-2xl bg-yellow-100">
          {/*<span>PHOTO !!!</span>*/}
          <img src={foto} alt=""/>
        </div>
        <div className="row-start-9 row-end-10 col-start-7 col-end-8 rounded-2xl bg-purple-200">
          {/*<span>PHOTO !!!</span>*/}
          <img src={foto} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Mosaic;