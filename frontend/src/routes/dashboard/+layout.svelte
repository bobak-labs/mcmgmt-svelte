<script>
  import { Footer } from "flowbite-svelte";
  import AdminSidebar from "../../lib/components/dashboard/AdminSidebar.svelte";
  export const navbarType = 'admin';
</script>

<div class="flex flex-col min-h-screen">
  <!-- Navbar -->
  <!-- Sidebar and content wrapper -->
  <div class="flex">
    <!-- Sidebar -->
    <AdminSidebar /> <!-- Sidebar width defined -->

    <!-- Main content -->
    <main class="flex-1 ml-16 p-4 sm:ml-16 sm:p-4 lg:ml-64 lg:p-4 md:ml-64 md:p-4 bg-gray-100 dark:bg-gray-600">
      <slot />
    </main>
  </div>

  <!-- Footer -->
</div>
