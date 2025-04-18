import React from "react";
import "../styles/Services.css";

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-content">
        <h2>Áreas de Atuação</h2>
        <h3 className="subtitle">
          Soluções jurídicas personalizadas para cada caso
        </h3>

        <div className="service-grid">
          <div className="service-category">
            <div className="service-icon">&#9787;</div>
            <h3>Direito de Família</h3>
            <ul>
              <li>Divórcios consensuais e litigiosos</li>
              <li>
                Guarda de filhos, pensão alimentícia e convivência familiar
              </li>
              <li>Reconhecimento e dissolução de união estável</li>
              <li>Adoção e reconhecimento de paternidade/maternidade</li>
            </ul>
          </div>

          <div className="service-category">
            <div className="service-icon">&#8986;</div>
            <h3>Direito das Sucessões</h3>
            <ul>
              <li>Inventário judicial e extrajudicial</li>
              <li>Partilhas e testamentos</li>
              <li>Planejamento sucessório e proteção patrimonial</li>
              <li>Resolução de conflitos entre herdeiros</li>
            </ul>
          </div>

          <div className="service-category">
            <div className="service-icon">&#9752;</div>
            <h3>Defesa dos Direitos das Mulheres e Meninas</h3>
            <ul>
              <li>Medidas protetivas de urgência</li>
              <li>
                Ações contra violência doméstica, institucional e de gênero
              </li>
              <li>Demandas por discriminação e assédio</li>
              <li>Ações de reparação por danos morais e materiais</li>
            </ul>
          </div>

          <div className="service-category">
            <div className="service-icon">&#128196;</div>
            <h3>Consultoria e Assessoria Jurídica Civil</h3>
            <ul>
              <li>Análise e elaboração de contratos</li>
              <li>Responsabilidade civil</li>
              <li>Consultoria preventiva e contenciosa</li>
              <li>Mediação e resolução de conflitos extrajudiciais</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
