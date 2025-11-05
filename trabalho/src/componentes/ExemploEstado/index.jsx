import React from "react";
import TigrinhoAdComEstado from "../TigrinhoAdComEstado";

export default function ExemploEstado() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <TigrinhoAdComEstado
        title="🎰 Tigrinho Turbo"
        description="A sorte gira com você! Teste sua sorte no modo demo!"
        image="https://via.placeholder.com/320x180?text=Tigrinho+Demo"
        buttonText="Jogar Agora"
      />
    </div>
  );
}
