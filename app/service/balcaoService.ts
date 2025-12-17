import { db } from '../config/connection';
import { balcao } from '../model/balcaoModel';

const save = async (nome: string, id_servico: number, criado_em: string) => {
  const newBalcao: balcao = {
    nome,
    id_servico,
    criado_em
  };

  const response = await db.query(
    "SELECT * FROM balcoes WHERE nome = $1", [nome]
  );

  if (response.rowCount != 0) {
    return 405;
  } else {
    const { rows } = await db.query(
      "INSERT INTO balcoes (nome, id_servico, criado_em) VALUES ($1, $2, $3)", [nome, id_servico, criado_em]
    );
    return newBalcao;
  }
}
export { save }