import React from "react";
import { useHistory } from "react-router-dom";

import * as ProductoServer from "./ProductoServer";

const ProductoItem = ({ producto, listarProductos }) => {
  // console.log(props)
  // console.log(company)

  const history = useHistory();

  const handleDelete = async (productoId) => {
    // console.log(companyId);
    await ProductoServer.borrarProducto(productoId);
    listarProductos();
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">{producto.nombre}</h3>
        <p className="card-text">
          Descripcion: <strong>{producto.descripcion}</strong>
        </p>
        <p
          rel="noopener noreferrer"
        >
         {producto.precio}
        </p>
        <button
          onClick={() => producto.id && handleDelete(producto.id)}
          className="btn btn-danger my-2"
        >
          Borrar Producto
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => history.push(`/updateProducto/${producto.id}`)}
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default ProductoItem;
