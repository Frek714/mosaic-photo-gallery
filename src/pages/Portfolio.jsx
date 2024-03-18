import React, { Fragment, useState, useRef } from "react";
import WaveShape from "../utils/Waveshape";
import PortfolioElement from "../components/PortfolioElement";
import bannerImage from "../sources/background/wave-haikei-edit-2.png";
import PhotograpyDisplay from "../components/PhotograpyDisplay";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Power1 } from "gsap";

const images = [
  {
    imageFrist: true,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "122",
  },
  {
    imageFrist: false,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "23",
  },
  {
    imageFrist: true,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "90",
  },
  {
    imageFrist: false,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "126",
  },
  {
    imageFrist: true,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "99",
  },
  {
    imageFrist: false,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "44",
  },
  {
    imageFrist: true,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "12",
  },
  {
    imageFrist: false,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "196",
  },
  {
    imageFrist: true,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "89",
  },
  {
    imageFrist: false,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "57",
  },
  {
    imageFrist: true,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "10",
  },
  {
    imageFrist: false,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "46",
  },
  {
    imageFrist: true,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "22",
  },
  {
    imageFrist: false,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "47",
  },
  {
    imageFrist: true,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "91",
  },
  {
    imageFrist: false,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "100",
  },
  {
    imageFrist: true,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "146",
  },
  {
    imageFrist: false,
    title: "Titolo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad necessitatibus dolorum vitae tempore unde enim minima, porro rerum eaque laborum accusantium ab ipsam sint, obcaecati quia sequi? Nobis, assumenda expedita.",
    image: "39",
  },
];

const Portfolio = () => {
  const [openModalPhoto, setOpenModalPhoto] = useState(false);
  const [imageFullScreen, setImageFullScreen] = useState(null);

  const galleryContainerRef = useRef(null);

  const handleShowFullScreenImage = (image) => {
    setImageFullScreen(image || "0");
    setOpenModalPhoto(true);
  };

  useGSAP(() => {

  },{scope: galleryContainerRef})

  return (
    <Fragment>
      <div className="w-full relative z-[3]">
        {/* <WaveShape /> */}
        <img src={bannerImage} alt="" className="rounded" />
      </div>

      <div className="w-full container mx-auto px-10 md:px-14">
        <div className="flex justify-center">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-8 gap-0 mt-20 gap-y-40">
          {images.slice(0, 4).map((imgEl, index) => (
            <PortfolioElement
              key={index}
              imageFrist={imgEl.imageFrist}
              title={imgEl.title}
              text={imgEl.text}
              image={imgEl.image}
            />
          ))}
        </div>

        <div className="mt-20 mb-10 text-center">
          <h3 className="text-white text-4xl md:text-5xl lg:text-6xl">
            Gallery
          </h3>
        </div>

        <div
          // ref={galleryContainerRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20 relative"
        >
          {images.map((imgEl, index) => (
            <div
              key={index}
              id={index}
              onClick={() => handleShowFullScreenImage(imgEl.image)}
              className={"test" + index + " cursor-pointer shadow-md shadow-neutral-900 relative z-0"}
              onMouseMove={(event) => {
                const xPos = event.clientX / window.innerWidth - 0.5;
                const yPos = event.clientY / window.innerWidth - 0.5;

                // console.log("rotationX: ", 25 * xPos, "x:", -50 * xPos)
                // console.log("rotationY: ", 25 * yPos, "y:", -50 * yPos)

                gsap.to(".test" + index, {
                  duration: 0.1,
                  rotationY: 25 * yPos,
                  rotationX: 25 * xPos,
                  x: -50 * xPos,
                  y: -50 * yPos,
                  // transformPerspective: 900,
                  transformOrigin: "center",
                  ease: Power1.easeIn,
                  scale: 1.05,
                  zIndex: 1
                });
              }}
              onMouseLeave={() => {
                gsap.to(".test" + index, {
                  delay: 0.1,
                  duration: 0.2,
                  rotationY: 0,
                  rotationX: 0,
                  x: 0,
                  y: 0,
                  zIndex: 0,
                  scale: 1,
                  ease: Power1.easeIn,
                });
              }}
            >
              <img
                src={"https://picsum.photos/id/" + imgEl.image + "/800/1000"}
                alt=""
                className="rounded"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <PhotograpyDisplay
        image={imageFullScreen}
        open={openModalPhoto}
        setOpen={setOpenModalPhoto}
      />
    </Fragment>
  );
};

export default Portfolio;
