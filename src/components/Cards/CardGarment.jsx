import React, { useState } from "react";

const CardGarment = ({
  titulo,
  imgs,
  descripcion,
  colors,
  articulo,
  material,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300); // Tiempo de la transición en milisegundos
  };

  const handleNextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 400); // Tiempo de la transición en milisegundos
  };
  return (
    <div className=" rounded-lg overflow-hidden shadow-2xl bg-white">
      <div className="relative">
        <img
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          src={imgs[currentImageIndex]}
          alt={titulo}
          loading="lazy"
        />
        <button
          onClick={handlePrevImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          {"<"}
        </button>
        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          {">"}
        </button>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <h2 className="font-bold text-xl ">{titulo}</h2>
          <p className="font-bold text-xl">ART: {articulo}</p>
        </div>
        <p className="mb-1">{descripcion}</p>
        <div className="flex gap-2">
          <span className="font-bold">Material:</span>
          <p>{material}</p>
        </div>
        <div className="flex items-center mb-4">
          <span className="font-semibold mr-2">Colores:</span>
          <div className="flex space-x-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGarment;
