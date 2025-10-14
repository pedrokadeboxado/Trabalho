export default function Cabecalio() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    background: 'linear-gradient(90deg, #f7941d, #fbbc04)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    color: '#121212',
  };

  const titleStyle = {
    fontSize: '2.2rem',
    fontWeight: '900',
    letterSpacing: '2px',
    textShadow: '1px 1px 2px #000',
    cursor: 'default',
  };

  const navStyle = {
    display: 'flex',
    gap: '30px',
    fontWeight: '700',
    fontSize: '1.1rem',
  };

  const linkStyle = {
    color: '#121212',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const btnStyle = {
    backgroundColor: '#e63946',
    border: 'none',
    padding: '12px 25px',
    fontSize: '1.1rem',
    color: 'white',
    borderRadius: '30px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 3px 8px rgba(230, 57, 70, 0.6)',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Retortawin</h1>
        <nav style={navStyle}>
          <a href="#sobre" style={linkStyle}>Sobre o Jogo</a>
          <a href="#regras" style={linkStyle}>Regras</a>
          <a href="#ranking" style={linkStyle}>Ranking</a>
        </nav>
        <button
          style={btnStyle}
          onClick={() => {
            window.location.href = '#jogar';
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#b32c37'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#e63946'}
        >
          Jogar Agora
        </button>
      </header>
    </>
  );
}
