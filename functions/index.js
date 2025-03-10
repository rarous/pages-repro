import {DOMParser} from "linkedom";
/**
 * @param {EventContext<Env>} context
 * @returns {Promise<Response>}
 */
export async function onRequest({}) {
  new DOMParser()
  return new Response();
}
