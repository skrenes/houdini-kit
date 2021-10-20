# SvelteKit + Houdini

An example of using the latest version of SvelteKit and Houdini. This illustrates a simple `query` and `subscription`. Remember to change `apiUrl` inside of `houdini.config.js` and `API_URL` in `environments.ts` to a valid endpoint and then run:

```sh
npx houdini generate --pull-schema
```

**Note:** I tried to use [mocki.io](https://mocki.io/graphql) which generates a [mock public GraphQL endpoint](https://api.mocki.io/v2/c4d7a195/graphql) but I kept getting the following error:

```sh
TypeError: Cannot read properties of undefined (reading 'type')
    at Object.Field (file:///home/node/app/node_modules/houdini/build/cmd.js:76008:70)
    at Module.visit (/home/node/app/node_modules/graphql/language/visitor.js:243:26)
    at file:///home/node/app/node_modules/houdini/build/cmd.js:75996:44
    at step (file:///home/node/app/node_modules/houdini/build/cmd.js:124:23)
    at Object.next (file:///home/node/app/node_modules/houdini/build/cmd.js:105:53)
    at file:///home/node/app/node_modules/houdini/build/cmd.js:98:71
    at new Promise (<anonymous>)
    at __awaiter$1 (file:///home/node/app/node_modules/houdini/build/cmd.js:94:12)
    at addID (file:///home/node/app/node_modules/houdini/build/cmd.js:75987:12)
    at file:///home/node/app/node_modules/houdini/build/cmd.js:401:42
```

It seems every public version I used had this issue. I'm not entirely sure why but another issue altogether.
