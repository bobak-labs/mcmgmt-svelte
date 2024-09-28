<script>
  import LogExplorer from '../../../lib/components/dashboard/logs/LogExplorer.svelte';
import LogWindow from '../../../lib/components/dashboard/logs/LogWindow.svelte';
  // You can import other components or logic needed here
</script>


<div class="text-black dark:text-gray-300 flex justify-center items-center min-h-screen p-6">
  <div class="md:max-w-6xl sm:max-w-48">
    <LogWindow/>
    <LogExplorer/>
  </div>
</div>

