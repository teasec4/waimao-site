<script lang="ts">
	let { scrollY = 0 } = $props();
</script>

<nav class="fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center {scrollY > 50 ? 'bg-white/80 backdrop-blur-md py-3' : 'bg-transparent'}">
	<div class="text-2xl font-bold tracking-tighter text-slate-900">
		WAIMAO<span class="text-red-600">.</span>
	</div>
	<div class="hidden md:flex gap-8 items-center font-medium text-sm uppercase tracking-widest text-slate-600">
		<a href="#process" class="hover:text-red-600 transition-colors">Process</a>
		<a href="#logistics" class="hover:text-red-600 transition-colors">Logistics</a>
		<a href="#quote" class="px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-red-600 transition-all duration-300">Get a Quote</a>
	</div>
</nav>