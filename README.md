# 🧾 AtendeJá

**AtendeJá** é um sistema web de controle de atendimentos em estabelecimentos, permitindo que o operador registre clientes, acompanhe o status de cada atendimento e saiba quantos clientes foram atendidos ao longo do dia.  

Este projeto é um **MVP funcional**, desenvolvido para demonstrar rapidamente a viabilidade da ideia.

---

## 🎯 Objetivo

O objetivo do **AtendeJá** é simplificar o controle de atendimentos em estabelecimentos físicos, evitando confusão, organizando o fluxo de clientes e permitindo ao operador acompanhar em tempo real a situação do dia.

---

## ⚙️ Funcionalidades

### Para o operador

- 📝 Cadastro rápido de clientes
- ⏳ Controle do status de cada atendimento: **Aguardando**, **Em Atendimento**, **Atendido**
- 👀 Visualização da posição do cliente na lista
- 📊 Contador diário de clientes atendidos e em espera
- 🔘 Botões para "Chamar próximo" e "Finalizar atendimento"

### Para o MVP

- 🔄 Atualização da lista de atendimentos em tempo real
- 🎨 Interface clara com cores que indicam o status dos clientes

---

## 🖌️ Paleta de cores

| Cor              | Hex       | Uso no projeto                     |
|-----------------|-----------|-----------------------------------|
| 🔵 Azul Escuro    | #1F3A93   | Cabeçalho e botões principais     |
| 🔹 Azul Claro     | #4A90E2   | Destaques, hover em botões        |
| ⚪ Cinza Claro    | #F5F5F5   | Fundo das páginas                 |
| ⚫ Cinza Médio    | #C0C0C0   | Bordas e separadores              |
| ✅ Verde Suave    | #27AE60   | Status “Atendido”                 |
| ⚠️ Amarelo Suave  | #F1C40F   | Status “Em Atendimento”           |
| ❌ Vermelho Suave | #E74C3C   | Status “Aguardando”               |
| 🖤 Preto Escuro   | #2C3E50   | Texto principal                   |

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![EJS](https://img.shields.io/badge/EJS-A91E50?style=flat&logoColor=white)  
- **Backend:** ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)  
- **Banco de Dados:** ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)  
- **Controle de versão:** ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)  
- **Deploy / Build:** ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## 🚀 Como Executar o Projeto

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/atendeja.git

# Entrar no diretório
cd atendeja

# Instalar dependências
npm install

# Configurar variáveis de ambiente (PostgreSQL)
# Ex: DATABASE_URL=postgres://usuario:senha@localhost:5432/atendeja

# Executar em desenvolvimento
npm run dev
