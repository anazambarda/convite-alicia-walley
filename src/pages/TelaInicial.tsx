import '../styles/TelaInicial.css';
import bgDesktop from '../assets/bg-desktop.jpg';
import bgMobile from '../assets/Casal.jpeg';
import { useNavigate } from 'react-router-dom';
import { MailIcon } from 'lucide-react';

function TelaInicial() {
  const navigate = useNavigate();

  return (
    <div className="tela-inicial">
      <img src={bgDesktop} alt="Fundo Desktop" className="bg-img bg-desktop" />
      <img src={bgMobile} alt="Fundo Mobile" className="bg-img bg-mobile" />
      <div className="overlay" />

      {/* TÍTULO FIXO */}
      <div className="titulo-nomes">
        <h1>Alícia & Walley</h1>
      </div>

      {/* DESKTOP */}
      <div className="conteudo desktop">
        <p>Deus uniu nossos caminhos e nós, sob sua benção, uniremos nossas vidas para sempre!</p>
        <p>27 de dezembro de 2025</p>
        <button className="botao" onClick={() => navigate('/convite')}>
          <MailIcon size={18} />
          Abrir Convite
        </button>
      </div>

      {/* MOBILE */}
      <div className="conteudo mobile">
        <div className="baixo">
          <p className="data">
            Deus uniu nossos caminhos e nós, sob sua benção, uniremos nossas vidas para sempre!
          </p>
          <p>27 de dezembro de 2025</p>
          <button className="botao" onClick={() => navigate('/convite')}>
            <MailIcon size={18} />
            Abrir Convite
          </button>
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
