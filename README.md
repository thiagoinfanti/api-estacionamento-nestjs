## Project - API
API REST para gerenciar um estacionamento de carros e motos.

#### Stack tecnológica
- NestJS
- TypeOrm
- Mysql
- Swagger
- Arquitetura Hexagonal

#### Instalação
- Clone o repositório em uma pasta do seu computador
- Tenha o docker e o docker compose configurado
- Caso tenha a versão 1 do docker compose execute o comando **docker-compose up -d**
- Caso tenha a versão 2 do docker compose execute o comando **docker compose up -d**

#### Executando testes unitários
- Entrando no bash do container de app versão 1 docker compose **docker-compose exec app sh**
- Entrando no bash do container de app versão 2 docker compose **docker compose exec app sh**
- Execute o comando **npm run test:unit**

#### Acessando a documentação e testes da API
- acesse **http://loclalhost:3000/api**

#### Autenticação
- acesse **http://loclalhost:3000/auth** informando no corpo do body
{
    "username": "user",
    "password": "123456"
}
você receberá um token JWT como resposta

Caso queira alterar alguma configurações da API, edite o arquivo **.env** na raiz do projeto

#### Possíveis problemas
Caso o container docker apresente algum problema na persistência dos dados do Mysql ou dê algum erro na hora da criação, crie um diretório na raiz do projeto chamado **db**