import React from "react";

const Card = ({ details }) => {
  return (
    <>
      <div className="card bg-base-200 shadow-sm">
        <figure>
          <img
            className="w-full aspect-video object-contain"
            src={details?.urlToImage}
            alt={details.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-2">{details?.title}</h2>
          <p className="line-clamp-3">{details.description}</p>
          <div className="card-actions justify-end mt-4">
            <button
              onClick={() => window.open(details?.url)}
              className=" badge-outline btn">
              Full Story
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
