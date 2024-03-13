import React from "react";
import { useContext } from "react";
import { ProviderContext } from "./ProviderContext";

const DataConsumer = ({ children }) => {
  let data = useContext(ProviderContext);
  return (
    <>
      <b>Welcome {data.name}</b>
      {children}
    </>
  );
};

export default DataConsumer;
