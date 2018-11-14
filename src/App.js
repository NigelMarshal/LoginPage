import React, { Component } from "react";
import Header from "./components/Header";
import LoginForm from "./containers/LoginForm";
import Products from "./components/Products";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
