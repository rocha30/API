import { useState } from 'react';
import axios from 'axios';

function CrearIncidente() {
  const [reporter, setReporter] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleCrear = async () => {
    try {
      const response = await axios.post('http://localhost:3010/incidentes', {
        reporter,
        description,
        status
      });
      setMensaje('Incidente creado con éxito 🎉');
    } catch (err) {
      setMensaje('Error al crear incidente');
    }
  };

  return (
    <div>
      <h1>Crear Nuevo Incidente</h1>
      <input
        type="text"
        placeholder="Reportero"
        value={reporter}
        onChange={(e) => setReporter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Estado"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button onClick={handleCrear}>Crear</button>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default CrearIncidente;
