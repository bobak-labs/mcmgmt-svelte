<script>
    import AvailableBackups from "./AvailableBackups.svelte";
    import BackupCreator from "./BackupCreator.svelte";
    import BackupLoader from "./BackupLoader.svelte";
    import CloudSync from "./CloudSync.svelte";
  </script>
  
<div class="flex flex-col items-center justify-between mb-4 space-y-4">
    <AvailableBackups/>
    <CloudSync/>
    <BackupLoader/>
    <BackupCreator/>
</div>
