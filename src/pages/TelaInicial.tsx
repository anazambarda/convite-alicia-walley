import '../styles/TelaInicial.css';
import bgDesktop from '../assets/bg-desktop.jpg';
import bgMobile from '../assets/3f3f868d-5ccc-46ae-baea-e5a133e136a1 (1).jpg';
import { useNavigate } from 'react-router-dom';
import { MailIcon } from 'lucide-react';

function TelaInicial() {
  const navigate = useNavigate();

  return (
    <div className="tela-inicial">
      <img src={bgDesktop} alt="Fundo Desktop" className="bg-img bg-desktop" />
      <img src={bgMobile} alt="Fundo Mobile" className="bg-img bg-mobile" />
      <div className="overlay" />
      <div className="conteudo">
        <h1>Alicia & Walley</h1>
        <p>Deus uniu nossos caminhos e nós, sob sua benção, uniremos nossas vidas para sempre!</p>
        <p>27 de Dezembro de 2025</p>
        <button className="botao" onClick={() => navigate('/convite')}>
          <MailIcon size={18} />
          Abrir Convite
        </button>
      </div>
    </div>
  );
}

export default TelaInicial;
