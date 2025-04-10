import { useEffect, useState } from 'react';
import { getIncidentes } from '../services/api';

function Home() {
  const [incidentes, setIncidentes] = useState([]);

  useEffect(() => {
    getIncidentes()
      .then(data => {
        console.log('Incidentes desde la API:', data);
        setIncidentes(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Bienvenido a tu Frontend</h1>
      <h2>Lista de Incidentes:</h2>
      <ul>
        {incidentes.map(incidente => (
          <li key={incidente.id}>{incidente.reporter}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
