import React from "react";

export const ContainerSeccions = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-evenly items-center w-screen h-screen bg-gray-200 ">
        {children}
      </div>
    </>
  );
};

export default ContainerSeccions;
