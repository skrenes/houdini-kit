<!-- src/routes/subscription.svelte -->
<script lang="ts">
  import { subscription, graphql, SubUsers } from '$houdini';

  let { data } = subscription<SubUsers>(graphql`
    subscription SubUsers {
      users {
        first_name
        last_name
      }
    }
  `);
</script>

{#if $data}
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
    <tbody>
      {#each $data.users as user}
        <tr>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <h2>No data!</h2>
{/if}
<p><a href="/">Back to index</a></p>
