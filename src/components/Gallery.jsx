import React, {Fragment, useRef} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import aurora from "../sources/compressed/aurora su strada-min.png";
import cervo from "../sources/compressed/cervo-edited-min.png";
import cervoHarem from "../sources/compressed/cervo-harem-1-min.jpg";
import viaLattea from "../sources/compressed/via-lattea-min.png";
import cascata from "../sources/compressed/cascata-camosciara-2-min.jpg"
import daino from "../sources/compressed/daino-2-min.jpg"
import farfallaFrutta from "../sources/compressed/farfalla-gialla-frutta-min.jpg"
import farfallaFoglia from "../sources/compressed/farfalla-sotto-foglia-min.jpg"
import luna from "../sources/compressed/luna-piena-3-min.jpg";
import montagna from "../sources/compressed/montagna-noir-min.jpg";
import ruscello from "../sources/compressed/ruscello-camosciara-1-min.jpg";
import {useGSAP} from "@gsap/react";
import Mosaic from "./Mosaic";

gsap.registerPlugin(ScrollTrigger);


const photos = [
  {
    id: 'zero',
    name: 'Photo 1',
    photo: aurora,
    style: {
      rowStart: '5',
      rowEnd: '7',
      colStart: '5',
      colEnd: '9'
    },
    bg: 'bg-green-300'
  },
  {
    id: 'uno',
    name: 'Photo 1',
    photo: cervoHarem,
    style: {
      rowStart: '1',
      rowEnd: '6',
      colStart: '1',
      colEnd: '5'
    },
    bg: 'bg-green-300'
  },
  {
    id: 'due',
    name: 'Photo 2',
    photo: montagna,
    style: {
      rowStart: '1',
      rowEnd: '5',
      colStart: '5',
      colEnd: '9'
    },
    bg: 'bg-purple-300'
  },
  {
    id: 'tre',
    name: 'Photo 3',
    photo: cervo,
    style: {
      rowStart: '1',
      rowEnd: '6',
      colStart: '9',
      colEnd: '11'
    },
    bg: 'bg-blue-300'
  },
  {
    id: 'quattro',
    name: 'Photo 4',
    photo: viaLattea,
    style: {
      rowStart: '1',
      rowEnd: '6',
      colStart: '11',
      colEnd: '13'
    },
    bg: 'bg-neutral-400'
  },
  {
    id: 'cinque',
    name: 'Photo 5',
    photo: ruscello,
    style: {
      rowStart: '6',
      rowEnd: '10',
      colStart: '1',
      colEnd: '5'
    },
    bg: 'bg-blue-500'
  },
  {
    id: 'sei',
    name: 'Photo 6',
    photo: farfallaFoglia,
    style: {
      rowStart: '7',
      rowEnd: '9',
      colStart: '5',
      colEnd: '7'
    },
    bg: 'bg-green-200'
  },
  {
    id: 'sette',
    name: 'Photo 7',
    photo: daino,
    style: {
      rowStart: '6',
      rowEnd: '10',
      colStart: '9',
      colEnd: '13'
    },
    bg: 'bg-yellow-200'
  },
  {
    id: 'otto',
    name: 'Photo 8',
    photo: farfallaFrutta,
    style: {
      rowStart: '9',
      rowEnd: '10',
      colStart: '5',
      colEnd: '6'
    },
    bg: 'bg-pink-300'
  },
  {
    id: 'nove',
    name: 'Photo 9',
    photo: luna,
    style: {
      rowStart: '9',
      rowEnd: '10',
      colStart: '6',
      colEnd: '7'
    },
    bg: 'bg-yellow-100'
  },
  {
    id: 'dieci',
    name: 'Photo 10',
    photo: cascata,
    style: {
      rowStart: '7',
      rowEnd: '10',
      colStart: '7',
      colEnd: '9'
    },
    bg: 'bg-purple-200'
  }
]

