<script>
  export let status = 'stopped'; // Possible values: 'stopped', 'running'
</script>

<div class="flex items-center space-x-2">
  <div class="w-4 h-4 rounded-full" class:bg-green-500={status === 'running'} class:bg-red-500={status === 'stopped'} />
  <span class="hidden md:inline-block text-lg font-medium">
    {status === 'running' ? 'Running' : 'Stopped'}
  </span>
</div>
