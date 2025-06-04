import React from "react";
import ContainerSeccions from "../../Containers/ContainerSeccions";
import TextResalter from "../../Texts/TextResalter";
export const Home = () => {
  return (
    <>
      <ContainerSeccions>
        <h1 className="text-xl font-bold text-center text-gray-800">
          Datos <TextResalter>Personales</TextResalter>
        </h1>
        <div className="flex flex-col md:flex-row  md:gap-10 justify-center space-y-4">
          <div>
            Nombre: <TextResalter>Wilgrey Ravelo Cruz</TextResalter>
          </div>
          <div>
            Matricula: <TextResalter>2023-0611</TextResalter>
          </div>
          <div>
            Correo Elecronico: <TextResalter>apro24470@gmail.com</TextResalter>
          </div>
          <div>
            Foto
            <img
              className="w-30 rounded-bl-xl rounded-tr-xl border-2 border-red-500 hover:-translate-y-2 hover:rounded-tr-xl hover:rounded-br-xl duration-300 transition-all mx-auto"
              src="https://i.postimg.cc/s2dpkch1/Una-Fotico-Mia.jpg"
            ></img>
          </div>
        </div>
      </ContainerSeccions>
    </>
  );
};

export default Home;
