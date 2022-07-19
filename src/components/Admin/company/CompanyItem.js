import React from "react";
import { useHistory } from "react-router-dom";
import "./CompanyList.css";

import * as CompanyServer from "./CompanyServer";

const CompanyItem = ({ company, listCompanies }) => {
  // console.log(props)
  // console.log(medida)

  const history = useHistory();

  const handleDelete = async (companyId) => {
    // console.log(companyId);
    prompt("¿Esta seguro que desea eliminar la compañia?");
    await CompanyServer.deleteCompany(companyId);
    listCompanies();
  };

  return (
    <div className="col-md-4 m-5">
      <div className="card card-body">
        <h3 className="card-title">Nombre empresa: {company.name}</h3>
        <p className="card-text">
          Creado: <strong>{company.foundation}</strong>
        </p>
        <button
          onClick={() => company.id && handleDelete(company.id)}
          className="btn btn-danger my-2"
        >
          Borrar empresa
        </button>
        <button
          className=" btn btn-secondary"
          onClick={() => history.push(`/actualizarEmpresa/${company.id}`)}
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default CompanyItem;
