import { useEffect, useState } from 'react';
import { getIncidentes } from '../services/api';

function VerIncidentes() {
  const [incidentes, setIncidentes] = useState([]);

  useEffect(() => {
    getIncidentes()
      .then(data => {
        console.log('Incidentes:', data);
        setIncidentes(data);
      })
      .catch(error => {
        console.error('Error al cargar los incidentes:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Incidentes</h1>
      <ul>
        {incidentes.map(incidente => (
          <li key={incidente.id}>
            <strong>ID:</strong> {incidente.id} |{' '}
            <strong>Reportero:</strong> {incidente.reporter} |{' '}
            <strong>Descripción:</strong> {incidente.description} |{' '}
            <strong>Status:</strong> {incidente.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerIncidentes;
