<script>
  import serverImage from './icons/server-image.webp'; // Replace with your actual server image path

  // Example data, replace with actual data retrieval logic
  let serverStats = {
    containerImage: 'nginx:latest',
    modsAdded: ['Mod A', 'Mod B'],
    state: 'Running',
    ipAddress: '192.168.1.100',
    port: '25565',
    totalPlayersJoined: 123,
  };
</script>

<div class="flex flex-col bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
  <div class="flex items-center mb-4">
    <img
      src={serverImage}
      alt="Server Image"
      class="w-24 h-24 object-cover rounded-full mr-4"
    />
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Server Statistics</h2>
      <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">All relevant server information</p>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Container Image</h3>
      <p class="text-gray-900 dark:text-gray-300 mt-2">{serverStats.containerImage}</p>
    </div>

    <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Mods Added</h3>
      <ul class="list-disc list-inside text-gray-900 dark:text-gray-300 mt-2">
        {#each serverStats.modsAdded as mod}
          <li>{mod}</li>
        {/each}
      </ul>
    </div>

    <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">State</h3>
      <p class="text-gray-900 dark:text-gray-300 mt-2">{serverStats.state}</p>
    </div>

    <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">IP Address / Port</h3>
      <p class="text-gray-900 dark:text-gray-300 mt-2">{serverStats.ipAddress}:{serverStats.port}</p>
    </div>

    <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Total Players Joined</h3>
      <p class="text-gray-900 dark:text-gray-300 mt-2">{serverStats.totalPlayersJoined}</p>
    </div>
  </div>
</div>

<style>
  .bg-dark { background-color: #1a202c; } /* For custom dark mode color if needed */
</style>
