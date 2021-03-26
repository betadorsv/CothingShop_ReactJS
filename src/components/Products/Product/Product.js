import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact";

function Product({ product }) {
  return (
    <div style={{ padding: "10px", height: "50%" }}>
      <MDBCard>
        <MDBCardImage
          hover
          overlay="black-strong"
          className="img-fluid"
          src={product.image}
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{product.name}</MDBCardTitle>
          <MDBCardText>{product.description}</MDBCardText>
          <MDBBtn color="blue-gradient" href="#">
            <MDBIcon icon="cart-plus" />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Product;
