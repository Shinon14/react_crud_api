import React from "react";
import { Row, Col } from "react-bootstrap";
import "./header.css";

const HeaderEnrutador = () => {
  return (
    <>
          <h1 className="titulo" >Menu del sistema</h1>
          <p>Estas son las opciones integradas dentro del sistema a las que <strong class="underline decoration-sky-500/[.33]">puede acceder</strong>, para seleccionar alguna haga Click en boton de la siguiente tabla.</p>
    </>
  );
};

export default HeaderEnrutador;
