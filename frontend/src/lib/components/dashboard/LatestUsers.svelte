<script>
  export let users = [];
</script>

<div class="rounded-lg overflow-x-auto">
    <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
        Recent User Activity
    </h3>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg">
        <thead class="rounded-md text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Username</th>
            <th scope="col" class="px-6 py-3">Join Time</th>
            <th scope="col" class="px-6 py-3">Privileges</th>
          </tr>
        </thead>
        <tbody>
          {#each users as user}
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td class="px-6 py-4">{user.username}</td>
              <td class="px-6 py-4">{user.joinedAt}</td>
              <td class="px-6 py-4">{user.privileges}</td>
            </tr>
          {/each}
        </tbody>
      </table>
</div>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 0.5rem;
  }
</style>
