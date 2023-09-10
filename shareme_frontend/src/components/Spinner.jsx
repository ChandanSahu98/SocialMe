import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <Circles color="coral" className="m-5" />
      <p className="text-lg text-center px-2 mt-4">{message}</p>
    </div>
  );
};

export default Spinner;
