<script>
  import ServerStats from './ServerStats.svelte';
  import LatestUsers from './LatestUsers.svelte';

  let users = [
    { username: 'player1', joinedAt: '2024-09-10 12:34', privileges: 'op' },
    { username: 'player2', joinedAt: '2024-09-10 12:35', privileges: 'user'},
    { username: 'player3', joinedAt: '2024-09-10 12:36', privileges: 'op'},
    // Add more user data here
  ];
</script>

<div class="p-4 space-y-4">
  <ServerStats />
  <LatestUsers {users} />
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
