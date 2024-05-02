import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer/Footer";
import About1 from "../components/About/About1";
import About2 from "../components/About/About2";
import Product from "../components/About/Product";
// import Navbar from "./components/navbar/Navbar";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";
import CTA from "../components/CTA/CTA";
const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
          {/* <Navbar /> */}
          <Navbar />
        </div>
        <About1 />
        <About2 />
        <CTA />
        <Product />
        <Footer />
      </div>
    </>
  );
};

export default About;
