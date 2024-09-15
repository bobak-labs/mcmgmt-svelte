<script>
    export let icon;
    export let title;
    export let description;
    export let endpoint;
</script>

<div class="flex flex-wrap justify-center items-start space-x-8 p-10 bg-blue-200 text-black dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
    <div class="text-blue-500">
        {#if icon}
            <img class="size-16 dark:invert" src="{icon}" alt="{title}"/>
        {/if}
    </div>
    <div>
        <h3 class="text-lg font-bold text-black dark:text-white">{title}</h3>
        <p class="text-gray-700 dark:text-gray-300">{description}</p>
        <a href="{endpoint}" class="text-purple-600 dark:text-purple-400 hover:underline font-medium">
            Explore →
        </a>
    </div>

</div>
