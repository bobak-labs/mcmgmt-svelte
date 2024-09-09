<script>
  import PageAdminNavbar from "../../lib/components/PageAdminNavbar.svelte";

</script>

<div class="flex flex-col min-h-screen">
  <!-- Home-specific Navbar if needed -->
  <PageAdminNavbar class="fixed top-0 left-0 w-full z-10" />
  
  <!-- Content slot -->
  <main class="flex-1 pt-16 mt-16">
    <slot />
  </main>
</div>
