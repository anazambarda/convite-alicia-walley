import { Routes, Route } from 'react-router-dom';
import TelaInicial from './pages/TelaInicial';
import Convite from './pages/Convite';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/convite" element={<Convite />} />
    </Routes>
  );
}

export default App;
