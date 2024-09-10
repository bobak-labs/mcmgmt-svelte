<script>
    import PageNavbar from "../../lib/components/PageNavbar.svelte";
  
    export const navbarType = 'normal';
  </script>
  
  <div class="flex flex-col min-h-screen">
    <!-- Home-specific Navbar if needed -->
    <!-- <PageNavbar navbarType={navbarType} class="fixed top-0 left-0 w-full z-10" /> -->
    
    <!-- Content slot -->
    <main class="flex-1">
      <slot />
    </main>
  </div>
  