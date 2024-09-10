<script>
    import PageFooter from '../../lib/components/PageFooter.svelte';
    import PageNavbar from '../../lib/components/PageNavbar.svelte';
    // Access navbarType from the load function in +page.server.js
    export let data;

    // Extract the navbarType from the received data
    let { navbarType } = data || {};
    console.log('Navbar Type:', navbarType);
</script>


<div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <!-- Home-specific Navbar if needed -->
    <main class="flex-1 pt-8 mt-8">
        <slot />
    </main>
</div>
  