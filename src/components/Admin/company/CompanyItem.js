import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./CompanyList.css";

import * as CompanyServer from "./CompanyServer";

const CompanyItem = ({ medida, listarMedidas }) => {
  // console.log(props)
  console.log(medida)

  const history = useHistory();

  const handleDelete = async (measureId) => {
    // console.log(companyId);
    prompt("¿Esta seguro que desea eliminar la compañia?");
    await CompanyServer.deleteCompany(measureId);
    listarMedidas();
  };

  return (
    <div className="cardShion col-3 mt-3">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Producto de prueba</Card.Title>

          <Card.Subtitle className="mb-2 text-muted">{medida.descripcion }</Card.Subtitle>

          
          <Button variant="primary">Editar </Button>
        </Card.Body>
        
      </Card>
    </div>
  );
};

export default CompanyItem;
