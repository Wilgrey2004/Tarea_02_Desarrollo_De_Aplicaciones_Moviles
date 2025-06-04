import React from "react";
import ContainerSeccions from "../../Containers/ContainerSeccions";
import TextResalter from "../../Texts/TextResalter";
import { useState } from "react";
export const Traductor = () => {
  const unidades = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  const decenas = [
    "",
    "diez",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];
  const especiales = {
    11: "once",
    12: "doce",
    13: "trece",
    14: "catorce",
    15: "quince",
    10: "diez",
    20: "veinte",
  };
  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  function numeroALetras(n) {
    if (n === 0) return "cero";
    if (n === 100) return "cien";
    if (n === 1000) return "mil";

    let c = Math.floor(n / 100);
    let d = Math.floor((n % 100) / 10);
    let u = n % 10;

    let resultado = "";

    if (c > 0) resultado += centenas[c] + " ";

    const dosUltimos = n % 100;
    if (especiales[dosUltimos]) {
      resultado += especiales[dosUltimos];
    } else {
      if (d > 0) resultado += decenas[d];
      if (d > 0 && u > 0) resultado += " y ";
      if (u > 0) resultado += unidades[u];
    }

    return resultado.trim();
  }

  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const traducir = () => {
    const n = parseInt(numero);
    if (isNaN(n) || n < 1 || n > 1000) {
      setResultado("Número fuera de rango (1-1000)");
    } else {
      setResultado(numeroALetras(n));
    }
  };

  return (
    <ContainerSeccions>
      <h1 className="text-center text-xl md:text-2xl font-bold mb-4 mt-16">
        Traductor de letras a numeros <br />
        {""}
        <TextResalter>entre el 1 y el 1000</TextResalter>
      </h1>

      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        className="border p-4 text-center placeholder:text-blue-800 text-blue-900 rounded-xl border-blue-500 focus:outline-blue-500 md:w-1/2 mx-auto"
      />
      <button onClick={traducir} className="bg-blue-500 text-white p-2 rounded">
        Traducir
      </button>
      <p className="mt-4 font-bold">Resultado: {resultado}</p>
    </ContainerSeccions>
  );
};
