import React from "react";

export const ButonMenu = ({ onSometing, Icon }) => {
  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        className="p-1 bg-blue-500 w-10 hover:bg-blue-700 text-white font-bold rounded"
        onClick={onSometing}
      >
        <img src={Icon} alt="icono del estado del menú" className="w-full" />
      </button>
    </div>
  );
};

export default ButonMenu;
