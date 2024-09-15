<script>
    import { serverPropertiesMock } from '../../../clientside/mock/serverProperties.js';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

    let properties = serverPropertiesMock;
</script>

<div class="overflow-x-auto w-full">
  <Table class="min-w-full table-auto table-fixed"> <!-- Added 'table-fixed' to control layout -->
    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
      Minecraft Server Properties
      <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse and manage server properties.</p>
    </caption>
    <TableHead>
      <TableHeadCell class="w-1/2 sm:w-1/4 px-2 py-1">Property</TableHeadCell> <!-- Reduced width -->
      <TableHeadCell class="w-1/2 sm:w-1/4 px-2 py-1">Value</TableHeadCell> <!-- Reduced width -->
      <TableHeadCell class="hidden sm:table-cell w-1/4 px-2 py-1">
        <span class="sr-only">Edit</span>
      </TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      {#each Object.entries(serverPropertiesMock) as [key, value]}
        <TableBodyRow>
          <TableBodyCell class="truncate w-1/2 sm:w-1/4 px-2 py-1">{key}</TableBodyCell> <!-- Truncate long keys -->
          <TableBodyCell class="truncate w-1/2 sm:w-1/4 px-2 py-1">{value}</TableBodyCell> <!-- Truncate long values -->
          <TableBodyCell class="hidden sm:table-cell w-1/4 px-2 py-1">
            <a href="/dashboard/admin" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
          </TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
</div>
