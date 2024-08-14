import React from "react";
import CardHome from "../Cards/CardHome";
import { v4 as uuidv4 } from "uuid";
import "../Cards/contenedor.css";

const prendas = [
  {
    id: uuidv4(),
    img: "../UI/2.png",
    title: "REMERAS-GL",
    categoria: "REMERAS-GL",
  },
  {
    id: uuidv4(),
    img: "../UI/3.png",
    title: "CHOMBAS-GL",
    categoria: "CHOMBAS-GL",
  },
  {
    id: uuidv4(),
    img: "../UI/4.png",
    title: "PIQUE-GL",
    categoria: "PIQUE-GL",
  },
  {
    id: uuidv4(),
    img: "../UI/5.png",
    title: "CHOMBAS-LISAS-GL",
    categoria: "CHOMBAS-LISAS-GL",
  }
];

const CardsGl = () => {
  return (
    <div className="contenedor xl:max-w-screen-2xl xl:mx-auto mt-32">
      {prendas.map((prenda) => (
        <CardHome
          id={prenda.id}
          key={prenda.id}
          title={prenda.title}
          img={prenda.img}
        />
      ))}
    </div>
  );
};

export default CardsGl;