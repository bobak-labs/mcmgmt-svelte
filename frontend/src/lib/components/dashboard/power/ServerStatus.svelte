<script>
  import StatusIndicator from './StatusIndicator.svelte';
  export let serverStatus = 'stopped'; // Possible values: 'stopped', 'running'
</script>

<div class="p-4 dark:bg-gray-900 rounded-lg text-black flex items-center justify-between dark:text-white dark:bg-black">
  <h2 class="hidden md:inline-block">Server Status</h2>
  <StatusIndicator status={serverStatus} />
</div>
