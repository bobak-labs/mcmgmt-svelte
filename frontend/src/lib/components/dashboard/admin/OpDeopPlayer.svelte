<script>
  import { Card, Listgroup, Button } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';

  // Import player action functions from the external file
  import {
    opPlayer,
    deopPlayer,
    banPlayer,
    unbanPlayer,
    addToWhitelist,
    removeFromWhitelist,
    addToBlacklist,
    removeFromBlacklist,
    kickPlayer,
    kickUnavailablePlayer
  } from '$lib/clientside/playerActions'; // Adjust path as per your folder structure


  export let list;

  const dispatch = createEventDispatcher();

  let showAll = false;

  function toggleView() {
    showAll = !showAll;
  }

  // Modify list state using the imported functions
  function handleOpPlayer(player_id) {
    list = opPlayer(list, player_id);
    dispatch('updateList',list);
  }

  function handleDeopPlayer(player_id) {
    list = deopPlayer(list, player_id);
    dispatch('updateList',list);
  }

  function handleBanPlayer(player_id) {
    list = banPlayer(list, player_id);
    dispatch('updateList',list);
  }

  function handleUnbanPlayer(player_id) {
    list = unbanPlayer(list, player_id);
    dispatch('updateList',list);
  }

  function handleAddToWhitelist(player_id) {
    list = addToWhitelist(list, player_id);
    dispatch('updateList',list);
  }

  function handleRemoveFromWhitelist(player_id) {
    list = removeFromWhitelist(list, player_id);
    dispatch('updateList',list);
  }

  function handleAddToBlacklist(player_id) {
    list = addToBlacklist(list, player_id);
    dispatch('updateList',list);
  }

  function handleRemoveFromBlacklist(player_id) {
    list = removeFromBlacklist(list, player_id);
    dispatch('updateList',list);
  }

  function handleKickPlayer(player_id) {
    list = kickPlayer(list, player_id);
    dispatch('updateList',list);
  }

  function handleKickUnavailablePlayer(player_id) {
    kickUnavailablePlayer(player_id);
    dispatch('updateList',list);
  }

</script>

<!-- Main container with responsive width -->
<Card class="bg-white dark:bg-gray-800 rounded-lg shadow-lg md:max-w-full">
  <div class="flex justify-between items-center mb-4">
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Player Permissions</h5>
    <Button
      on:click={toggleView}
      class="text-sm font-medium hover:underline dark:text-primary-500"
      style="background-color: transparent; color: {showAll ? 'gray-600' : 'orange-500'};"
    >
      {showAll ? 'View less' : 'View all'}
    </Button>
  </div>
  <Listgroup class="flex flex-col" items={showAll ? list : list.slice(0, 4)} let:item>
    <div class="flex items-center space-x-4 space-y-4 sm:flex-wrap sm:flex-col md:flex-row">
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 dark:text-white truncate">
          {item.name}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400 sm:overflow-clip">
          {item.player_id}
        </p>
        <p>index: {item.player_index}</p>
      </div>
      <div class="flex flex-wrap justify-evenly gap-4">

        {#if item.privileges === 'op'}
          <Button color="red" size="xs" class="md:max-w-32" on:click={() => handleDeopPlayer(item.player_id)}>deop player</Button>
        {:else if item.privileges === 'player'}
          <Button color="green" size="xs" class="md:max-w-32" on:click={() => handleOpPlayer(item.player_id)}>op player</Button>
        {/if}

        {#if item.is_banned}
          <Button color="yellow" size="xs" class="md:max-w-32" on:click={() => handleUnbanPlayer(item.player_id)}>unban</Button>
        {:else}
          <Button color="red" size="xs" class="md:max-w-32" on:click={() => handleBanPlayer(item.player_id)}>ban</Button>
        {/if}

        {#if item.is_on_blacklist}
          <Button color="yellow" size="xs" class="md:max-w-32" on:click={() => handleRemoveFromBlacklist(item.player_id)}>remove from blacklist</Button>
        {:else}
          <Button size="xs" class="md:max-w-32" on:click={() => handleAddToBlacklist(item.player_id)}>add to blacklist</Button>
        {/if}

        {#if item.is_on_whitelist}
          <Button color="yellow" size="xs" class="md:max-w-32" on:click={() => handleRemoveFromWhitelist(item.player_id)}>remove from whitelist</Button>
        {:else}
          <Button color="green" size="xs" class="md:max-w-32" on:click={() => handleAddToWhitelist(item.player_id)}>add to whitelist</Button>  
        {/if}

        {#if item.is_available}
          <Button color="red" size="xs" class="md:max-w-32" on:click={() => handleKickPlayer(item.player_id)}>kick</Button>
        {:else}
          <Button color="alternative" size="xs" class="md:max-w-32" on:click={() => handleKickUnavailablePlayer(item.player_id)}>kick unavailable</Button>
        {/if}
      </div>
    </div>
  </Listgroup>
</Card>
