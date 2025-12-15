import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING
})

const connected = async () => {
  pool.on('connect', () => {
    console.log('Connectado com Banco de Dados!');
  });
}

export { pool, connected }