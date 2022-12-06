import { serve } from "https://deno.land/std@0.166.0/http/server.ts";

const port = 8080;
const handler = (request: Request): Response => {
  const body = `Seu user-agent é : \n\n${
    request.headers.get("user-agent") ??
      "Desconhecido"
  }`;

  return new Response(body, { status: 200 });
};
console.log(
  "Servidor HTTP rodando. Acesse-o em: http://localhost: 8080",
);
await serve(handler, { port });
