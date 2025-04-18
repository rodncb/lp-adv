import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>Sobre Nós</h2>
        <h3>Cuidar, Defender, Transformar.</h3>

        <div className="about-content-wrapper">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Escritório Angelotto Advogados"
            />
          </div>
          <div className="about-text">
            <p>
              O Angelotto Advogados e Assessoria Jurídica atua com excelência em
              Direito Civil, com ênfase em questões familiares, sucessórias e na
              defesa dos direitos das mulheres e meninas.
            </p>
            <p>
              Com uma abordagem ética, acolhedora e técnica, buscamos soluções
              jurídicas eficazes para situações que exigem sensibilidade e
              combatividade.
            </p>
          </div>
        </div>

        <div className="mission-vision-values">
          <div className="mv-item">
            <div className="mv-item-icon">&#9878;</div>
            <h4>Missão</h4>
            <p>
              Garantir acesso à justiça com dignidade, empatia e qualidade
              técnica.
            </p>
          </div>

          <div className="mv-item">
            <div className="mv-item-icon">&#128065;</div>
            <h4>Visão</h4>
            <p>
              Ser referência em advocacia civil e no enfrentamento da violência
              de gênero no Brasil.
            </p>
          </div>

          <div className="mv-item">
            <div className="mv-item-icon">&#10084;</div>
            <h4>Valores</h4>
            <p>
              Ética • Empatia • Justiça • Combatividade • Transformação Social
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
