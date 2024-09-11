<script>
    let cloudBackups = []; // Array to hold cloud backups
  
    // Simulate fetching cloud backups
    // This could be replaced with actual data fetching logic
    // For example, you could use a fetch request or store
    // You might want to replace this with an API call or prop
    $: cloudBackups = ['asdf','asdf','asdf']; // Replace this with your cloud backup data
  
    function openModal(modalId) {
      // Replace with your modal opening logic
      console.log(`Opening modal: ${modalId}`);
    }
  </script>
  


  <div class="w-full">

  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative">
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Cloud Sync</h2>
    <form action="/sync" method="POST" class="space-y-4 mb-6">
      <button
        type="submit"
        class="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
      >
        Synchronize with Cloud
      </button>
    </form>
  
    <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Available Cloud Backups</h3>
    
    <div class="overflow-x-auto">

      <table class="rounded-md w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg">
        <thead class="rounded-md text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
          <tr>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Backup Name</th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Date</th>
            <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Size</th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {#if cloudBackups.length > 0}
              {#each cloudBackups as { name, date, size }}
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td class="sm:px-0.5 sm:py-0.5 md:px-4 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100 tracking-wider">{name}</td>
                  <td class="sm:px-0.5 sm:py-0.5 md:px-4 md:py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{date}</td>
                  <td class="sm:px-0.5 sm:py-0.5 md:px-4 md:py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{size}</td>
                </tr>
              {/each}
            {:else}
              <tr>
                <td colspan="3" class="px-4 py-4 text-center text-gray-500 dark:text-gray-400">No cloud backups available</td>
              </tr>
            {/if}
          </tbody>
      </table>
  </div>
    <button
      on:click={() => openModal('cloudSyncInfo')}
      class="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold py-1 px-3 rounded-md dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-gray-200"
    >
      Info
    </button>
  </div>
</div>
