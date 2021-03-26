import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import { MDBBox, MDBContainer } from "mdbreact";

const products = [
  {
    id: 1,
    name: "Blue TShirt",
    description: "Blue T Shirt",
    image:
      "https://istorevn.vn/uploads/apple-watch-s5-40mm-vien-nhom-day-cao-su10-2-1-400x400.jpg",
  },
  {
    id: 2,
    name: "Red TShirt",
    description: "Red T Shirt",
    image:
      "https://hangtotgiagoc.com/wp-content/uploads/2020/02/11246892643_72381208.400x400.jpg",
  },
  {
    id: 3,
    name: "Black TShirt",
    description: "Black T Shirt",
    image:
      "https://trummohinh.com/wp-content/uploads/2019/03/O1CN011E6M427yldX3ZTl_1663180302-400x400.jpg?v=1599793479",
  },
  {
    id: 4,
    name: "White TShirt",
    description: "White T Shirt",
    image:
      "https://trummohinh.com/wp-content/uploads/2020/04/IMG-7805-400x400.jpg",
  },
  {
    id: 5,
    name: "Yellow TShirt",
    description: "Yellow T Shirt",
    image:
      "https://trummohinh.com/wp-content/uploads/2020/04/IMG-7805-400x400.jpg",
  },
];
const Products = () => {
  return (
    <MDBContainer display="flex" justifyContent="center">
      <Grid container justify="center" spacing={5}>
        {products.map((product) => (
          <Grid item container key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}></Product>
          </Grid>
        ))}
      </Grid>
    </MDBContainer>
  );
};

export default Products;
