import { Request, Response } from 'express';
import {
  saveData,
  findData,
  findById,
  update,
  del
} from '../service/atendimentoService';

const save = async (req: Request, res: Response) => {
  const { nome_completo, telemovel, servico, balcao } = req.body;

  try {
    const response = await saveData(nome_completo, telemovel, servico, balcao);
    if (response === 405) {
      return res.status(405).json({ message: "Not Authorized, Data exists!" });
    }
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

const findAll = async (req: Request, res: Response) => {
  const response = await findData();
  try {
    res.status(200).send({ response })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

const findBy = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await findById(parseInt(id));
    res.status(200).send({ response })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

const updateOne = async (req: Request, res: Response) => {
  const { nome_completo, telemovel, servico, balcao } = req.body;
  const { id } = req.params;

  try {
    const response = await update(nome_completo, telemovel, servico, balcao, parseInt(id));
    res.status(200).json({ message: "Data updated!" })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }

}

const deleteOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await del(parseInt(id));
    res.status(200).json({ message: "Data deleted!" })
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
}

export { save, findAll, findBy, updateOne, deleteOne }