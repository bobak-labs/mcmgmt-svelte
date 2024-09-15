<script>
    import AvailableBackups from "./AvailableBackups.svelte";
    import BackupCreator from "./BackupCreator.svelte";
    import BackupLoader from "./BackupLoader.svelte";
    import CloudSync from "./CloudSync.svelte";
  </script>
  
<!-- <div class="flex flex-col items-center justify-between mb-4 space-y-4 w-full">
  <div class="flex flex-wrap flex-row">
    <AvailableBackups/>
    <CloudSync/>
  </div>

  <div class="flex flex-wrap flex-row w-full">
    <BackupLoader/>
    <BackupCreator/>
  </div>
</div> -->

<div class="grid md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-1 gap-4">
  <AvailableBackups/>
  <CloudSync/>
  <BackupLoader/>
  <BackupCreator/>
</div>
