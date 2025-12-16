import { atendimento } from '../model/atendimentoModel';
import { db } from '../config/connection';

const saveData = async (nome_completo: string, telemovel: string, servico: string, balcao: string) => {
  const newData: atendimento = {
    nome_completo,
    telemovel,
    servico,
    balcao
  };

  const response = await db.query(
    "SELECT * FROM atendimentos WHERE nome_completo = $1", [nome_completo]
  );

  if (response.rowCount != 0) {
    return 405;
  } else {
    const { rows } = await db.query(
      "INSERT INTO atendimentos (nome_completo, telemovel, servico, balcao) VALUES ($1, $2, $3, $4)", [nome_completo, telemovel, servico, balcao]
    );
    return newData;
  }
}

const findData = async () => {
  const response = await db.query("SELECT * FROM atendimentos ORDER BY nome_completo ASC")
  return response.rows;
}

const findById = async (id_atendimento: number) => {
  const response = await db.query("SELECT * FROM atendimentos WHERE id_atendimento = $1", [id_atendimento]);
  return response.rows;
}

const update = async (nome_completo: string, telemovel: string, servico: string, balcao: string, id_atendimento: number) => {
  const response = await db.query(
    "UPDATE atendimentos SET nome_completo = $1, telemovel = $2, servico = $3, balcao = $4 WHERE id_atendimento = $5",
    [nome_completo, telemovel, servico, balcao, id_atendimento]
  );
}

const del = async (id_atendimento: number) => {
  const response = db.query(
    "DELETE FROM atendimentos WHERE id_atendimento = $1", [id_atendimento]
  );
}

export { saveData, findData, findById, update, del };