import { Request, Response } from 'express';
import { save } from '../service/balcaoService';

const saveDatabalcao = async (req: Request, res: Response) => {
  const { nome } = req.body;
  const { id } = req.params;
  const d = new Date();
  const date = d.toLocaleDateString();

  try {
    const response = await save(nome, parseInt(id), date);
    if (response == 405) {
      res.status(405).json({ message: "Not Authorized!" })
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error!", error });
  }
}

export { saveDatabalcao } 