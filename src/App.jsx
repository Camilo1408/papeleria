import React from "react";
import Nav from "./components/Nav"
import HeaderSlider from "./components/slider/HeaderSlider"
import Products from "./components/products/Products"
import AOS from "aos";
import "aos/dist/aos.css"

import TopProducts from "./components/TopProducts/TopProducts"


function App() {
  
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Nav></Nav>
      <HeaderSlider></HeaderSlider>
      <Products></Products>
      <TopProducts></TopProducts>
    </>
  )
}

export default App
