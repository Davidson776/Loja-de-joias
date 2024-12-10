// src/pages/Contact.js
import React, { useState } from "react";
import SocialLinks from "../../components/SocialLinks"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Por favor, preencha todos os campos.');
            return;
        }

        console.log('Form submitted:', formData);
        setStatus('Mensagem enviada com sucesso!');

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <h2>Entre em Contato</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Mensagem:
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                    ></textarea>
                </label>
                <button type="submit">Enviar</button>
 </form>
            {status && <p>{status}</p>}
            <SocialLinks /> {/* Adicione o componente SocialLinks aqui */}
        </div>
    );
};

export default Contact;