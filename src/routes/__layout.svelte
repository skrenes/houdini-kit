<script context="module">
  import { setEnvironment } from '$houdini';
  import environment from '../environment';

  setEnvironment(environment);
</script>

<svelte:head><title>SvelteKit + Houdini</title></svelte:head>

<header><h1>SvelteKit + Houdini</h1></header>
<main><slot /></main>
