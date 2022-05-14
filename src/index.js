import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// components:
import CompanyList from "./components/company/companyList";
import Navbar from "./components/navbar/Navbar"; 
import CompanyForm from "./components/company/CompanyForm";

//
import "bootstrap/dist/js/bootstrap.bundle.min";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


// 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
  
    <Navbar />
      <div className="container my-4">
          <Route exact path="/" component={CompanyList} />
          <Route path="/companyForm" component={CompanyForm} />
          <Route path="/updateCompany/:id" component={CompanyForm} />
      </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
