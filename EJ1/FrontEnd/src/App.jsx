import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import VerIncidentes from './pages/VerIncidentes';
import BuscarIncidente from './pages/BuscarIncidentes';
import CrearIncidente from './pages/CrearIncidente';
import ActualizarIncidente from './pages/ActualizarIncidente';
import EliminarIncidente from './pages/EliminarIncidente';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/ver">Ver Incidentes</Link> |{' '}
        <Link to="/buscar">Buscar Incidente</Link> |{' '}
        <Link to="/crear">Crear Incidente</Link> |{' '}
        <Link to="/actualizar">Actualizar Incidente</Link> |{' '}
        <Link to="/eliminar">Eliminar Incidente</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ver" element={<VerIncidentes />} />
        <Route path="/buscar" element={<BuscarIncidente />} />
        <Route path="/crear" element={<CrearIncidente />} />
        <Route path="/actualizar" element={<ActualizarIncidente />} />
        <Route path="/eliminar" element={<EliminarIncidente />} />
      </Routes>
    </>
  );
}

export default App;
