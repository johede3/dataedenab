import aiBots from "../ai-bots.json" assert { type: "json" };

type Config = {
  path: string | string[];
};

const botSignatures = (aiBots as string[]).map((agent) => agent.toLowerCase());

export default async function handler(request: Request) {
  const ua = request.headers.get("user-agent")?.toLowerCase() || "";
  const isBot = botSignatures.some((agent) => ua.includes(agent));

  if (isBot) {
    return new Response(null, { status: 401 });
  }

  return;
}

export const config: Config = {
  path: "/*",
};
