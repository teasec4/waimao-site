<script lang="ts">
	import { FileText, Search, ShieldCheck, Rocket } from 'lucide-svelte';

	const steps = [
		{ title: "Request", desc: "Submit your requirements and target pricing.", icon: FileText },
		{ title: "Sourcing", desc: "We vet manufacturers and negotiate.", icon: Search },
		{ title: "Quality Check", desc: "Multi-stage inspection before shipment.", icon: ShieldCheck },
		{ title: "Shipping", desc: "Optimized global logistics.", icon: Rocket }
	];
</script>

<section class="relative py-20 md:py-32 w-full bg-slate-900 text-white overflow-hidden" id="process">
	<div class="absolute inset-0">
		<div class="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]"></div>
		<div class="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]"></div>
	</div>

	<div class="container mx-auto px-6 relative z-10">
		<div class="text-center mb-16 md:mb-24">
			<span class="text-red-500 text-sm font-bold uppercase tracking-[0.3em] mb-4 block">Methodology</span>
			<h2 class="text-4xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-6">
				Our <span class="text-red-500">Architecture</span>
			</h2>
			<p class="text-slate-400 text-base md:text-lg max-w-xl mx-auto hidden md:block">
				A systematic approach to sourcing.
			</p>
		</div>

		<!-- Desktop: Cards Grid -->
		<div class="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
			{#each steps as step, i}
				{@const isEven = i % 2 === 0}
				<div 
					class="group relative flex flex-col p-8 rounded-3xl transition-all duration-500 hover:translate-y-[-8px]"
					style="background: linear-gradient({isEven ? '135deg' : '225deg'}, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%); border: 1px solid rgba(255,255,255,0.05);"
				>
					<div class="flex items-center justify-between mb-8">
						<span class="text-6xl font-black text-white/5 tracking-tighter">0{i + 1}</span>
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

		<!-- Mobile: Vertical Timeline with Dots -->
		<div class="md:hidden max-w-xs mx-auto">
			<div class="relative flex flex-col gap-0">
				
				{#each steps as step, i}
					<div class="relative flex items-start gap-6 {i < steps.length - 1 ? 'pb-10' : ''}">
						<!-- Line segment above dot (except first) -->
						{#if i > 0}
							<div class="absolute left-4 top-0 w-px h-6 -mt-6 bg-gradient-to-b from-transparent to-red-600"></div>
						{/if}
						
						<!-- Dot -->
						<div class="relative z-10 w-8 h-8 rounded-full bg-slate-900 border-2 border-red-500 flex items-center justify-center flex-shrink-0">
							<div class="w-2 h-2 rounded-full bg-red-500"></div>
						</div>
						
						<!-- Line segment below dot (except last) -->
						{#if i < steps.length - 1}
							<div class="absolute left-4 top-10 w-px h-[calc(100%-2.5rem)] bg-gradient-to-b from-red-600 to-transparent"></div>
						{/if}
						
						<!-- Content -->
						<div class="flex-1 pt-1">
							<div class="flex items-center gap-3 mb-2">
								<svelte:component this={step.icon} size={18} class="text-red-500" />
								<h3 class="text-lg font-bold">{step.title}</h3>
							</div>
							<p class="text-slate-400 text-sm">{step.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="hidden md:flex justify-center mt-16">
			<div class="flex items-center gap-2 text-slate-500">
				<span class="text-sm">4 steps to success</span>
			</div>
		</div>
	</div>
</section>