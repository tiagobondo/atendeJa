import { atendimento } from '../model/atendimentoModel';
import { db } from '../config/connection';

const saveData = async (nome_completo: string, telemovel: string, servico: string, balcao: string) => {
  const newData: atendimento = {
    nome_completo,
    telemovel,
    servico,
    balcao
  };

  const { rows } = await db.query(
    "INSERT INTO atendimentos (nome_completo, telemovel, servico, balcao) VALUES ($1, $2, $3, $4)", [nome_completo, telemovel, servico, balcao]
  );
  return newData;
}

const findData = async () => {
  const response = await db.query("SELECT * FROM atendimentos ORDER BY nome_completo ASC")
  return response.rows;
}

const findById = async (id_atendimento: number) => {
  const response = await db.query("SELECT * FROM atendimentos WHERE id_atendimento = $1", [id_atendimento]);
  return response.rows;
}

export { saveData, findData, findById };