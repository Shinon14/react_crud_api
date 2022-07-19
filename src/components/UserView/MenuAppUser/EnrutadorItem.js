import React from "react";
import { Table } from "react-bootstrap";
import "./button.css";
import Button from "@mui/material/Button";

const MenuAdmin = () => {
    return (

    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Opcion</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td className="d-flex justify-content-center ">
            <Button variant="outlined" color="secondary" className="width-auto" href="/companyFormUser">
              Registrar empresa
            </Button>
          </td>
          <td>Agregar una empresa al sistema (aplica para administrador y usuario).</td>
        </tr>
        <tr>
          <td className="d-flex justify-content-center ">
            <Button variant="outlined" color="secondary" className="width-auto" href="/productosFormUsuario">
              Registrar producto
            </Button>
          </td>
          <td>Agrega una empresa al sistema (aplica para administrador y usuario).</td>
        </tr>
        <tr>
          <td className="d-flex justify-content-center ">
            <Button variant="outlined" color="secondary" className="width-auto"href="/productosUsuario">
              Ver productos
            </Button>
          </td>
          <td>Seleccione esta opcion si desea ver los productos registrados dentro del sistema (vista usuario).</td>
        </tr>
        <tr>
          <td className="d-flex justify-content-center ">
            <Button variant="outlined" color="secondary" className="width-auto" href="/companyListUser">
              Ver empresas 
            </Button>
          </td>
          <td>Seleccione esta opcion si desea ver las empresas registradas dentro del sistema. (visita de usuario).</td>
        </tr>



      </tbody>
    </Table>
  );
};

export default MenuAdmin;
