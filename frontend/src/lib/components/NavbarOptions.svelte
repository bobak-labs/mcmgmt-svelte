<script>
    import { NavLi, NavUl} from 'flowbite-svelte';
    import { goto } from '$app/navigation'; // SvelteKit navigation for redirection
    export let activeUrl;
    export let navbarType;


    async function logOut() {
        try {
            const response = await fetch('/logout', {
                method: 'POST'
            });

            if (response.ok) {
                // Redirect to login after successful logout
                goto('/login');
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }
</script>


<NavUl class="space-x-4" {activeUrl}>
    {#if navbarType === 'admin'}
        <NavLi href="/home" activeClass="sm:bg-transparent bg-purple-500 text-purple dark:text-amber-50">Home</NavLi>
        <NavLi href="/about" activeClass="sm:bg-transparent bg-purple-500 text-purple dark:text-amber-50">About</NavLi>
        <NavLi href="/dashboard" activeClass="sm:bg-transparent bg-purple-500 text-purple dark:text-amber-50">Dashboard</NavLi>
        <NavLi href="https://github.com/bobak-labs" activeClass="sm:bg-transparent bg-purple-500 text-purple text-amber-50">Docs</NavLi>
        <NavLi on:click={logOut} activeClass="sm:bg-transparent bg-purple-500 text-purple text-amber-50">Log Out</NavLi>
    {/if}
    {#if navbarType === 'normal'}
        <NavLi href="/login" activeClass="bg-purple-500 text-purple-500 dark:text-amber-50 sm:bg-transparent ">Login</NavLi>
        <NavLi href="/about" activeClass="bg-purple-500 text-purple-500 dark:text-amber-50 sm:bg-transparent">About</NavLi>
        <NavLi href="https://github.com/bobak-labs" activeClass="bg-purple-500 text-purple-500 dark:text-amber-50 sm:bg-transparent">Docs</NavLi>
    {/if}
</NavUl>
