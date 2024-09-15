<script>
    import OpDeopPlayer from "./OpDeopPlayer.svelte";
    import AdminStats from "./AdminStats.svelte";

    let list = [
    {
      img: { src: '/images/profile-picture-3.webp', alt: 'ssss' },
      name: 'bnbebab',
      player_id: 'ac7ff0f8-700a-440f-9247-90e333775915',
      player_index: '1',
      privileges: 'op',
      is_banned: false,
      is_on_whitelist: true,
      is_on_blacklist: false
    },
    {
      img: { src: '/images/profile-picture-3.webp', alt: 'ssssss' },
      name: 'bnbebab',
      player_id: 'ac7ff0f8-700a-440f-9247-90e33375915',
      player_index: '2',
      privileges: 'player',
      is_banned: false,
      is_on_whitelist: true,
      is_on_blacklist: false
    },
    {
      img: { src: '/images/profile-picture-3.webp', alt: 'Msssssss' },
      name: 'bnbebab',
      player_id: 'ac7ff0f8-700a-440f-9247-9033775915',
      player_index: '3',
      privileges: 'op',
      is_banned: false,
      is_on_whitelist: true,
      is_on_blacklist: false,
    },
    {
      img: { src: '/images/profile-picture-3.webp', alt: 'ssssss' },
      name: 'bnbebab',
      player_id: 'ac7ff0f8-700a-440f-9247-9333775915',
      player_index: '4',
      privileges: 'player',
      is_banned: false,
      is_on_whitelist: true,
      is_on_blacklist: false
    },
    {
      img: { src: '/images/profile-picture-3.webp', alt: 'Msssssss' },
      name: 'bnbebab',
      player_id: 'ac7ff0f8-700a-440f-9247-90e3915',
      player_index: '5',
      privileges: 'op',
      is_banned: false,
      is_on_whitelist: true,
      is_on_blacklist: false
    },
    {
      img: { src: '/images/profile-picture-3.webp', alt: 'Msssssss' },
      name: 'bnbebab',
      player_id: 'ac7ff0f8-700a-440f-9247-905915',
      player_index: '6',
      privileges: 'op',
      is_banned: false,
      is_on_whitelist: true,
      is_on_blacklist: false
    },
    {
      img: { src: '/images/profile-picture-3.webp', alt: 'ssssss' },
      name: 'bnbebab',
      player_id: 'ac7ff0f8-700a-440f-9247-90e5',
      player_index: '7',
      privileges: 'player',
      is_banned: false,
      is_on_whitelist: true,
      is_on_blacklist: false
    },
    {
      img: { src: '/images/profile-picture-3.webp', alt: 'Msssssss' },
      name: 'bnbebab',
      player_id: 'ac7ff0f8-700a-440f-9247-90e',
      player_index: '8',
      privileges: 'op',
      is_banned: false,
      is_on_whitelist: true,
      is_on_blacklist: false
    }
  ];
  function updatePlayerList(updatedList) {
    list = updatedList;
  }
</script>

<div class="space-y-4">
    <OpDeopPlayer {list} on:updateList={e => updatePlayerList(e.detail)} />
    <AdminStats {list} />
</div>


  