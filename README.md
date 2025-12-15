# 🧾 AtendeJá

**AtendeJá** é um sistema web de controle de atendimentos em estabelecimentos, permitindo que o operador registre clientes, acompanhe o status de cada atendimento e saiba quantos clientes foram atendidos ao longo do dia.  

Este projeto é um **MVP funcional**, desenvolvido para demonstrar rapidamente a viabilidade da ideia.

---

## 🎯 Objetivo

O objetivo do **AtendeJá** é simplificar o controle de atendimentos em estabelecimentos físicos, evitando confusão, organizando o fluxo de clientes e permitindo ao operador acompanhar em tempo real a situação do dia.

---

## ⚙️ Funcionalidades

### Para o operador:
- Cadastro rápido de clientes
- Controle do status de cada atendimento: Aguardando, Em Atendimento, Atendido
- Visualização da posição do cliente na lista
- Contador diário de clientes atendidos e em espera
- Botões para "Chamar próximo" e "Finalizar atendimento"

### Para o MVP:
- Atualização da lista de atendimentos em tempo real
- Interface clara com cores que indicam o status dos clientes

---

## 🖌️ Paleta de cores

- Azul Escuro (#1F3A93): cabeçalho e botões principais  
- Azul Claro (#4A90E2): destaque e hover de botões  
- Cinza Claro (#F5F5F5): fundo da página  
- Cinza Médio (#C0C0C0): bordas e separadores  
- Verde Suave (#27AE60): status “Atendido”  
- Amarelo Suave (#F1C40F): status “Em Atendimento”  
- Vermelho Suave (#E74C3C): status “Aguardando”  
- Preto Escuro (#2C3E50): texto principal

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML, CSS, Bootstrap, JavaScript, EJS  
- **Backend:** Node.js, Express, TypeScript  
- **Banco de Dados:** PostgreSQL  
- **Controle de versão:** Git & GitHub  
- **Build / Deploy:** Vercel / Render / Railway  

---
---


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


