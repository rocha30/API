# 📄 API de Gestión de Incidentes y Usuarios

Este proyecto implementa dos APIs independientes utilizando **Node.js** y **Express**:

- Una API REST conectada a **PostgreSQL** para gestionar **reportes de incidentes técnicos**.
- Una API básica que gestiona **usuarios** almacenados en un archivo `.json`.

---

## 🧩 Estructura del proyecto

```
/API/
│
├── EJ1/
│   ├── data.js          ← API de usuarios (usa const.json como "base de datos")
│   ├── const.json       ← Archivo JSON con datos de usuarios
│
├── client.js            ← Conexión a PostgreSQL
├── db.js                ← Funciones CRUD para la base de datos de incidentes
├── index.js             ← API de incidentes (servidor Express con endpoints REST)
├── docs.html            ← Página HTML con documentación de los endpoints
├── package.json
```

---

## 🔹 API de Usuarios – `data.js`

### 📄 Descripción

Esta API maneja un conjunto de **usuarios definidos manualmente** en el archivo `const.json`. Cada usuario tiene atributos como `nombre`, `edad`, `carrera`, etc.

### 📂 Ruta principal

```bash
GET http://localhost:3010/usuarios
```

> Muestra todos los usuarios registrados en el archivo JSON.

📌 Esta API no está conectada a base de datos, y solo es útil para simulación o pruebas de conceptos.

---

## 🔸 API de Incidentes – `index.js`

### 🛠 Descripción

API REST para permitir a los empleados **reportar incidentes relacionados con sus equipos** (computadoras, impresoras, redes, etc.).

Permite:

- Crear nuevos reportes
- Consultar incidentes existentes
- Actualizar su estado
- Eliminar reportes en caso de error

### 🚀 Tecnologías usadas

- Node.js
- Express
- PostgreSQL
- `pg` (node-postgres)
- ESModules

---

## 📦 Instalación

1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/api-incidentes.git
cd api-incidentes
```

2. Instala las dependencias

```bash
npm install
```

3. Crea la base de datos y la tabla en PostgreSQL:

```sql
CREATE DATABASE api;

\c api

CREATE TABLE incidentes (
  id SERIAL PRIMARY KEY,
  reporter VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(50) NOT NULL CHECK (status IN ('pendiente', 'en proceso', 'resuelto')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

4. Configura tus credenciales en `client.js`:

```js
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'TU_PASSWORD',
  port: 5432,
});
```

---

## ▶️ Ejecutar el servidor

```bash
node index.js
```

Servidor corriendo en:  
**http://localhost:3010**

---

## 🌐 Endpoints disponibles

| Método | Endpoint              | Descripción                               |
|--------|-----------------------|-------------------------------------------|
| `GET`  | `/incidentes`         | Obtener todos los incidentes              |
| `GET`  | `/incidentes/:id`     | Obtener un incidente por ID               |
| `POST` | `/incidentes`         | Crear un nuevo incidente                  |
| `PUT`  | `/incidentes/:id`     | Actualizar el estado de un incidente      |
| `DELETE` | `/incidentes/:id`   | Eliminar un incidente por ID              |

---

## 🧪 Ejemplos de uso

### Crear un incidente

```http
POST /incidentes
```

**Body (JSON):**
```json
{
  "reporter": "Joel Jaquez",
  "description": "No funciona la impresora",
  "status": "pendiente"
}
```

---

### Actualizar estado de incidente

```http
PUT /incidentes/3
```

**Body (JSON):**
```json
{
  "status": "resuelto"
}
```

---

### Eliminar incidente

```http
DELETE /incidentes/3
```

---

## 📄 Documentación visual

Abre el archivo `docs.html` en tu navegador para ver una descripción visual y amigable de todos los endpoints de la API de incidentes.

> ⚠️ Esta documentación es estática: **no está conectada por `fetch()` a la API real**.

---

## ✅ Recomendaciones

- Asegúrate de tener `app.use(express.json())` en tus archivos de servidor para poder leer `req.body`.
- Puedes dividir este proyecto en dos servicios si deseas separarlos.
- La API de incidentes puede extenderse con validaciones, paginación o autenticación JWT.