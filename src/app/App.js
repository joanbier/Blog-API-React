import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutePaths from "./RoutePaths";
import HeaderBackground from "../components/HeaderBackground";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Breadcrumbs from "./Breadcrumbs";
import "../components/Cards/Select.css";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Router>
          <div className="app">
            <header>
              <Nav />
              <HeaderBackground />
            </header>
            <Breadcrumbs />
            <main>
              <RoutePaths />
            </main>
          </div>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
