import { useState } from 'react';
import axios from 'axios';

function ActualizarIncidente() {
  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleActualizar = async () => {
    try {
      await axios.put(`http://localhost:3010/incidentes/${id}`, { status });
      setMensaje('Estado actualizado con éxito 🎉');
    } catch (err) {
      setMensaje('Error al actualizar estado');
    }
  };

  return (
    <div>
      <h1>Actualizar Estado de Incidente</h1>
      <input
        type="text"
        placeholder="ID del incidente"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nuevo estado"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button onClick={handleActualizar}>Actualizar</button>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default ActualizarIncidente;
