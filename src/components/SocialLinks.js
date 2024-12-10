// src/components/SocialLinks.js
import React from "react";
import facebookIcon from "../assets/icons/facebook.png"; // Substitua pelo caminho correto
import twitterIcon from "../assets/icons/twitter.png"; // Substitua pelo caminho correto
import instagramIcon from "../assets/icons/instagram.png"; // Substitua pelo caminho correto
import linkedinIcon from "../assets/icons/linkedin.png"; // Substitua pelo caminho correto

const SocialLinks = () => {
    return (
        <div className="social-links">
            <h3>Conecte-se Conosco</h3>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
            </a>
        </div>
    );
};

export default SocialLinks;