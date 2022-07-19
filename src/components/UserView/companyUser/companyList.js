import React, { useEffect } from "react";
import * as CompanyServer from "./CompanyServer";

// componentes:
import CompanyItem from "./CompanyItem";
import Navbar from "../navbar/NavbarUser";
import Header from "./CompanyHeader";

//

const CompanyList = () => {
  const [companies, setCompanies] = React.useState([]);

  const listCompanies = async () => {
    try {
      const res = await CompanyServer.listCompanies();
      const data = await res.json();
      setCompanies(data.companies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listCompanies();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Header/>
      <div className="row">
        {companies.map((company) => (
          <CompanyItem
            key={company.id}
            company={company}
            listCompanies={listCompanies}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
export default CompanyList;
