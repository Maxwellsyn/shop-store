## ![favicon-16x16](https://github.com/user-attachments/assets/438b1aa8-8eaf-43b1-aa86-c92e18ce5c4c) Store Shop - Loja E-commerce de movéis.

Universidade Universidade do Vale do Itajaí (UNIVALI)  
Curso Análise e Desenvolvimento de Sistemas  
Disciplina Hands on Work VI  
Professor  Rafael Queiroz Gonçalves.

---

## 📌 Propósito do Projeto

Este projeto foi desenvolvido como parte da disciplina Hands on Work VI, com o objetivo de aplicar conceitos de modelagem orientada a objetos, modelagem relacional, prototipação e desenvolvimento web seguro e responsivo. O sistema simula uma loja e-commerce, permitindo o gerenciamento completo de clientes, compras e pagamentos, além de contemplar a documentação técnica e prototipação visual.

---

## 🎯 Objetivos

- Representar de forma clara e escalável a relação entre clientes e compras.
- Garantir integridade e manutenção dos dados.
- Facilitar a implementação com frameworks ORM e bancos relacionais.
- Prover uma solução web segura, responsiva e de fácil manutenção.

---

## 📋 Regras de Negócio

- Cada cliente pode ter zero ou mais compras associadas.
- Toda compra deve obrigatoriamente referenciar um cliente válido.
- A exclusão de uma compra não altera o registro do cliente.
- Um cliente pode ser cadastrado mesmo sem compras.
 

---

## 🧩 Casos de Uso

1. Cadastrar Cliente
Permite ao funcionário cadastrar novos clientes, informando nome, email e data de nascimento.
Valida dados e previne duplicidade de email.

2. Editar Cliente
Permite editar informações de clientes existentes, com validação de dados.

3. Excluir Cliente
Permite excluir clientes, impedindo a exclusão caso haja compras associadas (ou oferecendo a opção de exclusão em cascata, conforme regra de negócio).

4. Cadastrar Compra
Permite registrar novas compras para clientes existentes, informando preço e data.

5. Listar Compras por Cliente
Permite visualizar todas as compras associadas a um cliente.

6. Excluir Compra
Permite excluir compras específicas do sistema.

---

## 🖥️ Prototipação
Os protótipos das principais telas foram desenvolvidos no Figma, facilitando a validação visual e a comunicação entre os membros da equipe. As telas prototipadas incluem:

- Cadastro de Usuário: Registro de novos clientes.
- Compras: Listagem e seleção de produtos para compra.
- Produto: Detalhes de produtos.
- Pagamento: Métodos e finalização de compra.

---

## 🛠 Tecnologias Utilizadas

Frontend: JavaScript (lógica e interatividade)
Backend: Python (Django)
Banco de Dados: MySQL
Prototipação: Figma
Segurança: Criptografia de senhas (bcrypt), validação de dados, HTTPS

---

## 🗂️ Estrutura do Projeto

store-shop/

├── login.html

├── itens.html

├── compras.html

├── pagamento.html

├── confirmação.html

├── assets/

│   ├── icons/

│   │   └── ícones.svg

│   ├── css/

│   │   └── style.css

│   ├── js/

│   │   └── script.js

│   └── img/

│       └── (imagens dos produtos)

---

## 🔒 Segurança

O sistema adota boas práticas de segurança, incluindo criptografia de senhas, validação de dados no backend e uso de HTTPS em produção, garantindo a integridade e confidencialidade das informações.

---

## 📊 Modelagem

- Diagrama de Classes: Representa entidades como Usuário, Produto, Compra e Pagamento, suas relações e atributos.
- Diagrama ER: Ilustra tabelas, campos e relacionamentos do banco de dados, assegurando integridade referencial.

---

## 📄 Documentação

A documentação completa inclui protótipos, diagramas de classes, diagramas de sequência, DER e MER, entregues em PDF como parte do trabalho final.

---

## 👨‍💻 Desenvolvimento

O desenvolvimento segue as melhores práticas de arquitetura web, com separação clara entre frontend, backend e banco de dados, visando escalabilidade, segurança e facilidade de manutenção.

---

## Elaborado por:
Matheus dos Santos Moraes, Gabriel da Silva Schumann, Jullia Moro Brisola e Maxwell Symon Moreira Lobato.
UNIVALI – Análise e Desenvolvimento de Sistemas – 2025
