import React from "react";

const ButtonPrimary = ({ children, addClass, accion }) => {
  return (
    <button
      onClick={accion}
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-pink-500 hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
