<script>
    import { Label, Select } from 'flowbite-svelte';

    let selected;
    // ServerTypePicker - component for deciding on a server type (Vanilla, Forge, Fabric, Spigot, Paper)
    let serverTypes = [
      { value: 'vanilla', name: 'Vanilla' },
      { value: 'forge', name: 'Forge' },
      { value: 'fabric', name: 'Fabric' },
      { value: 'spigot', name: 'Spigot' },
      { value: 'paper', name: 'Paper' }
    ];
</script>

<Label>
    Select an option
    <Select class="mt-2" items={serverTypes} bind:value={selected}/>
</Label>
