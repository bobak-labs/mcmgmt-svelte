<script>
    import { Button } from 'flowbite-svelte';
    let backupZips = ['server-4-20-2021.log','server-4-20-2690.log','server-4-20-2021.log','server-03-21-2021.log','server-4-20-2420.log','server-4-20-2069.log']

</script>

<section>

    <div class="flex justify-evenly gap-4 py-4 md:flex-row sm:flex-col">
        {#each backupZips as b}
            <Button color="blue">{b}</Button>
        {/each}
    </div>
</section>
