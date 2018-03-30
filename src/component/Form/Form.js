import React, { Component } from "react";
import axios from "axios";
import "./Form.css";
class Form extends Component {
  constructor() {
    super();

    this.state = {
      image_url: "",
      product_name: "",
      price: ""
    };
    this.handleImage = this.handleImage.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
    this.newProduct = this.newProduct.bind(this);
  }

  cancelForm() {
    this.setState({ image_url: "" });
    this.setState({ product_name: "" });
    this.setState({ price: "" });
  }
  handleImage(val) {
    this.setState({ image_url: val });
  }

  handleProduct(val) {
    this.setState({ product_name: val });
  }

  handlePrice(val) {
    this.setState({ price: val });
  }

  newProduct() {
    const { product_name, price, image_url } = this.state;
    axios.post("/api/product", { product_name, price, image_url }).then(res => {
      this.props.getProduct();
      this.cancelForm();
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="form-div">
        Form
        <p>Image URL</p>
        <input
          value={this.state.image_url}
          onChange={e => {
            this.handleImage(e.target.value);
          }}
        />
        <p>Product Name</p>
        <input
          value={this.state.product_name}
          onChange={e => {
            this.handleProduct(e.target.value);
          }}
        />
        <p>Price</p>
        <input
          value={this.state.price}
          onChange={e => {
            this.handlePrice(e.target.value);
          }}
        />
        <button className="buttons" onClick={this.cancelForm}>
          Cancel
        </button>
        <button
          className="buttons"
          onClick={() => {
            this.newProduct();
          }}
        >
          Add to Inventory
        </button>
      </div>
    );
  }
}

export default Form;
