# API de Usuarios - `data.js`

Este proyecto implementa una API básica utilizando Node.js y Express para gestionar datos de usuarios almacenados en un archivo JSON.

## Descripción

El archivo [`data.js`](API/EJ1/data.js) configura un servidor Express que permite realizar operaciones básicas sobre un conjunto de datos de usuarios definidos en el archivo [`const.json`](API/EJ1/const.json). Los datos incluyen información como el nombre, edad y carrera de los usuarios.

## Endpoints

### 1. Obtener todos los usuarios
**Ruta:** `GET /API/EJ1/Userpost`  
**Descripción:** Devuelve la lista completa de usuarios.  
**Ejemplo de respuesta:**
```json
[
    {
        "id": 1,
        "nombre": "Mario Rocha",
        "edad": 25,
        "carrera": "Ingeniería en Sistemas"
    },
    {
        "id": 2,
        "nombre": "Ana López",
        "edad": 22,
        "carrera": "Diseño Gráfico"
    }
]


### Tecnologias que voy a usar para la API completa 
# Voy a usar JavaScript con node.js y express, y como base de datos SQL con PGAdmin 
# Puede que cambie de opinón en la base de datos ya que mongoDB tiene sus ventajas. 