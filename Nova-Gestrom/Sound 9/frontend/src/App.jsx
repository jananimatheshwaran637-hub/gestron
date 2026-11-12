import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import City from "./City";

function App() {
  return (
    <Router>
      <div>
        <h1>Weather Dashboard</h1>
        <nav>
          <Link to="/chennai">Chennai</Link> |{" "}
          <Link to="/mumbai">Mumbai</Link> |{" "}
          <Link to="/delhi">Delhi</Link>
        </nav>
        <Routes><Route path="/:city" element={<City />} /></Routes>
      </div>
    </Router>
  );
}
export default App;
