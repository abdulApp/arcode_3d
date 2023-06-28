import React from "react";

import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./GptAi.css";

const GptAi = () => {
  return (
    <main>
      {/* <div className="main">
        <div className="gradient" />
      </div> */}
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default GptAi;
