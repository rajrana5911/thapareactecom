import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./components/productcontex";
const About = () => {
  const {myName} = useProductContext()
  const data = {
    name:"raj ecommerce"
  }
  return(
    <>
    {myName}
     <HeroSection myData={data} />{" "}
     </>
     );
};

export default About;
