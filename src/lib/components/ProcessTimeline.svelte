<script lang="ts">
	import { scrollY } from '$lib/stores/scroll';
	import { FileText, Search, ShieldCheck, Rocket } from 'lucide-svelte';

	const steps = [
		{
			title: "Request",
			desc: "Submit your product requirements and target pricing.",
			icon: FileText,
			color: "red-500"
		},
		{
			title: "Sourcing",
			desc: "We vet manufacturers and negotiate the best terms.",
			icon: Search,
			color: "red-600"
		},
		{
			title: "Quality Check",
			desc: "Rigorous multi-stage inspection before shipment.",
			icon: ShieldCheck,
			color: "red-500"
		},
		{
			title: "Shipping",
			desc: "Optimized global logistics to your warehouse.",
			icon: Rocket,
			color: "red-600"
		}
	];

	let { scrollY: scrollYProp = 0 } = $props();

	let sectionProgress = $derived.by(() => {
		const sectionTop = 0;
		const sectionHeight = 800;
		return Math.max(0, Math.min(1, ($scrollY - sectionTop) / sectionHeight));
	});
</script>

<section class="relative py-32 w-full bg-slate-900 text-white overflow-hidden" id="process">
	<div class="absolute inset-0">
		<div class="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]"></div>
		<div class="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]"></div>
	</div>

	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-24">
			<span class="text-red-500 text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Methodology</span>
			<h2 class="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
				Our <span class="text-red-500">Architecture</span>
			</h2>
			<p class="text-slate-400 text-lg max-w-xl mx-auto">
				A systematic approach to sourcing. No guesswork, only verified results.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
			{#each steps as step, i}
				{@const isEven = i % 2 === 0}
				<div 
					class="group relative flex flex-col p-8 rounded-3xl transition-all duration-500 hover:translate-y-[-8px]"
					style="background: linear-gradient({isEven ? '135deg' : '225deg'}, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%); border: 1px solid rgba(255,255,255,0.05);"
				>
					<div class="flex items-center justify-between mb-8">
						<span class="text-6xl font-black text-white/5 tracking-tighter">
							0{i + 1}
						</span>
						<div class="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
							<svelte:component this={step.icon} size={24} class="text-red-500 group-hover:text-white transition-colors duration-300" />
						</div>
					</div>
					
					<h3 class="text-2xl font-bold mb-3">{step.title}</h3>
					<p class="text-slate-400 text-sm leading-relaxed">{step.desc}</p>

					<div class="absolute bottom-0 left-8 right-8 h-1 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div class="w-full h-full bg-gradient-to-r from-red-600 to-red-400"></div>
					</div>
				</div>
			{/each}
		</div>

		<div class="flex justify-center mt-16">
			<div class="flex items-center gap-2 text-slate-500">
				<span class="text-sm">Scroll to explore</span>
				<div class="w-px h-4 bg-slate-700"></div>
				<span class="text-sm font-medium text-red-500">4 steps to success</span>
			</div>
		</div>
	</div>
</section>