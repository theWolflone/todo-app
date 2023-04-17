import React from "react";
import './todoCounter.css'

const estilos = {};

function TodoCounter() {
  return (
    <h2 className="TodoCounter"
      // style={{
      //   color: "red",
      //   backgroundColor: "yellow",
      // }}
    >
      Has completado 2 de 3 TODOs
    </h2>
  );
}

export { TodoCounter };
