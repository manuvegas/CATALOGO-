import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    }, 300); // Tiempo de la transición en milisegundos
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      className="rounded-lg overflow-hidden shadow-2xl bg-white "
      {...handlers}
    >
      <div className="relative">
        <img
          className={`w-full h-full object-cover transition-transform duration-300 transform ${
            isTransitioning ? "easy-in-out" : ""
          }`}
          src={imgs[currentImageIndex]}
          alt={titulo}
          loading="lazy"
        />
        {imgs.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
              <FaArrowLeft size={15} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
              <FaArrowRight size={15} />
            </button>
          </>
        )}
      </div>
      <div className="px-2 py-4">
        <div className="flex justify-between">
          <h2 className="font-bold text-md">{titulo}</h2>
          <p className="font-bold text-md">ART: {articulo}</p>
        </div>
        <p className="mb-1">{descripcion}</p>
        <div className="flex gap-2">
          <span className="font-bold">Material:</span>
          <p>{material}</p>
        </div>
        {colors && colors.length > 0 && (
          <div className="flex items-baseline mb-4">
            <span className="font-semibold mr-2">Colores:</span>
            <div className="flex gap-1 flex-wrap">
              {colors.map((colorImg, index) => (
                <div
                  key={index}
                  className="relative w-10 h-10 rounded-full border"
                >
                  <img
                    src={colorImg}
                    alt={`Color ${index}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardGarment;
