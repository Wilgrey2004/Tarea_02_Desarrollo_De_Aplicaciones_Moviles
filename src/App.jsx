import React from "react";
import Menu from "./Components/Menu/Menu";
import { Home } from "./Components/Seccions/Home/Home";
import Sumadora from "./Components/Seccions/Sumadora/Sumadora";
import { Traductor } from "./Components/Seccions/Traductor/Traductor";
import { Multiplicador } from "./Components/Seccions/Multiplicar/Multiplicador";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex">
      <div>
        <Menu></Menu>
      </div>
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sumadora" element={<Sumadora />} />
          <Route path="/traductor" element={<Traductor />} />
          <Route path="/Multiplicador" element={<Multiplicador />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
