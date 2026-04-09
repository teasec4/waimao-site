<script lang="ts">
	import { page } from '$app/stores';
	import { Home } from 'lucide-svelte';
</script>

<div class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
	<div class="max-w-md w-full text-center">
		<div class="text-8xl font-black text-red-600/20 mb-4">
			{$page.status}
		</div>
		
		<h1 class="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 mb-4">
			{#if $page.status === 404}
				Page Not <span class="text-red-600">Found</span>
			{:else}
				Something <span class="text-red-600">Went Wrong</span>
			{/if}
		</h1>
		
		<p class="text-slate-500 mb-10">
			{#if $page.status === 404}
				The page you're looking for doesn't exist or has been moved.
			{:else}
				{$page.error?.message || 'An unexpected error occurred.'}
			{/if}
		</p>
		
		<a 
			href="/" 
			class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-red-600 transition-all"
		>
			<Home size={20} />
			Back to Home
		</a>
	</div>
</div>