import React from "react";

// componentes:
import EnrutadorItem from "./EnrutadorItem";
import Navbar from "../navbar/Navbar";

//

const EnrutadorList = () => {
  // const [enrutador, setEnrutador] = React.useState([]);

  return (
    <React.Fragment>
      <Navbar />
      <EnrutadorItem  />
    </React.Fragment>
  );
};

export default EnrutadorList;
