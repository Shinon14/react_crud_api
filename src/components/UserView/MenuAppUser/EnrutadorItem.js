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
            <Button variant="outlined" color="secondary" className="width-auto" href="/registro">
              Registrar usuario
            </Button>
          </td>
          <td>Agregar un usuario al sistema (solo administrador).</td>
        </tr>
        <tr>
          <td className="d-flex justify-content-center ">
            <Button variant="outlined" color="secondary" className="width-auto" disabled href="/login">
              Borrar usuarios
            </Button>
          </td>
          <td>Borrar un usuario del sistema (solo administrador).</td>
        </tr>
        <tr>
          <td className="d-flex justify-content-center ">
            <Button variant="outlined" color="secondary" className="width-auto" href="/companyForm">
              Registrar empresa
            </Button>
          </td>
          <td>Agregar una empresa al sistema (aplica para administrador y usuario).</td>
        </tr>
        <tr>
          <td className="d-flex justify-content-center ">
            <Button variant="outlined" color="secondary" className="width-auto" href="/companyForm">
              Registrar producto
            </Button>
          </td>
          <td>Agrega una empresa al sistema (aplica para administrador y usuario).</td>
        </tr>
        <tr>
          <td className="d-flex justify-content-center ">
            <Button variant="outlined" color="secondary" className="width-auto"href="/productoList">
              Ver productos
            </Button>
          </td>
          <td>Seleccione esta opcion si desea ver los productos registrados dentro del sistema (vista usuario).</td>
        </tr>
        <tr>
          <td className="d-flex justify-content-center ">
            <Button variant="outlined" color="secondary" className="width-auto" href="/companyList">
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
