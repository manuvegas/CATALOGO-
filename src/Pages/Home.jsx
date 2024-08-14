import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div>
        <h1 className=" text-center font-extrabold md:text-3xl mt-5">
          CATALOGO YSL
        </h1>
        <div className="flex justify-center gap-5 mt-20 flex-col sm:flex-row">
          <div className="bg-white w-96 object-cover ">
            <Link to="/CardsGl">
              <img src="../UI/gl.jpeg" alt="ysl" />
            </Link>
          </div>
          <div className="bg-white w-96 object-cover">
            <Link to="/CardsHome">
              <img src="../UI/ysl.jpeg" alt="gl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
