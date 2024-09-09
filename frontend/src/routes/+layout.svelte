<script>
  import '../app.css';
  import PageFooter from '../lib/components/PageFooter.svelte';
  import PageNavbar from '../lib/components/PageNavbar.svelte';
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>

<div class="flex flex-col min-h-screen">
  <!-- Main layout wrapper -->
  <PageNavbar class="fixed top-0 left-0 w-full z-10" />
  
  <!-- Content slot -->
  <main class="flex-1">
    <slot />
  </main>
  
  <PageFooter class="fixed bottom-0 left-0 w-full" />
</div>
