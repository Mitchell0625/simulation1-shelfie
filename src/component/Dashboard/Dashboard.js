import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list } = this.props;
    let mappedList = list.map((e, i) => {
      return (
        <Product
          key={i}
          name={e.product_name}
          price={e.price}
          image={e.imageU}
        />
      );
    });
    return (
      <div className="dash-div">
        Dashboard
        <Product />
        {mappedList}
      </div>
    );
  }
}

export default Dashboard;
