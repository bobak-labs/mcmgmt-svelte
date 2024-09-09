<script>
  import '../app.css';
  import PageFooter from '../lib/components/PageFooter.svelte';
  import PageNavbar from '../lib/components/PageNavbar.svelte';

  let navbarType = 'normal';
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  :global(footer) {
    margin: 0;
    padding: 1rem; /* Add padding as needed */
    background-color: #f1f5f9; /* Light gray background or your desired color */
  }
  :global(main) {
    flex: 1; /* Ensure main content grows to fill available space */
  }
</style>

<div class="flex flex-col min-h-screen">
  <!-- Main layout wrapper -->
  <PageNavbar {navbarType} class="fixed top-0 left-0 w-full z-10" />
  
  <main class="flex-1 mt-16"> <!-- Adjust margin-top to ensure content is not hidden behind the navbar -->
    <slot />
  </main>
  
  <PageFooter class="relative" /> <!-- Footer positioned relative to document flow -->
</div>
