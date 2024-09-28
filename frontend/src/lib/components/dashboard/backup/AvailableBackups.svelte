<script>
    // Define a list of backups to simulate the backend data (replace this with actual data)
    export let backups = [
        'adsf.zip',
        'adsf.zip',
        'this_is_a_very_long_backup_file_name_that_might_overflow.zip',
        'adsf.zip',
        'adsf.zip',
    ];

    // Array to store backups marked for deletion
    let backupsToDelete = [];

    // Functions for handling modals (replace with actual logic)
    function openDeleteModal(backupName) {
        // Check if the backup is already marked for deletion, if not, add it to the list
        if (!backupsToDelete.includes(backupName)) {
            backupsToDelete = [...backupsToDelete, backupName];
        }
    }

    function openModal(modalName) {
        console.log(`Open modal: ${modalName}`);
    }

    // Function to confirm the deletion
    function confirmDeletion() {
        console.log('Deleting backups:', backupsToDelete);
        // Simulate deletion logic
        backups = backups.filter(backup => !backupsToDelete.includes(backup));
        // Clear the backups marked for deletion
        backupsToDelete = [];
    }

    // Function to cancel deletion
    function cancelDeletion(backupName) {
        backupsToDelete = backupsToDelete.filter(item => item !== backupName);
    }
</script>

<div class="w-full">
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

    {#if backupsToDelete.length > 0}
    <!-- Marked for Deletion Section -->
    <div class="bg-red-100 dark:bg-red-800 rounded-lg shadow-lg p-6 mt-4">
        <h3 class="text-xl font-semibold text-red-600 dark:text-red-300 mb-4">Backups Marked for Deletion</h3>
        <ul class="space-y-2">
            {#each backupsToDelete as backup}
            <li class="flex justify-between items-center">
                <span class="text-red-600 dark:text-red-300 break-all">{backup}</span>
                <button on:click={() => cancelDeletion(backup)} 
                    class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600">Undo</button>
            </li>
            {/each}
        </ul>

        <!-- Single Delete Button for All Marked Backups -->
        <div class="mt-4">
            <button on:click={confirmDeletion} 
                class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md">
                Delete Selected Backups
            </button>
        </div>
    </div>
    {/if}
</div>
