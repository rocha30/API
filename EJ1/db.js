import { client, connectClient } from './client.js';

await connectClient();



const obtenerUsuarios = async () => {
    

    const res = await client.query('SELECT * FROM incidentes');
    const result = res.rows;
    
    return result;
}

obtenerUsuarios().then((result) => {
    console.log(result);
});



const agregarDatos = async () => {
    
    
    const text = 'INSERT INTO incidentes(reporter, description, status) VALUES($1, $2, $3) RETURNING *'
    const values = ['Joel Jaquez', 'Borre la base de datos', 'en proceso'];


    const res = await client.query(text, values)
    console.log(res.rows[0])
    const result = res.rows;
    
    return result;

};

agregarDatos().then((result) => {
    console.log(result);
});



const ObtenerUsuariosbyID = async () => {
    
    const text = 'SELECT * FROM incidentes WHERE id = $1';
    const values = [1];
    const res = await client.query(text, values);
    const result = res.rows;
    
    return result;

}

ObtenerUsuariosbyID().then((result)=> {
    console.log(result);
})


    
const DeleteUsers = async () => {
    const text = 'DELETE FROM incidentes WHERE id IN ($1, $2, $3, $4, $5)  ';
    const values = [12,13,14,16,17];
    const res = await client.query(text, values);
    return res.rowCount
};
    


DeleteUsers().then((result) => {
    console.log(result);
}
);


// Aqui va la logica para la base de datos. 