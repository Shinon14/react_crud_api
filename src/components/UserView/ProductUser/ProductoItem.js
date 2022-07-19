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
    <div className="col-3 col-md-4 mt-3">
      <div className="card card-body">
        <h3 className="card-title">{producto.nombre}</h3>
        <p
          rel="noopener noreferrer"
        >
         Precio: {producto.precio}
        </p>
        <p>
          Stock: {producto.stock}
        </p>
        <p className="card-text">
          Descripcion: {producto.descripcion}
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
