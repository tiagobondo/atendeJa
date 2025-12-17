import express, { Request, Response } from 'express';
import { connected } from '../app/config/connection';
import { save, findAll, findBy, updateOne, deleteOne } from '../app/controller/atendimentoController';
import { saveData } from '../app/controller/servicoController';
import { saveDatabalcao } from '../app/controller/balcaoController';

const router = express.Router();
connected();

router.get('/', (req: Request, res: Response) => {
  res.send({ message: "Welcome to my application!" })
})

router.post('/atendimento', save);
router.get('/atendimentos', findAll);
router.get('/atendimento/:id', findBy);
router.put('/atendimento/:id', updateOne);
router.delete('/atendimento/:id', deleteOne);

router.post('/servico', saveData);
router.post('/balcao/:id', saveDatabalcao);

export default router; 