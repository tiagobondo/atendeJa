import { tipoServico } from '../model/tiposervicoModel';
import { db } from '../config/connection';

const save = async (nome: string, criado_em: number) => {
  const newServico: tipoServico = {
    nome,
    criado_em
  }
  const response = await db.query(
    "SELECT * FROM tipoServicos WHERE nome = $1", [nome]
  );

  if (response.rowCount != 0) {
    return 405;
  } else {
    const { rows } = await db.query(
      "INSERT INTO tipoServicos (nome, criado_em) VALUES ($1, $2)", [nome, criado_em]
    );
    return newServico;
  }
}

export { save }