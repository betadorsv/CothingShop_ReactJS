import React, { Component } from "react";
import { MDBRow, MDBCol, MDBAnimation, MDBIcon, MDBContainer } from "mdbreact";
import Abouts from "../About/Abouts";

const Conten = [
  {
    id: 1,
    name: "About",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipisicing.Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.",
  },
  {
    id: 1,
    name: "Be Tran",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipisicing.Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.",
  },
  {
    id: 1,
    name: "RoBeTran",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipisicing.Reprehenderit maiores nam, aperiam minima elit assumenda voluptate velit.",
  },
];

function Collections() {
  return (
    <MDBContainer>
      <section className="my-5">
        <MDBAnimation reveal duration="2s" type="slideInLeft">
          <h2
            style={{ color: "#81c784" }}
            className="h1-responsive font-weight-bold text-center my-5"
          >
            About US
          </h2>
        </MDBAnimation>
        <MDBAnimation reveal duration="2s" type="slideInRight">
          <p className="grey-text w-responsive text-center mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit
            maiores nam, aperiam minima elit assumenda voluptate velit.
          </p>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeIn" duration="3s">
          <Abouts name={Conten.name} lorem={Conten.lorem}></Abouts>
        </MDBAnimation>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="book" size="2x" className="cyan-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Education</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="code" size="2x" className="red-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Technology</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon
                  far
                  icon="money-bill-alt"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">Finance</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg"
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
      </section>
    </MDBContainer>
  );
}

export default Collections;
