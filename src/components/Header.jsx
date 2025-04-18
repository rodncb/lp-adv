import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logoImage from "../assets/logo.jpeg"; // Importando a imagem do logo

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detector de scroll para aplicar efeitos no header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para alternar o menu mobile
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        {/* Logo Angelotto Advogados */}
        <div className="logo">
          <img
            src={logoImage}
            alt="Angelotto Advogados"
            className="logo-image"
          />
        </div>
      </div>

      {/* Menu hamburger para mobile */}
      <button
        className="mobile-menu-btn"
        onClick={toggleMobileMenu}
        aria-label="Menu de navegação"
      >
        <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <nav className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
        <ul>
          {/* Item "Home" removido para evitar que apareça na versão mobile */}
          <li>
            <a href="#about" onClick={closeMenu}>
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Áreas de Atuação
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={closeMenu}>
              Depoimentos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
