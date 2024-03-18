import React from "react";

const Mosaic = ({ photos, isAbsolute, k }) => {
  return (
    <div
      className={`${
        isAbsolute ? "absolute-top-center" : "block"
      } h-full w-full z-0 p-5 lg:px-36`}
    >
      <div className="grid grid-rows-9 grid-cols-12 gap-4 h-full">
        {photos.map((photoObj, index) => {
          const { rowStart, rowEnd, colStart, colEnd } = photoObj.style;
          return (
            <div
              key={photoObj.id + index}
              className={`${photoObj.id} row-start-${rowStart} row-end-${rowEnd} col-start-${colStart} col-end-${colEnd} shadow-xl`}
            >
              <img
                src={photoObj.photo}
                alt=""
                className=""
                loading="lazy"
              />
              {/*<img*/}
              {/*  src={"https://picsum.photos/id/" + (Math.random() * 200).toFixed(0) + "/800/1000"}*/}
              {/*  alt=""*/}
              {/*  className="rounded"*/}
              {/*  loading="lazy"*/}
              {/*/>*/}
            </div>
          );
        })}

        {/* <div className=" row-start-5 row-end-7 col-start-5 col-end-9 rounded-2xl shadow-xl">
          <img
            src="https://picsum.photos/id/55/2000/4000"
            alt=""
            className="rounded-2xl"
          />
        </div>  */}
        {/* <div className=" row-start-1 row-end-4 col-start-1 col-end-7 rounded-2xl shadow-xl">
          <img
            src="https://picsum.photos/id/51/2000/4000"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className=" row-start-1 row-end-4 col-start-7 col-end-13 rounded-2xl shadow-xl">
          <img
            src="https://picsum.photos/id/48/2000/4000"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className=" row-start-4 row-end-7 col-start-1 col-end-4 rounded-2xl shadow-xl">
          <img
            src="https://picsum.photos/id/56/2000/4000"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className=" row-start-4 row-end-10 col-start-10 col-end-13 rounded-2xl shadow-xl">
          <img
            src="https://picsum.photos/id/62/2000/4000"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className=" row-start-7 row-end-13 col-start-1 col-end-4 rounded-2xl shadow-xl">
          <img
            src="https://picsum.photos/id/60/2000/4000"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className=" row-start-7 row-end-13 col-start-4 col-end-7 rounded-2xl shadow-xl">
          <img
            src="https://picsum.photos/id/64/2000/4000"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className=" row-start-7 row-end-13 col-start-7 col-end-10 rounded-2xl shadow-xl">
          <img
            src="https://picsum.photos/id/58/2000/4000"
            alt=""
            className="rounded-2xl"
          />
        </div> */}

        {/*<div className="row-start-1 row-end-6 col-start-1 col-end-5 rounded-2xl bg-green-300">*/}
        {/*  /!*<span>PHOTO !!!</span>*!/*/}
        {/*  <img src={foto} alt=""/>*/}
        {/*</div>*/}
        {/*<div className="row-start-1 row-end-5 col-start-5 col-end-9 rounded-2xl bg-purple-300">*/}
        {/*  /!*<span>PHOTO !!!</span>*!/*/}
        {/*  <img src={foto} alt=""/>*/}
        {/*</div>*/}
        {/*<div className="row-start-1 row-end-6 col-start-9 col-end-11 rounded-2xl bg-blue-300">*/}
        {/*  /!*<span>PHOTO !!!</span>*!/*/}
        {/*  <img src={foto} alt=""/>*/}
        {/*</div>*/}
        {/*<div className="row-start-1 row-end-6 col-start-11 col-end-13 rounded-2xl bg-neutral-400">*/}
        {/*  /!*<span>PHOTO !!!</span>*!/*/}
        {/*  <img src={foto} alt=""/>*/}
        {/*</div>*/}
        {/*<div className="row-start-6 row-end-10 col-start-1 col-end-5 rounded-2xl bg-blue-500">*/}
        {/*  /!*<span>PHOTO !!!</span>*!/*/}
        {/*  <img src={foto} alt=""/>*/}
        {/*</div>*/}
        {/*<div className="row-start-7 row-end-9 col-start-5 col-end-9 rounded-2xl bg-green-200">*/}
        {/*  /!*<span>PHOTO !!!</span>*!/*/}
        {/*  <img src={foto} alt=""/>*/}
        {/*</div>*/}
        {/*<div className="row-start-6 row-end-10 col-start-9 col-end-13 rounded-2xl bg-yellow-200">*/}
        {/*  /!*<span>PHOTO !!!</span>*!/*/}
        {/*  <img src={foto} alt=""/>*/}
        {/*</div>*/}
        {/*<div className="row-start-9 row-end-10 col-start-5 col-end-6 rounded-2xl bg-pink-300">*/}
        {/*  /!*<span>PHOTO !!!</span>*!/*/}
        {/*  <img src={foto} alt=""/>*/}
        {/*</div>*/}
        {/*<div className="row-start-9 row-end-10 col-start-6 col-end-7 rounded-2xl bg-yellow-100">*/}
        {/*  /!*<span>PHOTO !!!</span>*!/*/}
        {/*  <img src={foto} alt=""/>*/}
        {/*</div>*/}
        {/*<div className="row-start-9 row-end-10 col-start-7 col-end-9 rounded-2xl bg-purple-200">*/}
        {/*  /!*<span>PHOTO !!!</span>*!/*/}
        {/*  <img src={foto} alt=""/>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Mosaic;
