# SvelteKit + Houdini

An example of using the latest version of SvelteKit and Houdini. This illustrates a simple `query` and `subscription`. Remember to change `apiUrl` inside of `houdini.config.js` and `API_URL` in `environments.ts` to a valid endpoint, modify the `query.svelte` and `subscription.svelte` files as necessary, and then run:

```sh
npx houdini generate --pull-schema
```

Your API may not support websockets/subscriptions if you receive an error that begins with `TypeError: Cannot read properties of undefined (reading 'type')`