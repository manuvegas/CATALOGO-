import React, { useEffect, useState } from "react";
import CardGarment from "./CardGarment";
import { useParams } from "react-router-dom";

const CardsGarments = () => {
  const [prendas, setPrendas] = useState([]);
  const { titulo } = useParams();

  useEffect(() => {
    fetch(`../prendas.json`)
      .then((reponse) => reponse.json())
      .then((data) => {
        // Filtrar las prendas según el título de la categoría seleccionada
        const prendasFiltradas = data.filter(
          (item) => item.categoria === titulo
        );
        setPrendas(prendasFiltradas);
      })
      .catch((error) => console.error("error al cargar los datos:", error));
  }, [titulo]);
  return (
    <>
      <h1 className="flex justify-center items-center text-black pt-5 pb-5 text-3xl sm:text-5xl font-extrabold">
        {titulo}
      </h1>
      <nav className="flex gap-3 flex-wrap md:flex-row justify-center max-w-7xl mx-auto">
        {prendas.map((item) => (
          <CardGarment
            id={item.id}
            titulo={item.titulo}
            imgs={item.imgs}
            descripcion={item.descripcion}
            material={item.material}
            articulo={item.articulo}
            colors={item.color}
            key={item.id}
            categoria={titulo}
          />
        ))}
      </nav>
    </>
  );
};

export default CardsGarments;
