import React from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "../components/arabic";
import { Tech } from "../components";
import "./Home.css";
// import Navbar from "../components/arabic/Navbar";

const ArHome = () => {
  return (
    <div className="main-contect">
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          {/* <StarsCanvas /> */}
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
          .........
        </div>
        <div className=" h-[20vh] border">

        </div>
      </div>
    </div>
  );
};

export default ArHome;
