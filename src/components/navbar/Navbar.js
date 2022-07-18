import { Link } from "react-router-dom";
import "./navbar.css";
import "bootstrap/js/dist/collapse";
import { useHistory } from "react-router-dom";

const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light cssNav ">
      <div className="container-fluid ">
        <Link className="navbar-brand " to="/">

          <h5>Control ADMIN</h5>
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
              <Link className="nav-link cssWhite" to="/companyForm">
                <h6>Agregar Compañia</h6>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/companyList">
                <h6>Ver Productos</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productoList">
                <h6>Listar productos</h6>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productoForm">
                <h6>Agregar producto</h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
