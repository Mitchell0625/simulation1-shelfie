import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="dash-div">
        Dashboard
        <Product />
      </div>
    );
  }
}

export default Dashboard;
