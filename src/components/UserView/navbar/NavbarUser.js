import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { purple } from "@mui/material/colors";

const colorRed = purple[500];

function NavbarUser() {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Gestion de inventario</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Modificar" id="basic-nav-dropdown">
              <NavDropdown.Item href="/companyFormUser">Compañia</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="/productosFormUsuario ">Producto</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ver" id="basic-nav-dropdown">
              <NavDropdown.Item href="/companyListUser">Compañia</NavDropdown.Item>
              <NavDropdown.Item href="/productosUsuario">Producto</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link eventKey={2} href="/LoginUsuario">
              <LogoutIcon className="me-1 font-medium" />
              Salir
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarUser;
