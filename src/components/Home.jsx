import React from "react";
import "../styles/Home.css";
import backgroundImage from "../assets/mesa-de-advogado.webp"; // Importando a imagem de fundo

function Home() {
  return (
    <section
      id="home"
      className="home-section"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.6)), url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Removida a div home-bg que estava causando problemas */}

      <div className="home-content">
        <div className="home-text">
          <h1>
            Advocacia <span>Especializada</span> em Direito de Família
          </h1>
          <p>
            Atendimento humanizado, estratégico e personalizado para garantir a
            proteção dos seus direitos e de sua família.
          </p>
          <div className="home-buttons">
            <a href="#contact" className="btn btn-primary home-btn">
              Fale Conosco
            </a>
            <a href="#services" className="btn btn-outline home-btn">
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      <div className="home-feature-bar">
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <div className="feature-text">
              <h4>Atendimento Personalizado</h4>
              <p>Dedicação exclusiva ao seu caso</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">⚖️</div>
            <div className="feature-text">
              <h4>Expertise Jurídica</h4>
              <p>Advogados especializados</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🤝</div>
            <div className="feature-text">
              <h4>Comprometimento</h4>
              <p>Defendemos seus interesses</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <div className="feature-text">
              <h4>Atendimento 24h</h4>
              <p>Via WhatsApp para urgências</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
