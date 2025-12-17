import { Request, Response } from 'express';
import { save } from '../service/tiposervicoService';

const saveData = async (req: Request, res: Response) => {
  const { nome } = req.body;
  const d = new Date();
  const date = d.toLocaleDateString()

  try {
    const response = await save(nome, date);
    if (response == 405) {
      res.status(405).json({ message: "Not authorized!" })
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!"});
  }
}

export { saveData }