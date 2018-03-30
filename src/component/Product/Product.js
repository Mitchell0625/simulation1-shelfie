import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="product-div">
      <div className="inner">
        <h2>{props.name}</h2>
        <p>{props.price}</p>
      </div>
      <img src={props.image} />
    </div>
  );
}

export default Product;
