import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div>
        <h1 className=" text-center font-extrabold text-xl md:text-3xl mt-5">
          CATALOGO YSL
        </h1>
        <div className="flex justify-center mx-auto items-center gap-5 mt-5 flex-col sm:flex-row">
          <div className="max-w-lg">
            <Link to="/CardsGl">
              <img src="../UI/gl.jpeg" alt="ysl" />
            </Link>
          </div>
          <div className="max-w-lg">
            <Link to="/CardsHome">
              <img src="../UI/ysl.jpeg" alt="gl" className="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
