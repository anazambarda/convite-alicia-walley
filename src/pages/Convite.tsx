import '../styles/Convite.css';
import { Church, Glasses } from 'lucide-react';
import { useEffect, useState } from 'react';
import cabecalho from '../assets/bg-desktop.jpg';
import videoNamoro from '../assets/Casamento foto certa .jpg';
import logoCasal from '../assets/logo.png';
import igrejaCerimonia from '../assets/igreja.png';

const targetDate = new Date('2025-12-27T16:30:00-03:00');

const Convite = () => {
  const [countdown, setCountdown] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
      const diff = targetDate.getTime() - agora.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
        return;
      }

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / (1000 * 60)) % 60);
      const segundos = Math.floor((diff / 1000) % 60);

      setCountdown({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="convite">
      {/* TOPO COM IMAGEM */}
      <div className="topo-banner">
        <img src={cabecalho} alt="Imagem de topo" />
      </div>

      {/* CONTADOR */}
      <div className="contador">
        <h2>Faltam...</h2>
        <div className="tempo">
          <div><span>{countdown.dias}</span><p>Dias</p></div>
          <div><span>{countdown.horas}</span><p>Horas</p></div>
          <div><span>{countdown.minutos}</span><p>Minutos</p></div>
          <div><span>{countdown.segundos}</span><p>Segundos</p></div>
        </div>
      </div>

      {/* LOGO CENTRALIZADO */}
      <div className="logo-casal">
        <img src={logoCasal} alt="Logo W e A" />
      </div>

      {/* NOSSA HISTÓRIA */}
      <section className="nossa-historia">
        <h3 className="titulo-sessao">Nossa História</h3>
        <p>
          A nossa história de amor iniciou em outubro de 2020, e desde então, compartilhamos momentos incríveis juntos.
          Passamos por momentos bons e ruins, incluindo uma pandemia que nos deixou afastados por 7 meses.
          No entanto, esses meses de distância serviram para nos mostrar que o nosso amor era verdadeiro e forte
          o suficiente para superar qualquer obstáculo.
        </p>
        <p>
          No vídeo, trazemos alguns momentos especiais do nosso namoro que nos levaram a tomar a decisão mais importante da nossa vida: casar!
          Desde os primeiros encontros até os momentos mais românticos, cada segundo ao lado um do outro foi precioso.
        </p>
        <p>
          Estamos ansiosos para compartilhar essa nova jornada juntos e criar novos momentos inesquecíveis.
          Obrigado por fazer parte da nossa história!
        </p>
      </section>

      {/* VÍDEO */}
      <section className="nosso-video">
        <h3 className="titulo-sessao">Nossos Momentos</h3>
        <p>
          Preparamos com muito carinho esse vídeo para compartilhar alguns dos momentos mais marcantes da nossa caminhada juntos.
          Esperamos que você sinta um pouco da emoção que vivemos em cada cena, cada sorriso e cada escolha até aqui.
          Dê o play quando estiver com o coração preparado para se emocionar com a gente 💛
        </p>
        <video controls preload="metadata" width="100%">
          <source src={videoNamoro} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </section>

      {/* CERIMÔNIA E FESTA */}
      <h3 className="titulo-sessao">Cerimônia & Festa</h3>

      {/* IGREJA CENTRALIZADA */}
      <div className="imagem-igreja">
        <img src={igrejaCerimonia} alt="Igreja da cerimônia" />
      </div>

      <div className="cartoes">
        <div className="cartao">
          <Church size={40} strokeWidth={2.5} className="icone-gold" />
          <h4>Cerimônia</h4>
          <p>27 de Dezembro de 2025 às 16:30</p>
          <p>Paróquia Nossa Senhora do Brasil</p>
          <p>Praça Nossa Sra. do Brasil, 01 - Jardim América, São Paulo</p>
          <a href="https://www.google.com/maps/place/Paróquia+Nossa+Senhora+do+Brasil" target="_blank" rel="noreferrer" className="link-gold">
            Ver no mapa
          </a>
        </div>

        <div className="cartao">
          <Glasses size={40} strokeWidth={2.5} className="icone-gold" />
          <h4>Recepção</h4>
          <p>Logo após a cerimônia</p>
          <p>Salão Assmann</p>
          <p>Estr. Bruno Pritsch - Santa Cruz do Sul, RS</p>
          <a href="https://www.google.com/maps/place/Sal%C3%A3o+Assmann" target="_blank" rel="noreferrer" className="link-gold">
            Ver no mapa
          </a>
        </div>
      </div>

      {/* CONFIRMAÇÃO DE PRESENÇA */}
      <section className="rsvp">
        <h3 className="titulo-sessao">Confirme sua Presença</h3>
        <p className="prazo">Por favor, confirme sua presença até o dia 10 de Outubro de 2025.</p>
        <form className="formulario">
          <label>
            Nome Completo:
            <input type="text" name="nome" required />
          </label>
          <fieldset>
            <legend>Você irá ao casamento?</legend>
            <label>
              <input type="radio" name="presenca" value="sim" required />
              Sim, com certeza!
            </label>
            <label>
              <input type="radio" name="presenca" value="nao" />
              Não poderei comparecer.
            </label>
          </fieldset>
          <button type="submit">Confirmar Presença</button>
        </form>
      </section>
    </section>
  );
};

export default Convite;
