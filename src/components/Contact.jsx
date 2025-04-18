import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário para seu backend
    console.log("Formulário enviado:", formData);
    alert("Agradecemos sua mensagem. Entraremos em contato em breve!");
    // Reset do formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Entre em Contato</h2>
          <div className="section-divider centered"></div>
          <p>
            Estamos sempre disponíveis para ajudar com suas questões jurídicas.
            Entre em contato para uma consulta.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-info-header">
              <h3>Informações de Contato</h3>
              <p>
                Entre em contato conosco por telefone, email ou visite nosso
                escritório para uma consulta personalizada.
              </p>
            </div>

            <ul className="contact-info-list">
              <li className="contact-info-item">
                <div className="contact-icon">
                  <i>📍</i>
                </div>
                <div className="contact-info-content">
                  <h4>Endereço do Escritório</h4>
                  <p>
                    Av. Marquês de São Vicente, 230, 18º Andar
                    <br />
                    Barra Funda, São Paulo - SP
                  </p>
                </div>
              </li>

              <li className="contact-info-item">
                <div className="contact-icon">
                  <i>📞</i>
                </div>
                <div className="contact-info-content">
                  <h4>Telefone</h4>
                  <p>
                    <a href="tel:+551198765-4321">(11) 98765-4321</a>
                  </p>
                </div>
              </li>

              <li className="contact-info-item">
                <div className="contact-icon">
                  <i>✉️</i>
                </div>
                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:contato@angelotto.adv.br">
                      contato@angelotto.adv.br
                    </a>
                  </p>
                </div>
              </li>

              <li className="contact-info-item">
                <div className="contact-icon">
                  <i>⏰</i>
                </div>
                <div className="contact-info-content">
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sexta: 9h às 18h</p>
                </div>
              </li>
            </ul>

            <div className="social-links">
              <a href="#" className="social-link" title="Facebook">
                <i>f</i>
              </a>
              <a href="#" className="social-link" title="Instagram">
                <i>ig</i>
              </a>
              <a href="#" className="social-link" title="LinkedIn">
                <i>in</i>
              </a>
              <a href="#" className="social-link" title="WhatsApp">
                <i>w</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
