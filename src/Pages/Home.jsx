import CardsHome from "@/components/Cards/CardsHome";
import React from "react";


const Home = () => {
  return (
    <section>
      <div>
        <h1 className=" text-center font-extrabold md:text-3xl mt-5">
          CATALOGO FOREST-TEXT
        </h1>
        <h2 className="text-center text-neutral-900 font-extrabold md:text-2xl mt-4">CATEGORIAS</h2>
        <div className="mt-10">
          <CardsHome />
        </div>
      </div>
    </section>
  );
};

export default Home;
