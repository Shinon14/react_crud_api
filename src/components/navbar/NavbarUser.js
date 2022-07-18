import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import LogoutIcon from "@mui/icons-material/Logout";

function NavbarUser() {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Gestion de inventario</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Agregar" id="basic-nav-dropdown">
              <NavDropdown.Item href="/companyForm">Compañia</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="/productoForm">Producto</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ver" id="basic-nav-dropdown">
              <NavDropdown.Item href="/companyList">Compañia</NavDropdown.Item>
              <NavDropdown.Item href="/productoList">Producto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Gestion de usuarios" id="basic-nav-dropdown">
              <NavDropdown.Item href="/companyList">Agregar usuario</NavDropdown.Item>
              <NavDropdown.Item href="/productoList">Eliminar Usuario</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="/Login">
              <LogoutIcon className="me-1" />
              Salir
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarUser;
