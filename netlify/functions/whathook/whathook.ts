import { Handler } from '@netlify/functions'

const token = process.env.WS_TOKEN

export const handler: Handler = async (event, context) => {
  if (
    event.queryStringParameters &&
    event.queryStringParameters['hub.mode'] == 'subscribe' &&
    event.queryStringParameters['hub.verify_token'] == token
  ) {
    return {
      statusCode: 200,
      body: event.queryStringParameters['hub.challenge'],
    }
  } else {
    return {
      statusCode: 400
    }
  }
}