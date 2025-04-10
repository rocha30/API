import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Aquí agregaremos más rutas */}
    </Routes>
  );
}

export default App;
