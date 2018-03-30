import React from "react";

function Product(props) {
  return (
    <div className="product-div">
      Product
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <img src={props.image} />
    </div>
  );
}

export default Product;
