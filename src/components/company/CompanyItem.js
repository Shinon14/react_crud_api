import React from "react";
import { useHistory } from "react-router-dom";

import * as CompanyServer from "./CompanyServer";

const CompanyItem = ({ company, listCompanies }) => {
  // console.log(props)
  // console.log(company)

  const history = useHistory();

  const handleDelete = async (companyId) => {
    // console.log(companyId);
    await CompanyServer.deleteCompany(companyId);
    listCompanies();
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">{company.name}</h3>
        <p className="card-text">
          Founded: <strong>{company.foundation}</strong>
        </p>
        <a
          href={company.website}
          className="btn btn-primary"
          rel="noopener noreferrer"
          target="_blank"
        >
          Ir al sitio
        </a>
        <button
          onClick={() => company.id && handleDelete(company.id)}
          className="btn btn-danger my-2"
        >
          Borrar compañia
        </button>
        <button
          className=" btn btn-secondary"
          onClick={() => history.push(`/updateCompany/${company.id}`)}
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default CompanyItem;
