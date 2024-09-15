// Utility functions for player actions

export function opPlayer(playerList, player_id) {
  return playerList.map(player =>
    player.player_id === player_id
      ? { ...player, privileges: 'op' }
      : player
  );
}

export function deopPlayer(playerList, player_id) {
  return playerList.map(player =>
    player.player_id === player_id
      ? { ...player, privileges: 'player' }
      : player
  );
}

export function banPlayer(playerList, player_id) {
  return playerList.map(player =>
    player.player_id === player_id
      ? { ...player, is_banned: true }
      : player
  );
}

export function unbanPlayer(playerList, player_id) {
  return playerList.map(player =>
    player.player_id === player_id
      ? { ...player, is_banned: false }
      : player
  );
}

export function addToWhitelist(playerList, player_id) {
  return playerList.map(player =>
    player.player_id === player_id
      ? { ...player, is_on_whitelist: true }
      : player
  );
}

export function removeFromWhitelist(playerList, player_id) {
  return playerList.map(player =>
    player.player_id === player_id
      ? { ...player, is_on_whitelist: false }
      : player
  );
}

export function addToBlacklist(playerList, player_id) {
  return playerList.map(player =>
    player.player_id === player_id
      ? { ...player, is_on_blacklist: true }
      : player
  );
}

export function removeFromBlacklist(playerList, player_id) {
  return playerList.map(player =>
    player.player_id === player_id
      ? { ...player, is_on_blacklist: false }
      : player
  );
}

export function kickPlayer(playerList, player_id) {
  return playerList.map(player =>
    player.player_id === player_id
      ? { ...player, is_available: false }
      : player
  );
}

export function kickUnavailablePlayer(player_id) {
  console.log(`Player with ID ${player_id} is already unavailable.`);
}
