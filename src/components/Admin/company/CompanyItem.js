import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./CompanyList.css";

import * as CompanyServer from "./CompanyServer";

const CompanyItem = ({ company, listCompanies }) => {
  // console.log(props)
  // console.log(company)

  const history = useHistory();

  const handleDelete = async (companyId) => {
    // console.log(companyId);
    prompt("¿Esta seguro que desea eliminar la compañia?");
    await CompanyServer.deleteCompany(companyId);
    listCompanies();
  };

  return (
    <div className="cardShion col-3 mt-3">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Producto de prueba</Card.Title>
          <Card.Text>
            Producto de prueba
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">Gramaje: (valor)</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Creado por: (valor)</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Unidad de medida: (valor)</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Categoria: (valor)</Card.Subtitle>
          
          <Button variant="primary">Editar </Button>
        </Card.Body>
        
      </Card>
    </div>
  );
};

export default CompanyItem;
