<script>
    let backupName = '';

    // Function to handle modal opening (dummy logic for now)
    function openModal(modalName) {
        console.log(`Opening modal: ${modalName}`);
    }
</script>


<!-- <div class="w-full"> -->

<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative w-full sm:w-auto">

    <!-- Backup Creator Section -->
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Backup Creator</h2>

    <!-- Backup Creation Form -->
    <form action="/backup" method="POST" class="space-y-4">
        <div>
            <label for="backup-name" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Backup Name (optional):</label>
            <input type="text" id="backup-name" name="name" bind:value={backupName} placeholder="Enter backup name"
                class="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200">
        </div>

        <!-- Create Backup Button -->
        <button type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
            Create Backup
        </button>
    </form>

    <!-- Info Button (opens a modal) -->
    <button on:click={() => openModal('backupCreatorInfo')} 
        class="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white font-semibold py-1 px-3 rounded-md">
        Info
    </button>
</div>
<!-- </div> -->
