import { useState } from 'react';
import axios from 'axios';

function BuscarIncidente() {
  const [id, setId] = useState('');
  const [incidente, setIncidente] = useState(null);
  const [error, setError] = useState('');

  const handleBuscar = async () => {
    try {
      const response = await axios.get(`http://localhost:3010/incidentes/${id}`);
      setIncidente(response.data);
      setError('');
    } catch (err) {
      setIncidente(null);
      setError('Incidente no encontrado');
    }
  };

  return (
    <div>
      <h1>Buscar Incidente por ID</h1>
      <input
        type="text"
        placeholder="ID del incidente"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleBuscar}>Buscar</button>

      {error && <p>{error}</p>}

      {incidente && (
        <div>
          <p><strong>ID:</strong> {incidente.id}</p>
          <p><strong>Reportero:</strong> {incidente.reporter}</p>
          <p><strong>Descripción:</strong> {incidente.description}</p>
          <p><strong>Status:</strong> {incidente.status}</p>
        </div>
      )}
    </div>
  );
}

export default BuscarIncidente;
