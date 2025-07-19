import { Routes, Route } from 'react-router-dom';
import TelaInicial from './pages/TelaInicial';
import Convite from './pages/Convite';
import LoadingScreen from './pages/LoadingScreen';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // 2 segundos
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/convite" element={<Convite />} />
    </Routes>
  );
}

export default App;
