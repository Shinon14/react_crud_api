import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// components admin:
import CompanyList from "./components/Admin/company/companyList";
import CompanyForm from "./components/Admin/company/CompanyForm";
import ProductoForm from './components/Admin/producto/ProductoForm';
import LoginAdmin from "./components/Admin/LoginAdmin/Login";
import Registro from "./components/Admin/RegisterRegister/SingUp";
import ProductList from "./components/Admin/producto/ProductoLista";
import MenuAdmin from './components/Admin/MenuApp/Enrutador'
// components user:
import CompanyFormUser from './components/UserView/companyUser/CompanyForm';
import CompanyListUser from './components/UserView/companyUser/companyList';
import ProductFormUser from './components/UserView/ProductUser/ProductoForm';
import ProductoListUser from './components/UserView/ProductUser/ProductoLista';
import LoginUsuario from './components/UserView/LoginUser/Login';
import MenuUser from './components/UserView/MenuAppUser/Enrutador';
// bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
// termino bootstrap
import "./index.css";

//
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <div className="container my-4 app" >
      <Route path="/" exact component={LoginUsuario} />
      {/* Rutas de administrador */}
      {/* <Route /> */}
      {/* RUTAS DE COMPANY */}
      <Route exact path="/companyList" component={CompanyList} />

      {/* RUTAS DE PRODUCTO */}
      <Route path="/productoList" component={ProductList} />
      <Route path="/companyForm" component={CompanyForm} />
      <Route path="/productoForm" component={ProductoForm}/>
      <Route path="/registro" component={Registro} />
      <Route path="/actualizarEmpresa/:id" component={CompanyForm} />
      <Route path="/actualizarProducto/:id" component={ProductoForm} />
      {/* RUTAS PRINCIPALES */}
      <Route path="/LoginAdmin" component={LoginAdmin} />
      <Route path="/MenuAdmin" component={MenuAdmin} />

      
      {/* TERMINO RUTA DE EDICION DE USUARIOS */}
      {/* Termino de rutas de administrador */}

      {/* rutas de usuario */}
      <Route path="/companyFormUser" component={CompanyFormUser} />
      <Route path="/companyListUser" component={CompanyListUser} />
      <Route path="/productosFormUsuario" component={ProductFormUser} />
      <Route path="/productosUsuario" component={ProductoListUser} />
      <Route path="/LoginUsuario" component={LoginUsuario} />
      <Route path="/menuUsuario" component={MenuUser} />
      <Route path="/updateCompany/:id" component={CompanyFormUser} />
      <Route path="/updateProducto/:id" component={ProductFormUser} />
      {/* termino de rutas de usuario */}



    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
