<script>
    import { createEventDispatcher } from 'svelte';
    import { Modal, Button, Label, Input } from 'flowbite-svelte';
  
    const dispatch = createEventDispatcher();
  
    export let currentPropertyValue; // The value to be edited
    export let propertyName; // The name of the property being edited
  
    // Function to close the modal
    function closeModal() {
      dispatch('close'); // Emit close event to parent component
    }
  </script>
  
  <!-- Modal content -->
  <Modal title="Edit Property" show={true} on:close={closeModal} autoclose outsideclose>
    <form class="flex flex-col space-y-6">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit value for {propertyName}</h3>
      <Label class="space-y-2">
        <span>Current value</span>
        <p>{propertyName}: {currentPropertyValue}</p>
        <span>Desired value</span>
        <Input type="text" placeholder="Enter new value" required />
      </Label>
    </form>
    <svelte:fragment slot="footer">
      <Button on:click={() => alert('Handle "success"')}>Accept changes</Button>
      <Button color="alternative" on:click={closeModal}>Cancel</Button>
    </svelte:fragment>
  </Modal>
  