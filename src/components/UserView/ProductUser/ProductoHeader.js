import React from "react";
import "../../Admin/company/CompanyList.css";

const ProductoHeader = () => {
  return (
    <>
          <h1 className="titulo" >Productos dentro del sistema</h1>
          <p>Para editar un producto seleccione el boton <strong class="underline decoration-sky-500/[.33]">"Editar"</strong> dentro de las tarjetas. Para <strong class="underline decoration-sky-500/[.33]">"Borrar"</strong> un producto seleccionar el boton designado.</p>
    </>
  );
};

export default ProductoHeader;
