import React, { useEffect } from "react";
import * as ProductoServer from "./ProductoServer";
import { useHistory } from "react-router-dom";
// componentes:
import ProductItem from "./ProductoItem";
import Navbar from "../navbar/Navbar";

//

const ProductList = () => {
  const history = useHistory();

  const [productos, setProductos] = React.useState([]);

  const listarProductos = async () => {
    try {
      const res = await ProductoServer.listarProductos();
      const data = await res.json();
      setProductos(data.productos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarProductos();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="d-flex container m-5">
        <div className="row">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        {/* {productos.map((producto) => ( */}
        {/* <ProductItem
            key={producto.id}
            producto={producto}
            listarProductos={listarProductos}
          /> */}
        {/* ))} */}
      </div>
    </React.Fragment>
  );
};
export default ProductList;
