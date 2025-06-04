import React from "react";

import { useState } from "react";

import ButonMenu from "../Buttons/ButonMenu";
import menuIcon from "../../Icons/menuIco.svg";
import menuIconClose from "../../Icons/menuIcoClose.svg";
import { AsideMenuBar } from "./AsideMenuBar/AsideMenuBar";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const HandleIsOpen = () => {
    const newIsOpenValue = !isOpen;
    //console.log(newIsOpenValue);
    setIsOpen(newIsOpenValue);
  };

  return (
    <div className="flex h-screen">
      <AsideMenuBar isOpen={isOpen}></AsideMenuBar>
      <div>
        <ButonMenu
          Icon={isOpen ? menuIconClose : menuIcon}
          onSometing={HandleIsOpen}
          text={isOpen ? "abrir" : "cerrar"}
        ></ButonMenu>
      </div>
    </div>
  );
};

export default Menu;
