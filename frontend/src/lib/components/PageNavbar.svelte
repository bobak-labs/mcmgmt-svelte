<script>
  import { page } from '$app/stores';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger} from 'flowbite-svelte';
  import { DarkMode } from 'flowbite-svelte';
  $: activeUrl = $page.url.pathname;

  export let isLoginPage;
</script>

<!-- Fixed Navbar at the top -->
<Navbar class="justify-between items-center fixed top-0 left-0 w-full bg-white shadow-md dark:bg-gray-800 dark:border-gray-600 z-30 px-4">
    <NavBrand href="/">
      <img src="https://avatars.githubusercontent.com/u/179721646?s=400&u=482a5306290e9eaf3e8a1a69b3e00a943f28d2d6&v=4" class="h-16" alt="Bobak Labs Logo" />
    </NavBrand>
    <span class="ml-2 text-xl font-semibold dark:text-white">Bobak Labs mcmgmt</span>
    <NavUl class="space-x-4" {activeUrl}>
        <NavLi href="/login" activeClass="sm:bg-transparent bg-purple-500 text-amber-50">Login</NavLi>
        <NavLi href="/about" activeClass="lg:bg-transparent bg-purple-500 text-amber-50">About</NavLi>
        <NavLi href="/docs" activeClass="lg:bg-transparent bg-purple-500 text-amber-50">Docs</NavLi>
    </NavUl>
    <NavHamburger></NavHamburger>
    <DarkMode class="ml-4" />
</Navbar>
