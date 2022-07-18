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
    // <nav className="navbar navbar-expand-lg navbar-light bg-light cssNav fixed-top">
    //   <div className="container-fluid ">
    //     <Link className="navbar-brand " to="/">
    //       <h5>Control ADMIN</h5>
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse " id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0 cssNavbar">
    //         <li className="nav-item">
    //           <Link className="nav-link cssWhite" to="/companyForm">
    //             <h6>Agregar Compañia</h6>
    //           </Link>
    //         </li>

    //         <li className="nav-item">
    //           <Link className="nav-link" to="/companyList">
    //             <h6>Ver Productos</h6>
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/productoList">
    //             <h6>Listar productos</h6>
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/productoForm">
    //             <h6>Agregar producto</h6>
    //           </Link>
    //         </li>
    //         <li className="nav-item me-2">
    //           <Link className="nav-link" to="/registro">
    //             <h6>Agregar usuario</h6>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Administracion sistema</Navbar.Brand>
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
            <NavDropdown title="Gestion de usuarios" id="basic-nav-dropdown">
              <NavDropdown.Item href="/registro">
                Agregar usuario
              </NavDropdown.Item>
              <NavDropdown.Item href="/productoList">
                Eliminar Usuario
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="/">
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
