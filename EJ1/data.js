const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3010; 

/*
const {Client} = requiere('pg');

const obtenerUsuarios = async () => {
    const client = new Client({
        user: 'postgres', 
        host: 'localhost', 
        database: 'API', 
        password: 'roc23501', 
        port: 5432
    }); 


    await client.connect();

    const res = await client.query('SELECT * FROM incidentes');
    const result = res.rows;
    await client.end();
    return result;
}

obtenerUsuarios().then((result) => {
    console.log(result);
});
*/




// Middleware para parsear JSON en las solicitudes (explica que es un middleware)
app.use(express.json());

//cargar json data desde otro file 

const jsonPath = path.join( __dirname,'const.json');
const jsonData = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
//No entiendo bien esto 


const posts = jsonData.Userpost; 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});


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



