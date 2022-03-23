import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Vegatables from "./Components/Catalogs/catalog-vegatables/vegatables";
import DriedFruits from "./Components/Catalogs/catalog-driedFruits/driedFruits";
import Fruits from "./Components/Catalogs/catalog-fruits/fruits";
import About from './Components/About/about'
import Catalog from './Components/Catalogs/catalog'
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/vegatables" element={<Vegatables />} />
          <Route path="/driedFruits" element={<DriedFruits />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
