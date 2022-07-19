import React, { useState, useEffect } from "react";
import * as ProductoServer from "./ProductoServer";
import { useHistory, useParams } from "react-router";
import NavUser from '../navbar/NavbarUser';

// ========= inicio del componente CompanyForm=========
const ProductoForm = () => {
  // uso de importaciones como variables para usar en el componente
  const history = useHistory();
  const params = useParams();
  // termino de uso de importaciones como variables para usar en el componente

  // ========= Hook para controlar el estado de los inputs =========

  const initialState = {
    id: 0,
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
  };
  const [producto, setProducto] = useState(initialState);

  // ========= termino de Hooks para controlar el estado de los inputs =========

  // esto es para que se ejecute cuando se cargue la pagina y se cargue el formulario, haciendo que se escriba lo que esta en el state inicial
  const handleInputChange = (r) => {
    // esto se ejecuta cada vez que se dentro escribe en el input
    setProducto({ ...producto, [r.target.name]: r.target.value });
  };

  // esta es la funcion para crear una nueva compañia
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await ProductoServer.registrarProducto(producto);
        const data = await res.json();

        console.log(data);
        // esta comprobacion se encarga de coprobar la respuesta
        if (data.message === "Success") {
          setProducto(initialState);
        }
      } else {
        await ProductoServer.actualizarProducto(params.id, producto);
        alert("Producto actualizado");
      }
      // esto es para que se redireccione a la pagina de la empresa
      history.push("/productosUsuario");
    } catch (error) {
      // en caso de error, arrojara esto
      console.log(error);
    }
  };

  const getProducto = async (productoId) => {
    try {
      const res = await ProductoServer.getProducto(productoId);
      const data = await res.json();
      console.log(data);
      const { nombre, descripcion, precio, stock } = data.producto;
      setProducto({ nombre, descripcion, precio, stock });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getProducto(params.id);
    }
    // eslint-disble-next-line
  }, []);

  // estructura del codigo
  return (
    <React.Fragment>
      <NavUser  />
      <div className="col-md-6 col-12 col-lg-6 mx-auto cssSize flex flex-row-reverse justify-content-center">
        
        <div className="col-12 col-xs-12 m-4 mt-5">
          <p className="font-semibold text-xl text-center">
            Para agregar un producto rellene los siguientes campos
          </p>
          <p className="text-sm text-center">
            Los campos con (*) son obligatorios.
          </p>
          {/* <img src={imgProducts} alt="" className="pt-2 mt-3"/> */}

        </div>

        <div className="col-12 col-xs-12 mt-4">
          <h2 className="mb-3 text-center p-2 ">Crear producto</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre (*)</label>
              <input
                type="text"
                name="nombre"
                value={producto.nombre}
                onChange={handleInputChange}
                className="form-control"
                minLength="2"
                maxLength="50"
                autoFocus
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Descripcion</label>
              <input
                type="text"
                name="descripcion"
                value={producto.descripcion}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Precio(*)</label>
              <input
                type="number"
                name="precio"
                value={producto.precio}
                onChange={handleInputChange}
                className="form-control"
                maxLength="5"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Stock(*)</label>
              <input
                type="text"
                name="stock"
                value={producto.stock}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="d-grid gap-2 p-2">
              {params.id ? (
                <button type="submit" className="btn btn-block btn-primary">
                  Actualizar
                </button>
              ) : (
                <button className="btn btn-block btn-success">Registrar</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
// ========= fin del componente CompanyForm =========

// siempre que se exporte un componente, se debe exportarlo con el nombre de la variable y el default
export default ProductoForm;
