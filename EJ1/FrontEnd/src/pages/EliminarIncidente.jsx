import { useState } from 'react';
import axios from 'axios';

function EliminarIncidente() {
  const [id, setId] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleEliminar = async () => {
    try {
      await axios.delete(`http://localhost:3010/incidentes/${id}`);
      setMensaje('Incidente eliminado con éxito 🗑️');
    } catch (err) {
      setMensaje('Error al eliminar incidente');
    }
  };

  return (
    <div>
      <h1>Eliminar Incidente</h1>
      <input
        type="text"
        placeholder="ID del incidente"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleEliminar}>Eliminar</button>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default EliminarIncidente;
