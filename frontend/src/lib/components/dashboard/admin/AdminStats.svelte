<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  export let list;

  function abbreviateId(id) {
    return id.slice(0, 8) + '...'; // Abbreviates the player ID
  }

</script>

<div class="overflow-x-auto">
  <Table striped={true} hoverable={true} class="table-auto">
    <TableHead>
      <TableHeadCell class="px-2">ID</TableHeadCell> <!-- Reduced padding -->
      <TableHeadCell class="px-2">Name</TableHeadCell>
      <TableHeadCell class="hidden md:table-cell px-2">ID</TableHeadCell> <!-- Reduced padding -->
      <TableHeadCell class="px-2">Priv.</TableHeadCell> <!-- Abbreviated column -->
      <TableHeadCell class="hidden lg:table-cell px-2">Ban</TableHeadCell> <!-- Abbreviated column -->
      <TableHeadCell class="hidden lg:table-cell px-2">BL</TableHeadCell> <!-- Abbreviated column -->
      <TableHeadCell class="hidden lg:table-cell px-2">WL</TableHeadCell> <!-- Abbreviated column -->
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
            <a href="/dashboard" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
          </TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
</div>
