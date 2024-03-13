import React from "react";
import { useContext } from "react";
import { ProviderContext } from "./ProviderContext";

const ButtonDemo = () => {
  let data = useContext(ProviderContext);
  return (
    <>
      <button>{data.name}</button>
    </>
  );
};

export default ButtonDemo;
