import { Environment } from '$houdini';
import type { SubscriptionHandler } from '$houdini';
import { createClient } from 'graphql-ws';
import { browser } from '$app/env';

const API_URL = 'example.com/v1/graphql';

async function fetchQuery({ text, variables = {} }) {
  const result = await this.fetch('https://' + API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });
  return await result.json();
}

let socketClient = browser ? createClient({ url: 'wss://' + API_URL }) : null;

export default new Environment(fetchQuery, socketClient);
