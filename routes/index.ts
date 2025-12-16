import express, { Request, Response } from 'express';
import { connected } from '../app/config/connection';
import { save, find, findBy } from '../app/controller/atendimentoController';

const router = express.Router();
connected();

router.get('/', (req: Request, res: Response) => {
  res.send({ message: "Welcome to my application!" })
})

router.post('/atendimento', save);
router.get('/atendimentos', find);
router.get('/atendimento/:id', findBy);
//const { nome_completo, telemovel, servico, balcao } = req.body;

/*
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
  */

export default router; 