import axios from 'axios';

const API_URL = 'http://localhost:3010';

export const getIncidentes = async () => {
  try {
    const response = await axios.get(`${API_URL}/incidentes`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los incidentes:', error);
    throw error;
  }
};


