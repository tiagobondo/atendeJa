import app from "./app";
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const PORT: string | number = process.env.PORT || 7000
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server Starting on https://localhost:${PORT} 🚀`);
})