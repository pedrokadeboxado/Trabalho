import React from "react";
import TigrinhoAdComEstado from '../TigrinhoAd'

export default function Exemplo() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <TigrinhoAdComEstado
        title="🎰 Tigrinho Turbo!"
        description="A sorte gira com você! Jogue nossa versão demo e veja se consegue o prêmio máximo!"
        image="https://via.placeholder.com/320x180?text=Tigrinho+Demo"
        buttonText="Jogar Agora"
        onClick={() => alert("Abrindo jogo demo...")}
      />
    </div>
  );
}
