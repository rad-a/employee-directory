import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import EmployeeTable from "./components/EmployeeTable/index";
import Header from "./components/Header";

function App() {
  return (
    <MDBContainer className="px-0 mx-0" fluid>
      <Header />

      <MDBRow className="px-md-2 mx-1 mx-md-3" center>
        <MDBCol>
          <EmployeeTable />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
