import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// components admin:
import CompanyList from "./components/company/companyList";
import CompanyForm from "./components/company/CompanyForm";
import ProductoForm from './components/producto/ProductoForm';
import Companyforms from "./components/company/CompanyForms";
import Login from "./components/UserView/LoginUser/Login";
import Registro from "./components/RegisterRegister/SingUp";
// components user:
import CompanyFormUser from './components/UserView/companyUser/CompanyForm';
import CompanyListUser from './components/UserView/companyUser/companyList';
import ProductFormUser from './components/UserView/ProductUser/ProductoForm';
import ProductoListUser from './components/UserView/ProductUser/ProductoLista';
// bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
// termino bootstrap
import "./index.css";
import ProductList from "./components/producto/ProductoLista";

//
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <div className="container my-4 app" >
      <Route path="/" exact component={Login} />
      {/* Rutas de administrador */}
      <Route exact path="/companyList" component={CompanyList} />
      <Route path="/productoList" component={ProductList} />
      <Route path="/companyForm" component={CompanyForm} />
      <Route path="/productoForm" component={ProductoForm}/>
      <Route path="/updateCompany/:id" component={CompanyForm} />
      <Route path="/updateProducto/:id" component={ProductoForm} />
      <Route path="/companyForms" component={Companyforms} />
      <Route path="/registro" component={Registro} />
      {/* Termino de rutas de administrador */}

      {/* rutas de usuario */}
      <Route path="/companyFormUser" component={CompanyFormUser} />
      <Route path="/companyListUser" component={CompanyListUser} />
      <Route path="/productosFormUsuario" component={ProductFormUser} />
      <Route path="/productosUsuario" component={ProductoListUser} />
      
      {/* termino de rutas de usuario */}



    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
