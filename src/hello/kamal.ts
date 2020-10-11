import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> {
  const human = buildHumi("Kamal");

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/json" },
    body: JSON.stringify({
      ...human,
      ...{ "runningOn": "Deno", "version": Deno.version.deno },
    }),
  };
}

enum Location {
  BROOK = "Brooklyn",
  MANHAT = "Manhattan",
  GREENS = "Greensboro",
}

interface Humi {
  name: string;
  locale: Location;
}

function buildHumi(name: string): Humi {
  const locale = randoLocale(Location);

  return {
    name,
    locale,
  };
}

function randoLocale<T>(params: T): T[keyof T] {
  const vals = Object.values(params);
  const idx = Math.floor(Math.random() * vals.length);

  return vals[idx];
}