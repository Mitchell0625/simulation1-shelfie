import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryList: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    axios.get("/api/inventory").then(res => {
      console.log(res);
      this.setState({ inventoryList: res.data });
    });
  }

  getProducts() {
    axios.get("/api/inventory").then(res => {
      console.log(res);
      this.setState({ inventoryList: res.data });
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard list={this.state.inventoryList} />

        <Form getProduct={this.getProducts} />
      </div>
    );
  }
}

export default App;
