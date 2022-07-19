import React from "react";

// componentes:
import EnrutadorItem from "./EnrutadorItem";
import Navbar from "../navbar/NavbarUser";
import HeaderEnrutador from "./HeaderEnrutador";

//

const EnrutadorList = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeaderEnrutador />
      <EnrutadorItem />
    </React.Fragment>
  );
};

export default EnrutadorList;
