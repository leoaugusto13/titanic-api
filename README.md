![Logo of the project](https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png)
 
## Titanic API
... Description

 Desenvolva uma API HTTP (por exemplo utilizando REST) que permita LER e ESCREVER (talvez um UPDATE e um DELETE) dados do seu banco de dados criado anteriormente.
 
## Technology 
 
Here are the technologies used in this project.
 
* Node JS 12.18.5
* Postgres 13
* Express 4.17.1
* Nodemon 2.0.4

  
## Services Used
 
* Github

  
## Getting started
 
* Primeiro baixar o arquivo csv, no link: 
https://drive.google.com/file/d/1AXlOSTHD1BJUUXooRBcWEbgE__jOhh24/view?usp=sharing
* Instalar o Postgres 13
* Executar o pgAdmin4
* Criar a base de dados
* Criar a tabela e as colunas que irão receber o arquivo a ser importado
* Utilizar a ferramenta de importação do proprio Postgres para importar o arquivo csv.
* Criar a pasta do projeto
* Iniciar o projeto com o comando
>    $ npm init y
* To run the project:
>    nodemon dev
 
## Dockerize
 
* Utilizei dois comandos um para criar a imagem da minha aplicação:
>    docker build -t titanic_api .
* Comando para rodar a imagem docker:
>    docker run titanic-api:latest

 
## Versioning
 
1.0.0.0
 
 
## Authors
 
* **Leonardo Augusto dos Santos Soares**: @leoaugusto13 (https://github.com/leoaugusto13)
 
 

