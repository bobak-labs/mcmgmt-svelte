<script>
    export let data;
</script>


<h1>{data.post.http_status}</h1>
<div>{@html data.post.message}</div>

<ul>
    {#each data.post.response.logs as log,index}

        <kbd class="px-2 py-1.5  font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">{log}</kbd><br>

    {/each}
</ul>