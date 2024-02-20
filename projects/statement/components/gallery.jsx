import React from "react";

const Gallery = ({ gallerySlide, changeGrid, imageIdx }) => {
  return (
    <div className="w-full h-auto">
      <div
        id="gallery"
        className="grid grid-cols-2 grid-flow-row gap-2 overflow-auto max-h-[70vw] md:max-h-[30vw]"
      >
        {gallerySlide.map((image, idx) => (
          <a
            key={image.id}
            onClick={() => changeGrid(idx)}
            className="cursor-pointer"
            href={image.url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={
                imageIdx === idx
                  ? "saturate-100 w-full h-full object-cover fillAvail bg-wolvesWhite"
                  : "saturate-100 w-full h-full object-cover fillAvail bg-wolvesWhite"
              }
              src={image.image}
              alt={image.description}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
