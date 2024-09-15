<script>
    // Define a list of backups to simulate the backend data (replace this with actual data)
    export let backups = [
        'adsf.zip',
        'adsf.zip',
        'this_is_a_very_long_backup_file_name_that_might_overflow.zip',
        'adsf.zip',
        'adsf.zip',
    ];

    // Functions for handling modals (replace with actual logic)
    function openDeleteModal(backupName) {
        console.log(`Delete modal for: ${backupName}`);
    }

    function openModal(modalName) {
        console.log(`Open modal: ${modalName}`);
    }
</script>

    
<!-- <div class="w-full"> -->


    <!-- Available Backups Card -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative w-full sm:w-auto">
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Available Backups</h2>
        <ul class="list-disc list-inside space-y-2">
            {#if backups.length > 0}
                {#each backups as backup}
                <!-- Ensure the li adjusts its size to fit the content -->
                <li class="backup-item text-gray-700 dark:text-gray-300 flex items-center justify-between rounded-sm hover:bg-gray-200 dark:hover:bg-gray-900 p-2 border-b border-gray-300 dark:border-gray-600 w-full">
                    <span class="break-all w-auto">{backup}</span>
                    <button on:click={() => openDeleteModal(backup)}
                        class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600">X</button>
                </li>
                {/each}
            {:else}
                <li class="text-gray-500 dark:text-gray-400">No backups available</li>
            {/if}
        </ul>
        <button on:click={() => openModal('availableBackupsInfo')} 
            class="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white font-semibold py-1 px-3 rounded-md">Info
        </button>
    </div>
