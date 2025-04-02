// client.js
import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'API',
  password: 'roc23501',
  port: 5432,
});

const connectClient = async () => {
  await client.connect();
};

export { client, connectClient };
