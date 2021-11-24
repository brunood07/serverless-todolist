import { v4 as uuidV4 } from "uuid";

import { document } from "../utils/dynamodbClient";

interface ICreateTodo {
    id: string;
    title: string;
    deadline: Date;
}

export const handle = async (event) => {
    const { id } = event.pathParameters;
    const { title, deadline } = JSON.parse(event.body) as ICreateTodo;

    await document.put({
        TableName: "users_todos",
        Item: {
            id: uuidV4(),
            user_id: id,
            title,
            done: false,
            deadline: deadline,
        }
    }).promise();

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Todo created successfully!",
            id: id
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }
}