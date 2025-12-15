import express, { Request, Response } from 'express';
import { pool, connected } from '../app/config/connection';

const router = express.Router();
connected();

router.get('/', (req: Request, res: Response) => {
  res.send({ message: "Welcome to my application!" })
})

router.post('/atendimento', async (req: Request, res: Response) => {
  const { nome_completo, telemovel, servico, balcao } = req.body;

  const { rows } = await pool.query(
    "INSERT INTO atendimentos (nome_completo, telemovel, servico, balcao) VALUES ($1, $2, $3, $4)", [nome_completo, telemovel, servico, balcao]
  );

  res.status(200).send({
    message: "Atendimento cadastrado!",
    body: {
      atendimento: { nome_completo, telemovel, servico, balcao }
    }
  })

})

export default router; 