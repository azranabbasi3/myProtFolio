import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Services from "./Pages/Services";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Skills from "./Pages/Skills";
import ScrollToTopButton from "./components/ScrollToTop/ScrolltoTop";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default App;
