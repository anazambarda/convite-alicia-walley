import {Routes, Route } from 'react-router-dom';
import TelaInicial from '../src/pages/TelaInicial';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
    </Routes>
  );
}

export default App;