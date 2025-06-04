import React, { useState } from "react";
import ContainerSeccions from "../../Containers/ContainerSeccions";
import TextResalter from "../../Texts/TextResalter";
import { ScreenResults } from "../../Screen/ScreenResults";

const Sumadora = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleResultado = () => {
    const num1 = numero1 ? parseFloat(numero1) : 0;
    const num2 = numero2 ? parseFloat(numero2) : 0;
    setResultado(num1 + num2);
  };

  const handleResetResult = () => {
    setNumero1(0);
    setNumero2(0);
    setResultado(0);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <ContainerSeccions>
        <h1>
          <TextResalter>Sumar dos numeros</TextResalter> y ver el resultado
        </h1>

        <div>
          <ScreenResults Results={resultado}></ScreenResults>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <input
              onChange={(ev) => setNumero1(ev.target.value)}
              value={numero1}
              required
              placeholder="Ingresa el primer numero"
              className="border p-4 text-center placeholder:text-blue-800 text-blue-900 rounded-xl border-blue-500 focus:outline-blue-500"
              type="number"
              id="numero1"
            />
            <input
              onChange={(ev) => setNumero2(ev.target.value)}
              value={numero2}
              required
              placeholder="Ingresa el segundo numero"
              className="border p-4 text-center placeholder:text-blue-800 text-blue-900 rounded-xl border-blue-500 focus:outline-blue-500"
              type="number"
              id="numero2"
            />
          </div>

          <div className="flex justify-center gap-2">
            <button
              onClick={handleResultado}
              type="submit"
              id="Sumar"
              className="border rounded-3xl p-4 shadow-red-500 border-red-500 text-xl font-bold text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Sumar
            </button>

            <button
              onClick={handleResetResult}
              type="submit"
              id="Restablecer"
              className="border rounded-3xl p-4 shadow-blue-500 border-blue-500 text-xl font-bold text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Restablecer
            </button>
          </div>
        </form>
      </ContainerSeccions>
    </>
  );
};

export default Sumadora;
