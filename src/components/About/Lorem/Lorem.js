import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
function Lorem(props) {
  return (
    <div>
      <MDBCol md="1" size="2">
        <MDBIcon far icon="chart-bar" size="2x" className="indigo-text" />
      </MDBCol>
      <MDBCol md="11" size="10">
        <h5 className="font-weight-bold mb-3">{props.name}</h5>
        <p className="grey-text">{props.lorem}</p>
      </MDBCol>
    </div>
  );
}

export default Lorem;
