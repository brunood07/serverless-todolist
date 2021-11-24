import { APIGatewayProxyHandler } from "aws-lambda";

import { document } from "../utils/dynamodbClient";

export const handle: APIGatewayProxyHandler = async (event) => {
    const { id } = event.pathParameters;

    const response = await document.scan({
        TableName: "users_todos",
        FilterExpression: "user_id = :id",
        ExpressionAttributeValues: { ":id": id }
    }).promise();

    if(response) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                response
            })
        }
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: "Invalid user!",
        })
    }
}