<script>
  export let href = '#';
  export let icon;
  export let label;
</script>

<a href={href} class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
  <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    {#if icon}
      {@html icon}
    {/if}
  </svg>
  <span class="ml-3">{label}</span>
</a>
