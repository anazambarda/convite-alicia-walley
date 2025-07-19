import '../styles/Convite.css';
import { useEffect, useState, useRef } from 'react';
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';

import cabecalho from '../assets/bg-desktop.jpg';
import videoNamoro from '../assets/video_casamento.mp4';
import logoCasal from '../assets/logo.png';
import igrejaCerimonia from '../assets/igreja.png';
import salaoFesta from '../assets/taças.png';
import musica from '../assets/music.mp3';

const targetDate = new Date('2025-12-27T16:30:00-03:00');

const Convite = () => {
  const [countdown, setCountdown] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
  const [mostrarAviso, setMostrarAviso] = useState(true);
  const [audioAtivo, setAudioAtivo] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const iniciarAudio = () => {
    audioRef.current?.play();
    setAudioAtivo(true);
    setMostrarAviso(false);
  };

  const recusarAudio = () => {
    setMostrarAviso(false);
  };

  const alternarAudio = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setAudioAtivo(true);
    } else {
      audioRef.current.pause();
      setAudioAtivo(false);
    }
  };

  return (
    <section className="convite">
      <audio ref={audioRef} src={musica} loop />

      {mostrarAviso && (
        <div className="aviso-audio">
          <div className="aviso-conteudo">
            <p>Essa tela possui música, deseja reproduzir?</p>
            <div className="botoes-audio">
              <button className="sim" onClick={iniciarAudio}>Sim, quero</button>
              <button className="nao" onClick={recusarAudio}>Melhor não</button>
            </div>
          </div>
        </div>
      )}

      {!mostrarAviso && (
        <button className="botao-audio-flutuante" onClick={alternarAudio} aria-label="Controlar música">
          <div className="icone-bolinha">
            {audioAtivo ? <MdVolumeUp size={24} color="#fff" /> : <MdVolumeOff size={24} color="#fff" />}
          </div>
        </button>
      )}

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
        <div className="caixa-texto">
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
        </div>
      </section>

      <div className="linha-decorada" />

      {/* VÍDEO */}
      <section className="nosso-video">
        <h3 className="titulo-sessao">Nossos Momentos</h3>
        <div className="caixa-texto">
          <p>
            Preparamos com muito carinho esse vídeo para compartilhar alguns dos momentos mais marcantes da nossa caminhada juntos.
            Esperamos que você sinta um pouco da emoção que vivemos em cada cena, cada sorriso e cada escolha até aqui.
            Dê o play quando estiver com o coração preparado para se emocionar com a gente 💛
          </p>
          <video controls preload="metadata" width="100%">
            <source src={videoNamoro} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      </section>

      <div className="linha-decorada" />

      {/* CERIMÔNIA */}
      <h3 className="titulo-sessao">Cerimônia</h3>
      <div className="imagem-igreja">
        <img src={igrejaCerimonia} alt="Igreja da cerimônia" />
      </div>
      <div className="cartao-simples">
        <p>27 de Dezembro de 2025 às 16:30</p>
        <p>Igreja São José</p>
        <p>Comunidade de Vida e Oração Cidadãos do Infinito - Linha Cereja, Vera Cruz</p>
        <a
          href="https://maps.app.goo.gl/ARA1SyUphaC5rQLw6"
          target="_blank"
          rel="noreferrer"
          className="link-gold"
        >
          Ver no mapa
        </a>
      </div>

      <div className="linha-decorada" />

      {/* RECEPÇÃO */}
      <h3 className="titulo-sessao">Recepção</h3>
      <div className="imagem-igreja">
        <img src={salaoFesta} alt="Imagem do salão da festa" />
      </div>
      <div className="cartao-simples">
        <p>Logo após a cerimônia</p>
        <p>Salão Assmann</p>
        <p>Estr. Bruno Pritsch - Santa Cruz do Sul, RS</p>
        <a
          href="https://maps.app.goo.gl/X7NyNayzBLG1Hom46"
          target="_blank"
          rel="noreferrer"
          className="link-gold"
        >
          Ver no mapa
        </a>
      </div>

      <div className="linha-decorada" />

      {/* CONFIRMAÇÃO DE PRESENÇA */}
      <section className="rsvp">
        <div style={{ textAlign: 'center', marginTop: '0' }}>
          <h3 className="titulo-sessao" style={{ marginBottom: '1rem', marginTop: '0' }}>
            Confirme sua Presença
          </h3>
          <p className="prazo">Por favor, confirme sua presença até o dia 10 de Outubro de 2025.</p>
          <p style={{ margin: '2rem 0 1.5rem' }}>
            Clique no botão abaixo para preencher o formulário:
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScn0zT351qh8IlptAyePw9qQApL4qa6EYHPa4YUb_-wWXrkZg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.8rem 2rem',
              backgroundColor: '#d4af37',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '2rem',
              textDecoration: 'none',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#b28d1c'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#d4af37'}
          >
            Confirmar Presença
          </a>
        </div>
      </section>
    </section>
  );
};

export default Convite;
