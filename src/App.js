// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header"; // Verifique se o nome do arquivo está correto
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";
import Products from "./pages/produtos/Products";
import Contact from "./pages/contato/Contato";
import './styles/App.css'; // Importando o CSS

function App() {
    return (
            <div>   
                <Header />
                <Banner />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produtos" element={<Products />} />
                    <Route path="/contato" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        
    );
}

export default App;