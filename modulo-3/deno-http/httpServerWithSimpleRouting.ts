import { serve } from "https://deno.land/std/http/server.ts";

const port = 8080;
const handler = (request: Request): Response => {
    const body = `Seu user-agent é : \n\n${request.headers.get("user-agent") ??
        "Desconhecido"
        }`;

    const urlObject = new URL(request.url)

    if (urlObject.pathname === "/hello") {

        return Response.json({ command: "hello" })

    } else if (urlObject.pathname === "/goodbye") {

        return Response.json({ command: "pathname" })

    }
    return new Response(body, { status: 200 });
};
console.log(
    "Servidor HTTP rodando. Acesse-o em: http://localhost: 8080",
);
await serve(handler, { port });
