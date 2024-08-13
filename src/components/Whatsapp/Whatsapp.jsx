import React from "react";

import whatsapp from "../../../public/UI/whatsapp.svg";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-5 z-999 right-5 bg-green-500 p-2 rounded-full">
      <a href="https://wa.me/541161856150" target="_blank">
        <img src={whatsapp} className="w-12 h-auto" alt="whatsapp" />
      </a>
    </div>
  );
};

export default Whatsapp;