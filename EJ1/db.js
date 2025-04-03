import { client, connectClient } from './client.js';

await connectClient();


// QUERYS DE MANERA GENERAL Y YA LIMPIOS. 

export const getAllIncidentes = async () => {
  const res = await client.query('SELECT * FROM incidentes');
  return res.rows;
};

export const getIncidenteById = async (id) => {
  const res = await client.query('SELECT * FROM incidentes WHERE id = $1', [id]);
  return res.rows[0];
};

export const insertIncidente = async (reporter, description, status) => {
  const res = await client.query(
    'INSERT INTO incidentes (reporter, description, status) VALUES ($1, $2, $3) RETURNING *',
    [reporter, description, status]
  );
  return res.rows[0];
};

export const updateIncidente = async (id, status) => {
  const res = await client.query(
    'UPDATE incidentes SET status = $1 WHERE id = $2 RETURNING *',
    [status, id]
  );
  return res.rows[0];
};

export const deleteIncidente = async (id) => {
  const res = await client.query('DELETE FROM incidentes WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};




// //obtener los incidentes. 
// const obtenerUsuarios = async () => {
    

//     const res = await client.query('SELECT * FROM incidentes');
//     const result = res.rows;
    
//     return result;
// }

// obtenerUsuarios().then((result) => {
//     console.log(result);
// });


// //agregar datos a la base de datos
// const agregarDatos = async () => {
    
    
//     const text = 'INSERT INTO incidentes(reporter, description, status) VALUES($1, $2, $3) RETURNING *'
//     const values = ['Joel Jaquez', 'Borre la base de datos', 'en proceso'];


//     const res = await client.query(text, values)
//     console.log(res.rows[0])
//     const result = res.rows;
    
//     return result;

// };

// agregarDatos().then((result) => {
//     console.log(result);
// });


// //obtener incidente por id
// const ObtenerUsuariosbyID = async () => {
    
//     const text = 'SELECT * FROM incidentes WHERE id = $1';
//     const values = [1];
//     const res = await client.query(text, values);
//     const result = res.rows;
    
//     return result;

// }

// ObtenerUsuariosbyID().then((result)=> {
//     console.log(result);
// })


// //eliminar usuarios por id    
// const DeleteUsers = async () => {
//     const text = 'DELETE FROM incidentes WHERE id IN ($1, $2, $3, $4, $5)  ';
//     const values = [12,13,14,16,17];
//     const res = await client.query(text, values);
//     return res.rowCount
// };
    


// DeleteUsers().then((result) => {
//     console.log(result);
// }
// );

//actualizar incidentes por id
// const UpdateIncidentes = async () => {
//     const text = 'UPDATE incidentes SET status = $1 WHERE id = $2 RETURNING *';
//     const values = ['resuelto', 2];
//     const res = await client.query(text, values);
//     const result = res.rows;
//     return result; 
// };

// UpdateIncidentes().then((result) => {
//     console.log(result);
// });

/*
//obtener los incidentes. 
const obtenerUsuarios = async () => {
    

    const res = await client.query('SELECT * FROM incidentes');
    const result = res.rows;
    
    return result;
}

obtenerUsuarios().then((result) => {
    console.log(result);
});


//agregar datos a la base de datos
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


//obtener incidente por id
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


//eliminar usuarios por id    
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

actualizar incidentes por id
const UpdateIncidentes = async () => {
    const text = 'UPDATE incidentes SET status = $1 WHERE id = $2 RETURNING *';
    const values = ['resuelto', 2];
    const res = await client.query(text, values);
    const result = res.rows;
    return result; 
};

UpdateIncidentes().then((result) => {
    console.log(result);
});

*/