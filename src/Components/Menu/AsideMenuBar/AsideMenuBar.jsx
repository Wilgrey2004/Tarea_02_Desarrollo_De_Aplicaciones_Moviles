import React from "react";

import { Link } from "react-router-dom";

export const AsideMenuBar = ({ isOpen }) => {
  return (
    <aside
      className={
        isOpen
          ? "w-33 bg-gray-800 text-white p-4 transition-all duration-300 "
          : "w-0 overflow-hidden transition-all duration-300"
      }
    >
      <h2 className="text-2xl font-bold mb-4 mt-16">Menu</h2>
      <ul className="space-y-2 ">
        <li className="hover:-translate-y-1 transition-all ">
          <Link to="/" className="text-white hover:text-gray-300 ">
            Inicio
          </Link>
        </li>
        <li className="hover:-translate-y-1 transition-all ">
          <Link to="/Sumadora" className="text-white hover:text-gray-300 ">
            Sumadora
          </Link>
        </li>
        <li className="hover:-translate-y-1 transition-all ">
          <Link to="/Traductor" className="text-white hover:text-gray-300 ">
            Traductor
          </Link>
        </li>
        <li className="hover:-translate-y-1 transition-all ">
          <Link to="/Multiplicador" className="text-white hover:text-gray-300 ">
            Multiplicar
          </Link>
        </li>
        <li className="hover:-translate-y-1 transition-all ">
          <Link to="#" className="text-white hover:text-gray-300 ">
            Exp. Personal
          </Link>
        </li>
      </ul>
    </aside>
  );
};
