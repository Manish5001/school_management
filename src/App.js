
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/addSchool">Add School</Link>
            </li>
            <li>
              <Link to="/showSchools">Show Schools</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/addSchool" element={<AddSchool />} />
            <Route path="/showSchools" element={<ShowSchools />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
