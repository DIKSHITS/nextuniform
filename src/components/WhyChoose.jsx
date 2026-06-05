import React from "react";
import "../styles/WhyChoose.css";

const WhyChoose = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Premium Fabrics",
      desc: "Long lasting, durable & comfortable."
    },
    {
      icon: "🎯",
      title: "Custom Branding",
      desc: "Logo, embroidery & printing."
    },
    {
      icon: "🤝",
      title: "Bulk Order Support",
      desc: "For schools & large enterprises."
    },
    {
      icon: "✅",
      title: "Quality Assurance",
      desc: "Strict quality checks at every step."
    }
  ];

  return (
    <section className="why-choose">
      <div className="why-header">
        <h2>Why Choose NextUniform?</h2>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="trusted">
        Trusted by 1000+ Businesses Worldwide
      </div>
    </section>
  );
};

export default WhyChoose;