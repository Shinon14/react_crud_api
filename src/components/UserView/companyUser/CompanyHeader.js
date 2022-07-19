import React from "react";
import "./header.css";

const CompanyHeader = () => {
  return (
    <>
          <h1 className="titulo" >Compañias dentro del sistema</h1>
          <p>Para editar un producto seleccione el boton <strong class="underline decoration-sky-500/[.33]">"Editar"</strong> dentro de las tarjetas. Si desea borrar haga click en el boton <strong class="underline decoration-sky-500/[.33]">"Borrar"</strong>. </p>
    </>
  );
};

export default CompanyHeader;
