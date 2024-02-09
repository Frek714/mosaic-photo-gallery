import React, {useRef, useState} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import foto from "../sources/castel-sanangelo-1.jpg";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  {
    id: 0,
    name: 'Photo 1',
    photo: foto,
    rowStart: '5',
    rowEnd: '7',
    colStart: '5',
    colEnd: '8'
  },
  {
    id: 1,
    name: 'Photo 1',
    photo: foto,
    rowStart: '1',
    rowEnd: '6',
    colStart: '1',
    colEnd: '5'
  },
  {
    id: 2,
    name: 'Photo 2',
    photo: foto,
    rowStart: '1',
    rowEnd: '5',
    colStart: '5',
    colEnd: '8'
  },
  {
    id: 3,
    name: 'Photo 3',
    photo: foto,
    rowStart: '1',
    rowEnd: '6',
    colStart: '8',
    colEnd: '10'
  },
  {
    id: 4,
    name: 'Photo 4',
    photo: foto,
    rowStart: '1',
    rowEnd: '6',
    colStart: '10',
    colEnd: '12'
  },
  {
    id: 5,
    name: 'Photo 5',
    photo: foto,
    rowStart: '6',
    rowEnd: '12',
    colStart: '1',
    colEnd: '5'
  },
  {
    id: 6,
    name: 'Photo 6',
    photo: foto,
    rowStart: '7',
    rowEnd: '9',
    colStart: '5',
    colEnd: '8'
  },
  {
    id: 7,
    name: 'Photo 7',
    photo: foto,
    rowStart: '6',
    rowEnd: '12',
    colStart: '8',
    colEnd: '12'
  },
  {
    id: 8,
    name: 'Photo 8',
    photo: foto,
    rowStart: '9',
    rowEnd: '12',
    colStart: '5',
    colEnd: '6'
  },
  {
    id: 9,
    name: 'Photo 9',
    photo: foto,
    rowStart: '9',
    rowEnd: '12',
    colStart: '6',
    colEnd: '7'
  },
  {
    id: 10,
    name: 'Photo 10',
    photo: foto,
    rowStart: '9',
    rowEnd: '12',
    colStart: '7',
    colEnd: '8'
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
        {/*  <img src={foto} alt=""/>*/}
      </div>
      
      <div className="container h-[100vh] mx-auto border-2 border-red-900">
        <div className="grid grid-rows-9 grid-cols-11 gap-4 h-full w-full m-0 p-0">
          {
            photos.map((photo, index) => {
              const {id, rowStart, rowEnd, colStart, colEnd} = photo;
              return <div key={index + id.toString()}
                          className={`row-start-${rowStart} row-end-${rowEnd} col-start-${colStart} col-end-${colEnd} rounded-2xl`}>
                {/*  IMG  */}
                <img src={photo.photo} alt="" className="object-fill hw-full"/>
              </div>
            })
          }
        </div>
      
      </div>
    
    
    </div>
  );
};

export default Gallery;