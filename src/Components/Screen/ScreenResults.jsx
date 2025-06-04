import React from "react";
import TextResalter from "../Texts/TextResalter";
export const ScreenResults = ({ Results }) => {
  return (
    <p>
      Resultado: <TextResalter>{Results}</TextResalter>
    </p>
  );
};
