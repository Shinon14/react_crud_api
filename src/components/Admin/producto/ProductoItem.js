import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
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
    // <div className="col-md-4 mb-4">
    //   <div className="card card-body">
    //     <h3 className="card-title">{producto.nombre}</h3>
    //     <p className="card-text">
    //       Descripcion: <strong>{producto.descripcion}</strong>
    //     </p>
    //     <p
    //       rel="noopener noreferrer"
    //     >
    //      {producto.precio}
    //     </p>
    //     <button
    //       onClick={() => producto.id && handleDelete(producto.id)}
    //       className="btn btn-danger my-2"
    //     >
    //       Borrar Producto
    //     </button>
    //     <button
    //       className="btn btn-secondary"
    //       onClick={() => history.push(`/updateProducto/${producto.id}`)}
    //     >
    //       Editar
    //     </button>
    //   </div>
    // </div>
    <div className="cardShion col-3 mt-3">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Unidad de medida</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Gramaje: (valor)
          </Card.Subtitle>
          <Card.Text>Descripcion</Card.Text>

          <Button variant="primary">Editar </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductoItem;
