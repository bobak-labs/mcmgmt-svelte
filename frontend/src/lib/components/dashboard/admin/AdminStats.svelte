<script>
  import { Modal, Button, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import EditPropertiesModal from './EditPropertiesModal.svelte';

  export let list;

  // Modal state
  let showModal = false;
  let currentProperty = { propertyValue: '', propertyName: '' }; // Set default empty property

  // Function to open the modal with specific data
  function openModal(property) {
    currentProperty = { ...property }; // Pass property value and name
    showModal = true; // Open modal
  }

  // Function to close the modal
  function closeModal() {
    showModal = false; // Close modal
  }
</script>

<!-- Table displaying player data -->
<div class="overflow-x-auto">
  <Table striped={true} hoverable={true} class="table-auto">
    <TableHead>
      <TableHeadCell class="px-2">ID</TableHeadCell>
      <TableHeadCell class="px-2">Name</TableHeadCell>
      <TableHeadCell class="hidden md:table-cell px-2">ID</TableHeadCell>
      <TableHeadCell class="px-2">Priv.</TableHeadCell>
      <TableHeadCell class="hidden lg:table-cell px-2">Ban</TableHeadCell>
      <TableHeadCell class="hidden lg:table-cell px-2">BL</TableHeadCell>
      <TableHeadCell class="hidden lg:table-cell px-2">WL</TableHeadCell>
      <TableHeadCell class="px-2">
        <span class="sr-only">Edit</span>
      </TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      {#each list as p}
        <TableBodyRow>
          <TableBodyCell class="px-2">{p.player_index}</TableBodyCell>
          <TableBodyCell class="px-2">{p.name}</TableBodyCell>
          <TableBodyCell class="hidden md:table-cell px-2">{p.player_id}</TableBodyCell>
          <TableBodyCell class="px-2">{p.privileges}</TableBodyCell>
          <TableBodyCell class="hidden lg:table-cell px-2">{p.is_banned}</TableBodyCell>
          <TableBodyCell class="hidden lg:table-cell px-2">{p.is_on_blacklist}</TableBodyCell>
          <TableBodyCell class="hidden lg:table-cell px-2">{p.is_on_whitelist}</TableBodyCell>
          <TableBodyCell class="px-2">
            <!-- Button to open modal and pass specific property -->
            <Button
              color="none"
              on:click={() => openModal({ propertyValue: p.is_banned, propertyName: p.name })}
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Edit
            </Button>
          </TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
</div>

<!-- Modal for editing properties -->
{#if showModal}
  <EditPropertiesModal
    currentPropertyValue={currentProperty.propertyValue}
    propertyName={currentProperty.propertyName}
    on:close={closeModal}
  />
{/if}
