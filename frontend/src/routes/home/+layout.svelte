<script>
  import PageNavbar from "../../lib/components/PageNavbar.svelte";
  import { onMount } from 'svelte';
  
  onMount(() => {
    console.log('Dashboard mounted');
  });
  
</script>


<slot />

