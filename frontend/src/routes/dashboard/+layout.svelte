<script>
  import PageNavbar from "../../lib/components/PageNavbar.svelte";
  import PageFooter from "../../lib/components/PageFooter.svelte";
  export const navbarType = 'admin';
</script>

<div class="flex flex-col min-h-screen">
  <!-- Home-specific Navbar if needed -->
  <PageNavbar navbarType={navbarType} class="fixed top-0 left-0 w-full z-10" />
  
  <!-- Content slot -->
  <main class="flex-1 pt-8 mt-8 py-8">
    <slot />
  </main>
  <PageFooter class="fixed bottom-0 left-0 w-full" />

</div>
