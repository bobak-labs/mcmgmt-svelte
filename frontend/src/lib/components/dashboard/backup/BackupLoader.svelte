<script>
    let selectedBackupFile = null;
    let backups = [
        'backup1.zip',
        'backup2.zip',
        'backup3.zip'
    ]; // Replace this with actual backup list from server
    let isFileSelected = false;

    // Function to handle file input change
    function checkFileSelection(event) {
        selectedBackupFile = event.target.files[0];
        isFileSelected = !!selectedBackupFile; // Enable the upload button if a file is selected
    }

    // Modal handling (dummy for now)
    function openModal(modalName) {
        console.log(`Opening modal: ${modalName}`);
    }
</script>

<div class="w-full">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative w-full sm:w-auto">


    <!-- Backup Loader Section -->
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Backup Loader</h2>

    <!-- Backup from Disk Form -->
    <form action="/backup/load?file=true" method="POST" enctype="multipart/form-data" class="space-y-4 mb-6">
        <div>
            <label for="backupfile" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Select a Backup from Disk:</label>
            <input type="file" name="backupfile" id="backupfile"
                class="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 rounded-lg"
                on:change={checkFileSelection}>
        </div>
    
        <!-- Upload Button -->
        <button id="uploadButton" type="submit"
            class="w-full bg-gray-500 dark:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            class:opacity-50={!isFileSelected}
            class:cursor-not-allowed={!isFileSelected}
            disabled={!isFileSelected}>
            Upload Backup File
        </button>
    </form>
    

    <!-- Backup from Server Form -->
    <form action="/backup/load" method="POST" class="space-y-4">
        <div>
            <label for="backup" class="block text-gray-700 dark:text-gray-300 font-medium mb-2">Select a Backup from Server:</label>
            <select id="backup" name="backup"
                class="block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200">
                {#if backups.length > 0}
                    {#each backups as backup}
                        <option value={backup}>{backup}</option>
                    {/each}
                {:else}
                    <option disabled>No backups available</option>
                {/if}
            </select>
        </div>

        <!-- Load Backup Button -->
        <button type="submit"
            class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
            Load Backup
        </button>
    </form>

    <!-- Info Button (opens a modal) -->
    <button on:click={() => openModal('backupLoaderInfo')} 
        class="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white font-semibold py-1 px-3 rounded-md">
        Info
    </button>
</div>
</div>
