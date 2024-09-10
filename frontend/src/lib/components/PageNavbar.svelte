<script>
  import { page } from '$app/stores';
  import NavbarOptions from './NavbarOptions.svelte';
  import { DarkMode } from 'flowbite-svelte';
  import { Navbar, NavBrand, NavHamburger} from 'flowbite-svelte';

  $: activeUrl = $page.url.pathname;

  export let navbarType;
</script>
<style>
  b#mcmgmt{
      color:rgb(168, 54, 255);
  }
</style>

<!-- Fixed Navbar at the top -->
<Navbar class="flex flex-col justify-end items-center sticky py-8 top-0 left-0 w-full bg-white shadow-md dark:bg-gray-800 dark:border-gray-600 z-30 px-4">
    <NavBrand href="/">
      <img src="https://avatars.githubusercontent.com/u/179721646?s=400&u=482a5306290e9eaf3e8a1a69b3e00a943f28d2d6&v=4" class="h-16" alt="Bobak Labs Logo" />
    </NavBrand>
    <span class="ml-2 text-xl font-semibold dark:text-white">Bobak Labs <b id="mcmgmt">mcmgmt</b></span>
    <NavbarOptions activeUrl={activeUrl} navbarType={navbarType}></NavbarOptions>
    <NavHamburger></NavHamburger>
    <DarkMode class="ml-4" />
</Navbar>
