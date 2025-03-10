import { parseHTML } from "linkedom";

/**
 * @param {EventContext<Env>} context
 * @returns {Promise<Response>}
 */
export async function onRequest({request, next}) {
  const resp = await next();
  const { searchParams } = new URL(request.url);
  const contentType = resp.headers.get("content-type");
  if (resp.ok && contentType?.startsWith("text/html")) {
    const html = await resp.text();
    const { document, window } = parseHTML(html);
    document.location = new URL(request.url);
    return new Response(document.toString(), resp);
  }
  return resp;
}
