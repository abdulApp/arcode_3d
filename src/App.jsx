import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import ArHome from "./page/ArHome";
// import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/en"
          element={
            <Home />
          }
        />
        <Route
          path="/"
          element={
            <ArHome />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
