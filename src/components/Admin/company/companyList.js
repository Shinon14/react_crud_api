import React, { useEffect } from "react";
import * as CompanyServer from "./CompanyServer";

// componentes:
import CompanyItem from "./CompanyItem";
import Navbar from "../navbar/Navbar";
//

const CompanyList = () => {
  const [companies, setCompanies] = React.useState([]);

  const listCompanies = async () => {
    try {
      const res = await CompanyServer.listCompanies();
      const data = await res.json();
      setCompanies({
        id: 1,
        name: "Company 1",
        foundation: "2020",
        website: "www.company1.com",
      });
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
      <div className="d-flex container m-5">
        <div className="row">
          {/* {companies.map((company) => ( */}
          <CompanyItem
          // key={company.id}
          // company={company}
          // listCompanies={listCompanies}
          />
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
          <CompanyItem />
          {/* ))} */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default CompanyList;
