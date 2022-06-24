import { Link } from "react-router-dom";
import "./navbar.css";
import "bootstrap/js/dist/collapse";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light cssNav ">
      <div className="container-fluid ">
        <Link className="navbar-brand " to="/">

          <h5>Farmacia CESFAM</h5>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 cssNavbar">
            <li className="nav-item">
              <Link className="nav-link cssWhite" to="/Login">
                <h6>Login</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link cssWhite" to="/companyForm">
                <h6>Agregar Medicamento</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registro">
                <h6>Crear usuario (Admin)  </h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/companyList">
                <h6>Listar Medicamento</h6>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/productoList">
                <h6>Listar productos</h6>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
