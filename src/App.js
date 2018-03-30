import React, { Component } from "react";
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryList: [
        {
          product_id: 98,
          product_name: "Jacket",
          price: 45.0,
          imageU:
            "https://s7.landsend.com/is/image/LandsEnd/486012_AK17_LF_27Q?fmt=jpeg,rgb&qlt=80,1&op_sharpen=0&resMode=sharp2&op_usm=0.5,1,3,0&icc=sRGB%20IEC61966-2.1,relative&iccEmbed=1&hei=561&wid=374"
        },
        {
          product_id: 99,
          product_name: "Hat",
          price: 25.0,
          imageU:
            "https://cdn.shopify.com/s/files/1/0636/4053/products/yey_grande_26591bda-2080-4798-bf15-606acf28517c_800x.jpg?v=1495471940"
        },
        {
          product_id: 100,
          product_name: "Scarf",
          price: 20.0,
          imageU:
            "https://cdn.tobi.com/product_images/md/2/toast-wildfire-skinny-fringed-scarf.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Dashboard list={this.state.inventoryList} />

        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
