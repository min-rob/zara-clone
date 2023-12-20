import "./App.css";
import React, { useEffect } from "react";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Woman from "./pages/Shop/Woman";
import Man from "./pages/Shop/Man";

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Main />} />
                <Route path="/woman/*" element={<Woman />} />
                <Route path="/man/*" element={<Man />} />
            </Routes>
        </Router>
    );
}

export default App;
