import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      imageUrl: "",
      product: "",
      price: ""
    };
    this.handleImage = this.handleImage.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
    this.baseState = this.state;
  }

  cancelForm() {
    this.setState({ imageUrl: "" });
    this.setState({ product: "" });
    this.setState({ price: "" });
  }
  handleImage(val) {
    this.setState({ imageUrl: val });
  }

  handleProduct(val) {
    this.setState({ product: val });
  }

  handlePrice(val) {
    this.setState({ price: val });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="form-div">
        Form
        <p>Image URL</p>
        <input
          value={this.state.imageUrl}
          onChange={e => {
            this.handleImage(e.target.value);
          }}
        />
        <p>Product Name</p>
        <input
          value={this.state.product}
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
        <button onClick={this.cancelForm}>Cancel</button>
        <button onClick="">Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
