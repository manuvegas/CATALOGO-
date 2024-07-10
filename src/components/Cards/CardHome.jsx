import { Link } from "react-router-dom";
import React from "react";

const CardHome = ({ title, img }) => {
  return (
    <div className="relative hover:-translate-y-2 hover:-translate-x-0 w-full hover:bg-base-200 transition-all duration-500">
      <Link to={`/CardGarments/${title}`}>
        <figure className="w-full h-full">
          <img
            src={img}
            alt={title}
            className="text-neutral-50 rounded-lg border border-opacity-5"
            loading="lazy"
          />
        </figure>
      </Link>
    </div>
  );
};

export default CardHome;
