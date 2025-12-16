import { Request, Response } from 'express';
import {
  saveData,
  findData,
  findById
} from '../service/atendimentoService';

const save = async (req: Request, res: Response) => {
  const { nome_completo, telemovel, servico, balcao } = req.body;

  const atendimento = await saveData(nome_completo, telemovel, servico, balcao);
  res.status(200).json(atendimento);
}

const find = async (req: Request, res: Response) => {
  const response = await findData();
  res.status(200).send({ response })
}

const findBy = async (req: Request, res: Response) => {
  const { id_atendimento } = req.params;
  const response = await findById(Number(id_atendimento));
  res.status(200).send({ response })
}

export { save, find, findBy }