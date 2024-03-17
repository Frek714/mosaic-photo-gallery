import React from "react";

const PhotograpyDisplay = ({ image, open, setOpen }) => {
  if (!open) return null;
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw] flex justify-center content-center p-10 box-glassed z-10">
      <style>{"body { overflow: hidden; }"}</style>
      <div className="absolute z-[51] top-5 right-5">
        <button
          type="button"
          className="text-white"
          onClick={() => setOpen(false)}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div id="exclude" className="h-auto pointer-events-none z-50 opacity-100">
        <img
          src={"https://picsum.photos/id/" + image + "/800/1000"}
          alt="not image prensent"
          loading="lazy"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default PhotograpyDisplay;
