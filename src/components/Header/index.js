import React from "react";
import { MDBRow, MDBCol } from "mdbreact";

import "./style.css";

function Header() {
  return (
    <MDBRow className="header">
      <MDBCol className="main-header text-center text-light">
        <h1>Employee Directory</h1>
        <p>
          Click on column headers to filter by heading or use the search box to
          narrow your results.
        </p>
      </MDBCol>
    </MDBRow>
  );
}

export default Header;
