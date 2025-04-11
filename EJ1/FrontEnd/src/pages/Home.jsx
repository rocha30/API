function Home() {
    return (
      <div>
        <h1>Programa incidentes</h1>
        <p>Selecciona una acción:</p>
        <ul>
          <li><a href="/ver">Ver todos los incidentes</a></li>
          <li><a href="/buscar">Buscar incidente por ID</a></li>
          <li><a href="/crear">Crear nuevo incidente</a></li>
          <li><a href="/actualizar">Actualizar estado de incidente</a></li>
          <li><a href="/eliminar">Eliminar incidente</a></li>
        </ul>
      </div>
    );
  }
  
  export default Home;
  