import React, { useEffect } from "react";
import * as CompanyServer from "./CompanyServer";

// componentes:
import CompanyItem from "./CompanyItem";
import Navbar from "../navbar/Navbar";
import CompanyHeader from './CompanyHeader'
//

const CompanyList = () => {
  const [medidas, setMedidas] = React.useState([]);

  const listarMedidas = async () => {
    try {
      const res = await CompanyServer.listarMedidas();
      const data = await res.json();
      setMedidas(data.medidas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarMedidas();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <CompanyHeader/>
      <div className="d-flex container m-5">
        <div className="row">
          {/* {medidas.map((medida) => ( */}
          {/* <CompanyItem
          key={medida.id}
          medida={medida}
          listarMedidas={listarMedidas}
          />
          // <CompanyItem /> */}


           {/* ))}  */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default CompanyList;
