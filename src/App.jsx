import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
