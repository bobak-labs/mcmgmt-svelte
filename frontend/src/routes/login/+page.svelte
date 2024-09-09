<script>
    let username = '';
    let password = '';
    let errorMessage = '';

    import { Card, Button, Label, Input } from 'flowbite-svelte';

</script>

<!-- Container for centering -->
<div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <!-- Set a max-width for the Card component -->
    <Card class="max-w-lg w-full p-6">
      <form method="post" class="flex flex-col space-y-6"> <!-- Ensure method="post" -->
        <h3 class="text-2xl text-gray-900 dark:text-white">Log In to <b class="text-purple-500">mcmgmt</b></h3>
        
        <!-- Username input -->
        <Label for="username" class="space-y-2 text-lg">
          <span class="text-lg">Username</span>
          <Input
            type="text"
            id="username"
            name="username" 
            required
            bind:value={username}
            placeholder="Enter username" 
            class="h-9 text-base"/>
        </Label>
  
        <!-- Password input -->
        <Label for="password" class="space-y-2 text-lg">
          <span class="text-lg">Your password</span>
          <Input 
            type="password"
            id="password"
            name="password"
            required
            bind:value={password}
            placeholder="••••••••••••••••••••" 
            class="h-9 text-lg mb-10"/>
        </Label>
  
        <!-- Button -->
        <Button type="submit" class="h-12 bg-purple-400 w-full text-lg text-white dark:bg-purple-600 dark:hover:bg-purple-400">Log In</Button>
  
        <!-- Footer -->
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? <a href="/" class="text-primary-700 hover:underline hover:text-blue-400 dark:text-primary-500">Create account</a>
        </div>
      </form>
    </Card>
</div>
