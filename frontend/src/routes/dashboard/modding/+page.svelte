<script>
  // You can import other components or logic needed here
    import { AccordionItem, Accordion, Button, Card } from 'flowbite-svelte';
    import McVersionPicker from "../../../lib/components/dashboard/modding/McVersionPicker.svelte";
    import ServerTypePicker from "../../../lib/components/dashboard/modding/ServerTypePicker.svelte";

    const items = Array(4);

    const open_all = () => items.forEach((_, i) => (items[i] = true));
    const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<div class="text-black dark:text-gray-300 flex justify-center items-center min-h-screen p-6">

  <div class="max-w-6xl w-full">

    <h1 class="text-3xl font-bold mb-4">Modding Management</h1>

    <section class="mb-8">
        <p class="">
            Our Modding Management System simplifies the process of enhancing your Minecraft server by allowing users to easily add and manage mods, modpacks, and plugins. 
            With an intuitive interface, automatic compatibility checks, and version management, you can seamlessly integrate community-made content into your gameplay.
        </p>
    </section>

    <!-- <section class="flex justify-center mb-8">
      <Card class="text-gray-800 dark:text-gray-300 p-4 shadow-md">
              <h3 class="font-bold">Key Features</h3>
              <ul class="mt-2 list-disc list-inside">
                  <li>Easy mod installation from popular repositories.</li>
                  <li>Compatibility checking for smooth gameplay.</li>
                  <li>Community support and resources.</li>
              </ul>
          </Card>
    </section> -->

    <div class="flex justify-center mb-4">
      <Button on:click={open_all} class="mr-2">Open all</Button>
      <Button on:click={close_all}>Close all</Button>
    </div>
    <Accordion class="text-black dark:text-white" multiple>
      <AccordionItem class="text-black bg-gray-300 dark:bg-gray-800" bind:open={items[0]}>
        <span slot="header">Pick Minecraft Version</span>
        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
        <McVersionPicker></McVersionPicker>
      </AccordionItem>
      <AccordionItem class="text-black bg-gray-300 dark:bg-gray-800" bind:open={items[1]}>
        <span slot="header">Choose Mods/Modpack</span>
        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2">Learn more about these technologies:</p>
        <ServerTypePicker></ServerTypePicker>
      </AccordionItem>
      <AccordionItem class="text-black bg-gray-300 dark:bg-gray-800" bind:open={items[2]}>
        <span slot="header">Pick Server Type</span>
        <p>Something more</p>
        <ServerTypePicker></ServerTypePicker>
      </AccordionItem>
      <AccordionItem class="text-black bg-gray-300 dark:bg-gray-800" bind:open={items[3]}>
        <span slot="header">Pick Server Type</span>
        <p>Something more</p>
        <ServerTypePicker></ServerTypePicker>
      </AccordionItem>
    </Accordion>
  </div>
</div>
