import jogoDeAzarImg from '../assets/jogo-de-azar.png'; // ajuste o caminho conforme sua estrutura

export default function Tigre() {
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        backgroundColor: '#121212',
      }}
    >
      <img
        src={jogoDeAzarImg}
        alt="Jogo de Azar"
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      />
    </main>
  );
}
