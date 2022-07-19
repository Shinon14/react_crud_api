import React from "react";
import "./header.css";

const CompanyHeader = () => {
  return (
    <>
          <h1 className="titulo" >Empresas dentro del sistema</h1>
          <p>Para editar una empresa seleccione el boton <strong class="underline decoration-sky-500/[.33]">"Editar"</strong> dentro de las tarjetas. Si desea eliminar, haga click en el boton <strong class="underline decoration-sky-500/[.33]">"Borrar empresa"</strong></p>
    </>
  );
};

export default CompanyHeader;
