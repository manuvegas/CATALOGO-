import React from "react";
import CardHome from "./CardHome";
import { v4 as uuidv4 } from "uuid";
import "./contenedor.css";

const prendas = [
  {
    id: uuidv4(),
    img: "../UI/2.png",
    title: "REMERAS",
    categoria: "REMERAS",
  },
  {
    id: uuidv4(),
    img: "../UI/3.png",
    title: "CHOMBAS",
    categoria: "CHOMBAS",
  },
  {
    id: uuidv4(),
    img: "../UI/4.png",
    title: "PIQUE",
    categoria: "PIQUE",
  },
  {
    id: uuidv4(),
    img: "../UI/5.png",
    title: "CHOMBAS-LISAS",
    categoria: "CHOMBAS-LISAS",
  }
];

const CardsHome = () => {
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

export default CardsHome;