const photos2 = [
  {
    id: 'zero2',
    name: 'Photo 1',
    photo: aurora,
    style: {
      rowStart: '1',
      rowEnd: '6',
      colStart: '1',
      colEnd: '10'
    },
    bg: 'bg-green-300'
  },
  {
    id: 'uno2',
    name: 'Photo 1',
    photo: cervoHarem,
    style: {
      rowStart: '1',
      rowEnd: '5',
      colStart: '10',
      colEnd: '13'
    },
    bg: 'bg-green-300'
  },
  {
    id: 'due2',
    name: 'Photo 2',
    photo: montagna,
    style: {
      rowStart: '5',
      rowEnd: '7',
      colStart: '10',
      colEnd: '13'
    },
    bg: 'bg-purple-300'
  },
  {
    id: 'tre2',
    name: 'Photo 3',
    photo: cervo,
    style: {
      rowStart: '7',
      rowEnd: '10',
      colStart: '10',
      colEnd: '13'
    },
    bg: 'bg-blue-300'
  },
  {
    id: 'quattro2',
    name: 'Photo 4',
    photo: viaLattea,
    style: {
      rowStart: '8',
      rowEnd: '10',
      colStart: '5',
      colEnd: '10'
    },
    bg: 'bg-neutral-400'
  },
  {
    id: 'cinque2',
    name: 'Photo 5',
    photo: ruscello,
    style: {
      rowStart: '6',
      rowEnd: '10',
      colStart: '1',
      colEnd: '5'
    },
    bg: 'bg-blue-500'
  },
  {
    id: 'sei2',
    name: 'Photo 6',
    photo: farfallaFoglia,
    style: {
      rowStart: '6',
      rowEnd: '8',
      colStart: '5',
      colEnd: '8'
    },
    bg: 'bg-green-200'
  },
  {
    id: 'sette2',
    name: 'Photo 7',
    photo: daino,
    style: {
      rowStart: '6',
      rowEnd: '8',
      colStart: '8',
      colEnd: '10'
    },
    bg: 'bg-yellow-200'
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
        scrub: 1.5,
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
      borderRadius: "0.2rem"
    }, 'reducing-container')
    tl.to(mainImageRef.current, {
      translateY: 45
    }, 'reducing-container')
    tl.to(mosaicRef.current, {
      opacity: 1,
      delay: 0.2
    }, 'reducing-container')
    
    tl.from('.zero', {
      scale: 6
    }, 'reducing-container')
    tl.from('.uno', {
      translateX: -1000,
      translateY: -1000,
      opacity: 0,
      delay: 0.2
    }, 'reducing-container')
    tl.from('.due', {
      // translateX: -1000,
      translateY: -1000,
      opacity: 0,
      delay: 0.2
    }, 'reducing-container')
    tl.from('.tre', {
      translateX: 1000,
      translateY: -1000,
      opacity: 0,
      delay: 0.2
    }, 'reducing-container')
    tl.from('.quattro', {
      translateX: 1200,
      translateY: -1000,
      opacity: 0,
      delay: 0.2
    }, 'reducing-container')
    tl.from('.cinque', {
      translateX: -1000,
      translateY: 1000,
      opacity: 0,
      delay: 0.2
    }, 'reducing-container')
    tl.from('.sei', {
      // translateX: -1000,
      translateY: 1000,
      opacity: 0,
      delay: 0.2
    }, 'reducing-container')
    tl.from('.sette', {
      translateX: 1200,
      translateY: 500,
      opacity: 0,
      delay: 0.2
    }, 'reducing-container')
    tl.from('.dieci, .otto, .nove', {
      // translateX: 1000,
      translateY: 2000,
      opacity: 0,
      delay: 0.2
    }, 'reducing-container')
    
  }, {scope: galleryRef});
  
  
  return (
    <Fragment>
      <div ref={galleryRef} className="gallery h-full relative">
        <div ref={mainImageContainerRef} className="h-[100vh]">
          <Mosaic mosaicRef={mosaicRef} photos={photos} isAbsolute k={12}/>
        </div>
        <div className="h-[210vh] mt-4">
          <Mosaic mosaicRef={mosaicRef} photos={photos2} isAbsolute={false} k={44}/>
        </div>
      </div>
    </Fragment>
  )
    ;
};

export default Gallery;