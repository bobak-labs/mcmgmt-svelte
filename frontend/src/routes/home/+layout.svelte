<script>
  import PageNavbar from "../../lib/components/PageNavbar.svelte";
  import { onMount } from 'svelte';
  
  onMount(() => {
    console.log('Dashboard mounted');
  });
  
</script>

<div class="flex flex-col min-h-screen">
  <!-- Home-specific Navbar if needed -->
  
  <!-- Content slot -->
  <main class="flex-1">
    <slot />
  </main>
</div>
