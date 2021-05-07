import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Header from "./components/header/header.js";
import Nav from "./components/nav/nav.js";
import Wrapper from "./components/wrapper/wrapper.js";
import Footer from "./components/footer/footer.js";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Wrapper>
          <>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
          </>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
