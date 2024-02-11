import React, {Fragment, useRef} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import foto from "../sources/castel-sanangelo-1.jpg";
import {useGSAP} from "@gsap/react";
import Mosaic from "./Mosaic";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  // {
  //   id: 0,
  //   name: 'Photo 1',
  //   photo: foto,
  //   rowStart: '5',
  //   rowEnd: '7',
  //   colStart: '5',
  //   colEnd: '8'
  // },
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
  const mainImageRowColRef = useRef();
  const mainImageContainerRef = useRef();
  const mosaicRef = useRef();
  
  const getMinWidth = (viewportWidth) => {
    console.log(viewportWidth)
    const breakpoints = [640, 768, 1024, 1280, 1536]; // Tailwind default values
    let minWidth = breakpoints[0];
    
    for (const breakpoint of breakpoints) {
      if (viewportWidth >= breakpoint) {
        minWidth = breakpoint;
      } else {
        break;
      }
    }
    
    console.log("width: ", minWidth)
    
    return minWidth;
  }
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top top",
        end: "center bottom",
        scrub: 1,
        pin: true,
        markers: true
      }
    });
    tl.add('reducing-container')
    tl.to(mainImageContainerRef.current, {
      marginLeft: (window.innerWidth - getMinWidth(window.innerWidth)) / 2,
      marginRight: (window.innerWidth - getMinWidth(window.innerWidth)) / 2,
    }, 'reducing-container')
    tl.to(mainImageRef.current, {
      scaleX: 0.265,
      scaleY: 0.21,
      borderRadius: "1rem"
    }, 'reducing-container')
    tl.to(mainImageRef.current, {
      translateY: 45
    }, 'reducing-container')
    tl.to(mosaicRef.current, {
      opacity: 1
    }, 'reducing-container')
    // tl.pause()
    tl.add('reducing')
    tl.to(mainImageContainerRef.current, {
      css: {className: "container mx-auto h-full border-2 relative"},
    }, 'reducing')
    tl.set(mainImageRowColRef.current, {
      css: {className: "grid grid-rows-9 grid-cols-11 gap-4 h-[100vh] relative z-10"}
    }, 'reducing')
    tl.set(mainImageRef.current, {
      css: {className: "row-start-5 row-end-7 col-start-5 col-end-8 noscale bg-red-500"},
    }, 'reducing')
    
  }, {scope: galleryRef});
  
  
  return (
    <Fragment>
      <div ref={galleryRef} className="gallery h-full relative">
        <div ref={mainImageContainerRef} className="h-[100vh]">
          <div ref={mainImageRowColRef} className="h-[100vh] relative z-10">
            <div ref={mainImageRef} className="bg-red-500 h-[100vh]">
              {/*<span>PHOTO !!!</span>*/}
              <img src={foto} alt=""/>
            </div>
          </div>
          
          <Mosaic mosaicRef={mosaicRef} foto={foto}/>
        
        </div>
      </div>
      {/*<div className="h-[100vh] w-60 bg-amber-500">*/}
      
      {/*</div>*/}
    </Fragment>
  )
    ;
};

export default Gallery;