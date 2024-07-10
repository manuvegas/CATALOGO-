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
    title: "CAMPERAS",
    categoria: "CAMPERAS",
  },
  
];

const CardsHome = () => {
  return (
    <div className="contenedor xl:max-w-screen-2xl xl:mx-auto">
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
