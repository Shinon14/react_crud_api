import { Link } from "react-router-dom";
// import "bootstrap/js/dist/collapse";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Ferreteria premuim
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/companyForm">
                Agregar Compañia
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productoForm">
                Agregar producto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/companyList">
                Listar compañias
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productoList">
                Listar Productos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
