<script>
  import { Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import serverRunningIcon from './icons/server-running.svg';
  import serverStoppedIcon from './icons/server-stopped.svg';

  let serverState = 'stopped'; // Example state, adjust as needed
  let logs = [
    'Server started successfully.',
    'No issues detected.',
  ]; // Example logs, replace with actual log retrieval logic

  function toggleServer() {
    serverState = serverState === 'running' ? 'stopped' : 'running';
    logs.push(`Server ${serverState === 'running' ? 'started' : 'stopped'} at ${new Date().toLocaleTimeString()}`);
  }
</script>

<div class="flex flex-col bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Server Control</h2>
    <Button on:click={toggleServer} class="flex items-center">
      {serverState === 'running' ? 'Stop' : 'Start'} Server
      <ArrowRightOutline class="ml-2" />
    </Button>
  </div>

  <div class="flex items-center mb-4">
    <img
      src={serverState === 'running' ? serverRunningIcon : serverStoppedIcon}
      alt={serverState === 'running' ? 'Server Running' : 'Server Stopped'}
      class="w-12 h-12 mr-4"
    />
    <div class="flex flex-col">
      <div class="flex items-center">
        <p class="text-gray-900 dark:text-gray-300 text-lg mr-2">
          Status: {serverState === 'running' ? 'Running' : 'Stopped'}
        </p>
        <span
          class={`w-3 h-3 rounded-full ${
            serverState === 'running' ? 'bg-green-500' : 'bg-red-500'
          }`}
        ></span>
      </div>
      <div class="text-gray-500 dark:text-gray-400 text-sm">
        {serverState === 'running' ? 'The server is currently running' : 'The server is currently stopped'}
      </div>
    </div>
  </div>

  <div class="border-t border-gray-300 dark:border-gray-600 mt-4 pt-4">
    <h3 class="text-lg font-medium mb-2 text-gray-900 dark:text-gray-100">Server Logs</h3>
    <div class="overflow-y-auto max-h-48 bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
      {#if logs.length > 0}
        <ul class="list-none p-0 space-y-1 text-gray-900 dark:text-gray-300 font-mono">
          {#each logs as log}
            <li>{log}</li>
          {/each}
        </ul>
      {:else}
        <p class="text-gray-500 dark:text-gray-400">No logs available.</p>
      {/if}
    </div>
  </div>
</div>
