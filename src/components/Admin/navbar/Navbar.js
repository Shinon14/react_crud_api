import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { purple } from "@mui/material/colors";

const NavbarAdmin = () => {
  return (
    <Navbar bg="light" fixed="top" expand="lg" >
      <Container>
        <Navbar.Brand href="/MenuAdmin">Administracion sistema</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Vista usuario" id="basic-nav-dropdown">
              <NavDropdown.Item href="/companyFormUser">
                Agregar Compañia
              </NavDropdown.Item>
              <NavDropdown.Item href="/companyListUser">
                Ver Compañias
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="/productosFormUsuario">
                Agregar Productos
              </NavDropdown.Item>
              <NavDropdown.Item href="/productosUsuario">
                Ver Producto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Agregar" id="basic-nav-dropdown">
              <NavDropdown.Item href="/companyForm">Compañia</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="/productoForm">Producto</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ver" id="basic-nav-dropdown">
              <NavDropdown.Item href="/companyList">Compañia</NavDropdown.Item>
              <NavDropdown.Item href="/productoList">Producto</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gestion de usuarios" id="basic-nav-dropdown" disabled>
              <NavDropdown.Item href="/registro">
                Agregar usuario
              </NavDropdown.Item>
              <NavDropdown.Item href="/productoList">
                Eliminar Usuario
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="/LoginAdmin">
              <LogoutIcon className="me-1 font-medium" />
              Salir
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarAdmin;
