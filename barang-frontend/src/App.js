import logo from "./logo.svg";
import "./App.css";
import { Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
