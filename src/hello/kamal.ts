import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";
handler;
export async function handler(
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/json" },
    body: JSON.stringify({
      "hello": "kamal-from-deno",
    }),
  };
}