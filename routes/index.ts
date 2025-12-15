import express, { Request, Response } from 'express';
import { db, connected } from '../app/config/connection';

const router = express.Router();
connected();

router.get('/', (req: Request, res: Response) => {
  res.send({ message: "Welcome to my application!" })
})

router.post('/atendimento', async (req: Request, res: Response) => {
  const { nome_completo, telemovel, servico, balcao } = req.body;

  const { rows } = await db.query(
    "INSERT INTO atendimentos (nome_completo, telemovel, servico, balcao) VALUES ($1, $2, $3, $4)", [nome_completo, telemovel, servico, balcao]
  );

  res.status(200).send({
    message: "Atendimento cadastrado!",
    body: {
      atendimento: { nome_completo, telemovel, servico, balcao }
    }
  })

})

router.get('/atendimentos', async (req: Request, res: Response) => {
  const response = await db.query('SELECT * FROM atendimentos ORDER BY nome_completo ASC');
  res.status(200).send(response.rows);
})

router.get('/atendimento/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const response = await db.query('SELECT * FROM atendimentos WHERE id_atendimento = $1', [id]);
  res.status(200).send(response.rows);
})

router.put('/atendimento/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { nome_completo, telemovel, servico, balcao } = req.body;

  const response = await db.query(
    "UPDATE atendimentos SET nome_completo = $1, telemovel = $2, servico = $3, balcao = $4 WHERE id_atendimento = $5",
    [nome_completo, telemovel, servico, balcao, id]
  );
  res.status(200).send({ message: "Atendimento atualizado com sucesso!" });
})

router.delete('/atendimento/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM atendimentos WHERE id_atendimento = $1', [id]);
  res.status(200).send({ message: "Atendimento deletado com sucesso!" });
})

export default router; 