import { useState } from 'react';
import '../styles/Carrossel.css';

import foto1 from '../assets/3f3f868d-5ccc-46ae-baea-e5a133e136a1 (1).jpg';
import foto2 from '../assets/IMG_7637 2.jpg';
import foto3 from '../assets/bg-desktop.jpg';
import foto4 from '../assets/fundomo.jpeg';

const fotos = [foto1, foto2, foto3, foto4];

const Carrossel = () => {
  const [indexAtual, setIndexAtual] = useState(0);

  const proximo = () => {
    setIndexAtual((prev) => (prev + 1) % fotos.length);
  };

  const anterior = () => {
    setIndexAtual((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  return (
    <div className="carrossel-container">
      <button className="carrossel-botao esq" onClick={anterior}>❮</button>

      <div className="carrossel-slide">
        <img src={fotos[indexAtual]} alt={`Foto ${indexAtual + 1}`} />
      </div>

      <button className="carrossel-botao dir" onClick={proximo}>❯</button>
    </div>
  );
};

export default Carrossel;
