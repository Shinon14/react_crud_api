import { useState, useEffect } from "react";
import * as CompanyServer from "./CompanyServer";
import { useHistory, useParams } from "react-router";
import "../../../index.css";
import Navbar from "../navbar/NavbarUser";
import Form from "react-bootstrap/Form";

// ========= inicio del componente CompanyForm=========
const CompanyForm = () => {
  // uso de importaciones como variables para usar en el componente
  const history = useHistory();
  const params = useParams();
  // termino de uso de importaciones como variables para usar en el componente

  // ========= Hook para controlar el estado de los inputs =========

  const initialState = { id: 0, name: "", foundation: "", site: "" };
  const [company, setCompany] = useState(initialState);

  // ========= termino de Hooks para controlar el estado de los inputs =========

  // esto es para que se ejecute cuando se cargue la pagina y se cargue el formulario, haciendo que se escriba lo que esta en el state inicial
  const handleInputChange = (r) => {
    // esto se ejecuta cada vez que se dentro escribe en el input
    setCompany({ ...company, [r.target.name]: r.target.value });
  };

  // esta es la funcion para crear una nueva compañia
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await CompanyServer.registerCompany(company);
        const data = await res.json();

        console.log(data);
        // esta comprobacion se encarga de coprobar la respuesta
        if (data.message === "Success") {
          setCompany(initialState);
        }
      } else {
        await CompanyServer.updateCompany(params.id, company);
        alert("compañia actualizada");
      }
      // esto es para que se redireccione a la pagina de la empresa
      history.push("/companyListUser");
    } catch (error) {
      // en caso de error, arrojara esto
      console.log(error);
    }
  };

  const getCompany = async (companyId) => {
    try {
      const res = await CompanyServer.getCompany(companyId);
      const data = await res.json();
      console.log(data);
      const { name, foundation, website } = data.company;
      setCompany({ name, foundation, website });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getCompany(params.id);
    }
    // eslint-disble-next-line
  }, []);

  // estructura del codigo
  return (
    <div className="row ">
      <Navbar />
      <div className="col-12 col-md-6 mx-auto m-4 cssSize flex justify-between flex-row-reverse flex-column">
        <div className="col-12 m-4 ">
          <p className="font-semibold text-xl text-center">
            Para agregar una empresa rellene los siguientes campos
          </p>
          <p className="text-sm text-center">
            Los campos con (*) son obligatorios.
          </p>
        </div>
        <div className="col-12 m-4">
          <h2 className="mb-3 text-center  ">Añadir empresa</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre empresa(*)</label>

              <Form.Control
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={handleInputChange}
                value={company.name}
                minLength={2}
                maxLength={50}
                autoFocus
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Fundacion(*)</label>

              <Form.Control
                type="number"
                placeholder="Fundacion"
                name="foundation"
                onChange={handleInputChange}
                value={company.foundation}
                minLength={1900}
                maxLength={2080}
                
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Sitio web</label>
              <input
                type="text"
                name="website"
                value={company.website}
                onChange={handleInputChange}
                className="form-control"
                maxLength="100"
              />
            </div>

            <div className="d-grid gap-2 p-2">
              {params.id ? (
                <button type="submit" className="btn btn-block btn-primary">
                  Actualizar
                </button>
              ) : (
                <button className="btn btn-block btn-success  ">
                  Registrar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
// ========= fin del componente CompanyForm =========

// siempre que se exporte un componente, se debe exportarlo con el nombre de la variable y el default
export default CompanyForm;
