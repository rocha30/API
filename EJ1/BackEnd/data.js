import express from 'express';
import {
    getAllIncidentes,
    getIncidenteById,
    insertIncidente,
    updateIncidente,
    deleteIncidente
} from './db.js'; //Importamos la funciones desde el db.js file. 


const app = express();
const port = 3010;
app.use(express.json()); // Middleware para parsear JSON en las solicitudes

// GET todos los incidentes
app.get('/incidentes', async (req, res) => {
    const data = await getAllIncidentes();
    res.json(data);
});


// GET de incidente por ID
app.get('/incidentes/:id', async (req, res) => {
    const {id} = req.params;
    const data = await getIncidenteById(id);
    if (!data) {
        return res.status(404).json({ error: 'Incidente no encontrado' });
    }
    res.json(data);
});

// POST para nuevo inicidente

app.post('/incidentes', async (req, res) => {
    const {reporter , description, status} = req.body;
    const data = await insertIncidente(reporter, description, status);
    res.status(201).json(data);
});


// PUT para actualizar el estado de un incidente
// 1:30AM no me manda ningun error y sale 200 ok pero en BD no actualiza el status. 
app.put('/incidentes/:id', async (req, res) => {
    const {id} = req.params;
    const {status} = req.body; 
    console.log("status", status, "ID", id);
    const data = await updateIncidente(id, status);
    if (!data) {
        return res.status(404).json({ error: 'Incidente no encontrado' });
    }
    res.json(data);
});



app.delete('/incidentes/:id', async (req, res) => {
    try {
      const { id } = req.params;
      console.log('Intentando eliminar ID:', id);
  
      const data = await deleteIncidente(Number(id));
  
      if (!data) {
        return res.status(404).json({ error: 'Incidente no encontrado' });
      }
  
      console.log('Incidente eliminado:', data);
      res.json({ message: 'Incidente eliminado', incidente: data });
  
    } catch (err) {
      console.error('Error en DELETE:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

/*


//cargar json data desde otro file 

const jsonPath = path.join( __dirname,'const.json');
const jsonData = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
//No entiendo bien esto 


const posts = jsonData.Userpost; 




app.get('/API/EJ1/Userpost', (req, res) => {
    console.log(jsonData.Userpost);
    res.json(jsonData.Userpost);
    
}
);


//para hacer el post 
app.post('/API/EJ1/post', (req, res) => {
    let newPost = req.body;
    console.log("req", req);
    posts.push(newPost);
    res.send(posts);

}
);

*/


