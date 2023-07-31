import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Home from "./page/Home";
import GptAi from "./GPT AI/GptAi";
import ArHome from "./page/ArHome";
// import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/arhome"
          element={
            <ArHome />
          }
        />

        <Route path="/gptai" element={
        <div className="bg-[#fff]">
          <GptAi />
        </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
