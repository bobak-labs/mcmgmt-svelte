<script>
    import FeatureCard from '../../lib/components/FeatureCard.svelte';
  
    const cards = [
      { icon: "https://cdn-icons-png.flaticon.com/128/2818/2818821.png", title: 'Backup options', description: 'Reliable and smooth backup experience. Backup current server state, load Backup files and manage them in your system.', endpoint:"/dashboard/backup" },
      { icon: "https://cdn-icons-png.flaticon.com/128/1276/1276720.png", title: 'Cloud Sync', description: 'Sync your data to Google Cloud Platform Object Storage, so you can store your data in the Cloud, reliably and easily.', endpoint: "/dashboard/backup" },
      { icon: "https://cdn-icons-png.flaticon.com/128/16002/16002105.png", title: 'Power Management', description: 'Start & Stop your server with just one button press.', endpoint: "/dashboard/power" },
      { icon: "https://cdn-icons-png.flaticon.com/128/2706/2706914.png", title: 'Access Control', description: 'Op/Deop players, manage whitelists and blacklists.', endpoint:"/dashboard/admin" },
      { icon: "https://cdn-icons-png.flaticon.com/128/3208/3208615.png", title: 'Logs Navigation', description: 'Explore logs to know what\'s going on in your environment.', endpoint: "/dashboard/logs" },
      { icon: "https://cdn-icons-png.flaticon.com/128/9601/9601212.png", title: 'Modding & Plugins', description: 'Manage your modifications and plugins via easy-to-use, extensible UI.', endpoint:"/dashboard/modding" }    ];
</script>

<style>
    b {
        color:rgb(208, 146, 255);
    }
</style>

<section class="min-h-screen flex flex-col items-center justify-center py-36 px-4 bg-gray-100 dark:bg-gray-900">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold dark:text-white">
        Your <b>m</b>ine<b>c</b>raft server <b>m</b>ana<b>g</b>e<b>m</b>en<b>t</b> platform, all in one place!
      </h1>
      <p class="text-gray-400 mt-4"><b>mcmgmt</b> will help you embrace every aspect of your Minecraft Server.</p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-6">
      {#each cards as {icon, title, description, endpoint}}
        <FeatureCard {icon} {title} {description} {endpoint}/>
      {/each}
    </div>
  
    <div class="mt-12">
        <a href="/dashboard">
            <button class="bg-purple-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-purple-600">
                Go to Dashboard
            </button>
        </a>
    </div>
  </section>
