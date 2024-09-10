<script>
  export let svgIcon;
  export let displayName;
  export let endpoint;
</script>

<a href={endpoint} class="flex items-center p-3 text-black hover:bg-gray-700 rounded-lg transition-all dark:text-white">
  <img src={svgIcon} alt={displayName} class="w-6 h-6 filter dark:invert" />
  <span class="ml-4 hidden md:inline-block">{displayName}</span>
</a>
