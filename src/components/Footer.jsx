import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Angelotto Advogados" />
          <p>
            Oferecemos serviços jurídicos especializados em Direito de Família,
            Sucessões e defesa dos direitos das mulheres e meninas, com
            atendimento humanizado e acolhedor.
          </p>
          <div className="footer-social">
            <a
              href="https://facebook.com"
              className="social-link"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              className="social-link"
              aria-label="Instagram"
            >
              i
            </a>
            <a
              href="https://linkedin.com"
              className="social-link"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3 className="footer-heading">Links Rápidos</h3>
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre Nós</a>
            </li>
            <li>
              <a href="#services">Áreas de Atuação</a>
            </li>
            <li>
              <a href="#testimonials">Depoimentos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3 className="footer-heading">Contato</h3>
          <p>
            <span className="icon">📍</span> Av. Marquês de São Vicente, 230,
            18º Andar, Barra Funda - São Paulo/SP
          </p>
          <p>
            <span className="icon">📞</span> (11) 5200-3883
          </p>
          <p>
            <span className="icon">📱</span> (11) 91680-1800
          </p>
          <p>
            <span className="icon">✉️</span> contato@angelottoadvogados.com.br
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Angelotto Advogados. Todos os
          direitos reservados. | Desenvolvido por{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Agência Web
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
