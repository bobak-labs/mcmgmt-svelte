<script>
	import SidebarLi from './SidebarLi.svelte';
	import serverIcon from './icons/server.svg';
	import backupIcon from './icons/backup.svg';
	import moddingIcon from './icons/modding.svg';
	import adminIcon from './icons/admin.svg';
	import logsIcon from './icons/logs.svg';
	import infoIcon from './icons/info.svg';
	import ServerStatus from './power/ServerStatus.svelte';
</script>

<!-- Sidebar container with fixed position and scrollable content -->
<ul class="py-4 flex flex-col justify-beetween p-0 m-0 space-y-2 w-14 md:w-64 h-screen fixed overflow-y-auto bg-gray-300 dark:bg-gray-900">
	<SidebarLi svgIcon={infoIcon} displayName="Dashboard" endpoint="/dashboard" />
	<SidebarLi svgIcon={serverIcon} displayName="Start/Stop Server" endpoint="/dashboard/power" />
	<SidebarLi svgIcon={backupIcon} displayName="Backup Manager" endpoint="/dashboard/backup" />
	<SidebarLi svgIcon={moddingIcon} displayName="Modding Manager" endpoint="/dashboard/modding" />
	<SidebarLi svgIcon={adminIcon} displayName="Server Administration" endpoint="/dashboard/admin" />
	<SidebarLi svgIcon={logsIcon} displayName="Log Navigator" endpoint="/dashboard/logs" />
	<!-- Add more SidebarLi components as needed -->

	<ServerStatus />

</ul>
