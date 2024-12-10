// src/pages/Home.js
import React from "react";

// Importando as imagens
import produto1 from "../../assets/produtos/produto1.jpg";
import produto2 from "../../assets/produtos/produto2.jpg";
import produto3 from "../../assets/produtos/produto3.webp";
import produto4 from "../../assets/produtos/produto4.jpg";
import produto5 from "../../assets/produtos/produto5.jpg";


// Lista de produtos em destaque
const products = [
    { id: 1, name: "Produto 1", price: "R$ 100,00", imageUrl: produto1 },
    { id: 2, name: "Produto 2", price: "R$ 150,00", imageUrl: produto2 },
    { id: 3, name: "Produto 3", price: "R$ 200,00", imageUrl: produto3 },
    { id: 4, name: "Produto 4", price: "R$ 250,00", imageUrl: produto4 },
    { id: 5, name: "Produto 5", price: "R$ 300,00", imageUrl: produto5 },
    
];

const Home = () => {
    return (
        <div>
            <h2>Produtos em Destaque</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                {products.map(product => (
                    <div key={product.id} style={{ margin: "10px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px", width: "200px", textAlign: "center" }}>
                        <img src={product.imageUrl} alt={product.name} style={{ width: "100%", height: "auto" }} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button style={{ padding: "5px 10px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px" }}>
                            Adicionar ao Carrinho
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;