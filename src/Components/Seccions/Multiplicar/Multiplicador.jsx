import React from "react";
import ContainerSeccions from "../../Containers/ContainerSeccions";
import TextResalter from "../../Texts/TextResalter";
import { useState } from "react";
export const Multiplicador = () => {
  const [numero, setNumero] = useState(0);
  const [results, setResults] = useState([]);

  const handleMultiplicar = () => {
    const num = numero ? parseInt(numero) : 0;

    const resultados = [];
    for (let i = 1; i <= 13; i++) {
      resultados.push(`${num} x ${i} = ${num * i}`);
    }

    setResults(resultados);
  };
  return (
    <ContainerSeccions>
      <div className="text-center text-lg md:text-2xl font-bold">
        Ingresa un numero para ver su <br />{" "}
        <TextResalter>tabla de multiplciar del 1 al 13</TextResalter>
      </div>

      <div>
        <form
          onSubmit={(ev) => ev.preventDefault()}
          className=" border border-blue-500 flex  gap-4 shadow-lg p-4 rounded-lg `bg-white w-full md:w-1/2 mx-auto "
        >
          <input
            value={numero}
            onChange={(ev) => setNumero(ev.target.value)}
            type="number"
            name=""
            id="NumeroAMultiplicar"
          />
          <button
            className="p-2 border border-red-500 rounded-2xl text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all duration-300"
            onClick={handleMultiplicar}
          >
            Multiplicar
          </button>
        </form>
      </div>

      <div>
        <ul className="mt-4">
          {results.map((result, index) => (
            <li key={index} className="text-lg text-blue-600 font-semibold">
              {result}
            </li>
          ))}
        </ul>
      </div>
    </ContainerSeccions>
  );
};
