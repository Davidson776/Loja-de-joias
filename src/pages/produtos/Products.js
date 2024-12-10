import React from "react";

// Importando as imagens dos assets
import colar from "../../assets/joias_produtos/colar.jpg";
import anel from "../../assets/joias_produtos/anel.jpg";
import brincos from "../../assets/joias_produtos/brincos.jpg";
import pulseira from "../../assets/joias_produtos/pulseira.jpg";
import aliança  from "../../assets/joias_produtos/pulseira.jpg";
import brinco_ouro  from "../../assets/joias_produtos/brinco_ouro.jpg";
import pulseira_ouro  from "../../assets/joias_produtos/pulseira_ouro.jpg";
import colar_prata  from "../../assets/joias_produtos/colar_prata.jpg";
import pingente_personalizado  from "../../assets/joias_produtos/pingente_personalizado.webp";
import brinco_argola_ouro from "../../assets/joias_produtos/brinco_argola_ouro.jpg";


import './styles.css';
const products = [
    { id: 1, name: "colar-de-perolas", price: 150.00,image: colar},
    {id: 2,name: "brincos",price: 300.00,image: brincos },
    {id: 3,name: "anel-terco-grosso",price: 300.00,image: anel},
    {  id: 4,  name: "pulseira",  price: 300.00,  image: pulseira},
    { id: 5, name: "aliança", price: 300.00, image: aliança},
    {  id: 6, name: "brinco_ouro", price: 300.00, image: brinco_ouro},
    {  id: 7,name: "pulseira_ouro", price: 300.00, image: pulseira_ouro},
    {  id: 8, name: "colar_prata",price: 300.00, image: colar_prata},
    {  id: 8,name: "pingente_personalizado",price: 300.00,image: pingente_personalizado},
    { id: 8, name: "brico_argola_ouro", price: 300.00, image: brinco_argola_ouro},
];

function Products() {
    return (
        <div className="products">
            <h2>Nossos Produtos</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Preço: R${product.price.toFixed(2)}</p>
                        <button className="buy-button">Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;