import React from "react";
import "./TigrinhoAd.css";

export default function TigrinhoAd({ title, description, image, buttonText, onClick }) {
  return (
    <div className="ad-card">
      <img src={image} alt={title} className="ad-image" />
      <div className="ad-content">
        <h2 className="ad-title">{title}</h2>
        <p className="ad-description">{description}</p>
        <button className="ad-button" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
