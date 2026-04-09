<script lang="ts">
	import { fade, fly } from 'svelte/transition';
</script>

<section class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50">
	<div class="container mx-auto px-6 relative z-10 text-center">
		<div in:fly={{ y: 30, duration: 800 }} class="max-w-4xl mx-auto">
			<h1 class="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-6 leading-tight">
				We Move Goods <br /> 
				<span class="text-red-600">From China</span> — Seamlessly
			</h1>
			<p in:fade={{ delay: 300, duration: 1000 }} class="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light">
				Premium sourcing and logistics architecture for international businesses. 
				We bridge the gap between Chinese manufacturing and global markets.
			</p>
			<div in:fly={{ y: 20, delay: 600, duration: 800 }} class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="#quote" class="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
					Get a Quote
				</a>
				<a href="#logistics" class="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all duration-300">
					Our Process
				</a>
			</div>
		</div>
	</div>

	<div class="absolute -bottom-24 -right-24 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50"></div>
	<div class="absolute -top-24 -left-24 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-50"></div>
</section>