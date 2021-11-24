# TodoList Serverless

Projeto desenvolvido para o Desafio 01 do Chapter 6 da trilha de Node do Ignite da Rocketseat.

## Rotas 

- POST - /todos/{id}
    - Essa rota deve receber o id de um usuário pelo pathParameters (você pode criar esse id manualmente apenas para preencher o campo) e os seguintes campos no corpo da requisição: title e deadline, onde deadline é a data limite para o todo. 
        - Exemplo: 
        ```
        "title": "ignite",
        "deadline: "24/11/2021"
        ```

- GET - /todos/{id}
    - Essa rota deve receber o id de um usuário pelo pathParameters (o mesmo id que foi usado para criar algum todo).