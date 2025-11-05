import React, { useState } from "react";
import "./TigrinhoAdComEstado.css";

export default function TigrinhoAdComEstado({ title, description, image, buttonText }) {
  const [loading, setLoading] = useState(false);
  const [played, setPlayed] = useState(false);

  const handlePlay = () => {
    setLoading(true);

    // Simula um carregamento de 2 segundos
    setTimeout(() => {
      setLoading(false);
      setPlayed(true);
    }, 2000);
  };

  return (
    <div className="ad-card">
      <img src={image} alt={title} className="ad-image" />
      <div className="ad-content">
        <h2>{title}</h2>
        <p>{description}</p>

        {!played ? (
          <button
            className="ad-button"
            onClick={handlePlay}
            disabled={loading}
          >
            {loading ? "Carregando..." : buttonText}
          </button>
        ) : (
          <p className="success-message">🎉 Você iniciou o jogo demo!</p>
        )}
      </div>
    </div>
  );
}
