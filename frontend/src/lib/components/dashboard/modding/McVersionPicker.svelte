<script>
    import { Label, Select } from 'flowbite-svelte';
    let selected;
  
    let versions = [
      { value: '1.21.1', name: 'Minecraft 1.21.1' },
      { value: '1.20.6', name: 'Minecraft 1.20.6' },
      { value: '1.19.0', name: 'Minecraft 1.19.0' },
      { value: '1.18.0', name: 'Minecraft 1.18.0' },
      { value: '1.17.1', name: 'Minecraft 1.17.1' },
      { value: '1.16.1', name: 'Minecraft 1.16.1' },
    ];
  </script>
    
  <Label>
    Select an option
    <Select class="mt-2" items={versions} bind:value={selected} />
  </Label>
