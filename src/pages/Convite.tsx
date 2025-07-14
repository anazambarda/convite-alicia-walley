import '../styles/Convite.css';
import { Church, Glasses } from 'lucide-react';
import { useEffect, useState } from 'react';
import Carrossel from './Carrossel';

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
      <div className="contador">
        <h2>Faltam...</h2>
        <div className="tempo">
          <div><span>{countdown.dias}</span><p>Dias</p></div>
          <div><span>{countdown.horas}</span><p>Horas</p></div>
          <div><span>{countdown.minutos}</span><p>Minutos</p></div>
          <div><span>{countdown.segundos}</span><p>Segundos</p></div>
        </div>
      </div>

      <h3 className="titulo-sessao">Cerimônia & Festa</h3>
      <div className="cartoes">
        <div className="cartao">
          <Church size={40} strokeWidth={2.5} />
          <h4>Cerimônia</h4>
          <p>27 de Dezembro de 2025 às 16:30</p>
          <p>Paróquia Nossa Senhora do Brasil</p>
          <p>Praça Nossa Sra. do Brasil, 01 - Jardim América, São Paulo</p>
          <a
            href="https://www.google.com/maps/place/Paróquia+Nossa+Senhora+do+Brasil"
            target="_blank"
            rel="noreferrer"
          >
            Ver no mapa 📍
          </a>
        </div>

        <div className="cartao">
          <Glasses size={40} strokeWidth={2.5} />
          <h4>Recepção</h4>
          <p>Logo após a cerimônia</p>
          <p>Casa Petra</p>
          <p>Av. Aratãs, 1010 - Moema, São Paulo</p>
          <a
            href="https://www.google.com/maps/place/Casa+Petra"
            target="_blank"
            rel="noreferrer"
          >
            Ver no mapa 📍
          </a>
        </div>
      </div>

      <h3 className="titulo-sessao">Nossos Momentos</h3>
      <Carrossel />

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
