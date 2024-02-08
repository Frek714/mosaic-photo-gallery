import React, {useRef, useState} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import foto from "../sources/castel-sanangelo-1.jpg";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  {
    id: 1,
    name: 'Photo 1',
    photo: foto
  },
  {
    id: 2,
    name: 'Photo 2',
    photo: foto
  },
  {
    id: 3,
    name: 'Photo 3',
    photo: foto
  },
  {
    id: 4,
    name: 'Photo 4',
    photo: foto
  },
  {
    id: 5,
    name: 'Photo 5',
    photo: foto
  },
  {
    id: 6,
    name: 'Photo 6',
    photo: foto
  },
  {
    id: 7,
    name: 'Photo 7',
    photo: foto
  }
]

const Gallery = () => {
  
  const galleryRef = useRef();
  const mainImageRef = useRef();
  
  const [end, setEnd] = useState(false);
  
  useGSAP(() => {
    
    console.log(window.innerHeight)
    
    // gsap.to(mainImageRef.current, {
    //   scrollTrigger: {
    //     trigger: mainImageRef.current,
    //     start: "200px top",
    //     // end: () => "+=" + document.querySelector(".main-image").offsetWidth,
    //     end: "bottom top",
    //     scrub: true,
    //     onEnter: ({progress, direction, isActive}) => {
    //       console.log(progress, direction, isActive);
    //       setEnd(false);
    //     },
    //     onEnterBack: ({progress, direction, isActive}) => {
    //       console.log(progress, direction, isActive);
    //       setEnd(false);
    //     },
    //     onLeave: ({progress, direction, isActive}) => {
    //       console.log(progress, direction, isActive);
    //       setEnd(true);
    //     },
    //     markers: {
    //       startColor: "green", endColor: "red", fontSize: "16px", fontWeight: "normal", indent: 0,
    //     },
    //   },
    //   // width: "500px",
    //   // top: "50%",
    //   // left: "50%",
    //   // xPercent: -50,
    //   // yPercent: -50,
    //   scale: 0.2,
    //   marginTop: "-35px"
    // })
    
  }, {scope: galleryRef}) // <-- scope for selector text (optional)
  
  useGSAP(() => {
    gsap.set(mainImageRef.current, {
      opacity: end ? 0 : 1
    })
  }, [end]);
  
  return (
    <div ref={galleryRef} className="gallery hw-full z-[1] border-red">
      <div ref={mainImageRef} className="main-image fixed border-blue w-full top-0 left-0 scale-[0.19] mt-[-35px]">
      {/*<div ref={mainImageRef} className="main-image fixed border-blue w-full top-0 left-0">*/}
        <img src={foto} alt=""/>
      </div>
      
      <div className="container h-[100vh] mx-auto border-2 border-red-900">
        <div className="grid grid-rows-9 grid-cols-11 gap-4 h-full w-full m-0 p-0">
          <div className="row-start-5 row-end-7 col-start-5 col-end-8 rounded-2xl bg-amber-500">
            {/*  IMG  */}
          </div>
          <div className="row-start-1 row-end-6 col-start-1 col-end-5 rounded-2xl bg-green-300">
            {/*  IMG  */}
          </div>
          <div className="row-start-1 row-end-5 col-start-5 col-end-8 rounded-2xl bg-purple-300">
            {/*  IMG  */}
          </div>
          <div className="row-start-1 row-end-6 col-start-8 col-end-10 rounded-2xl bg-blue-300">
            {/*  IMG  */}
          </div>
          <div className="row-start-1 row-end-6 col-start-10 col-end-12 rounded-2xl bg-neutral-400">
            {/*  IMG  */}
          </div>
          <div className="row-start-6 row-end-12 col-start-1 col-end-5 rounded-2xl bg-blue-500">
            {/*  IMG  */}
          </div>
          <div className="row-start-7 row-end-9 col-start-5 col-end-8 rounded-2xl bg-green-200">
            {/*  IMG  */}
          </div>
          <div className="row-start-6 row-end-12 col-start-8 col-end-12 rounded-2xl bg-yellow-200">
            {/*  IMG  */}
          </div>
          <div className="row-start-9 row-end-12 col-start-5 col-end-6 rounded-2xl bg-pink-300">
            {/*  IMG  */}
          </div>
          <div className="row-start-9 row-end-12 col-start-6 col-end-7 rounded-2xl bg-yellow-100">
            {/*  IMG  */}
          </div>
          <div className="row-start-9 row-end-12 col-start-7 col-end-8 rounded-2xl bg-purple-200">
            {/*  IMG  */}
          </div>
        </div>
      </div>
    
    
    </div>
  );
};

export default Gallery;