import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const db = new Pool({
  connectionString: process.env.CONNECTION_STRING
})

const connected = async () => {
  db.on('connect', () => {
    console.log('Connectado com Banco de Dados!');
  });
}

export { db, connected }