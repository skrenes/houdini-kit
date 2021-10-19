<!-- src/routes/query.svelte -->
<script lang="ts">
  import { query, graphql, QueryUsers } from '$houdini';

  const { data } = query<QueryUsers>(graphql`
    query QueryUsers {
      users {
        first_name
        last_name
      }
    }
  `);
</script>

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
<p><a href="/">Back to index</a></p>
