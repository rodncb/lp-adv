import React from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  // Normalmente as imagens de perfil viriam de um banco de dados
  // Aqui estamos usando URLs de imagens genéricas como placeholder
  const testimonials = [
    {
      id: 1,
      name: "Maria Oliveira",
      position: "Cliente desde 2023",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      rating: 5,
      text: "A Dra. Angelotto foi essencial no meu processo de divórcio. Seu atendimento humanizado e conhecimento jurídico fizeram toda a diferença em um momento difícil da minha vida.",
    },
    {
      id: 2,
      name: "João Silva",
      position: "Cliente desde 2022",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      rating: 5,
      text: "Profissionais competentes e atenciosas. Resolveram meu caso de inventário com agilidade e sempre me mantiveram informado em cada etapa do processo.",
    },
    {
      id: 3,
      name: "Carolina Santos",
      position: "Cliente desde 2024",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      text: "Excelente atendimento na área de direito de família. A advogada compreendeu minhas necessidades e me orientou com clareza sobre meus direitos. Recomendo fortemente.",
    },
  ];

  // Função para renderizar as estrelas de avaliação
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>★</span>);
    }
    return stars;
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Depoimentos</h2>
          <div className="section-divider centered"></div>
          <p>
            Veja o que nossos clientes dizem sobre nosso trabalho e atendimento
            personalizado.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${
                testimonial.id === 1 ? "featured" : ""
              }`}
            >
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-content">"{testimonial.text}"</p>
              <div className="testimonial-client">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="client-image"
                />
                <div className="client-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
