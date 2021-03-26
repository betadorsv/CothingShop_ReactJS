import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
} from "mdbreact";
import Lorem from "./Lorem/Lorem";

function Abouts(props) {
  return (
    <MDBRow>
      <MDBCol lg="5" className="mb-lg-0 mb-5">
        <img
          src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
          alt=""
          className="img-fluid rounded z-depth-1"
        />
      </MDBCol>
      <MDBCol lg="7">
        <MDBRow className="mb-3">
          <Lorem name={props.name} lorem={props.lorem}></Lorem>
        </MDBRow>
        <MDBRow className="mb-3">
          <Lorem></Lorem>
        </MDBRow>
        <MDBRow className="mb-3">
          <Lorem></Lorem>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  );
}

export default Abouts;
