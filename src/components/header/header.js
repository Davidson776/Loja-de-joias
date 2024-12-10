// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Loja de Joias</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/contato">Contato</Link>
            </nav>
        </header>
    );
};

export default Header;