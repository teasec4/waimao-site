<script lang="ts">
	import { scrollY } from '$lib/stores/scroll';
	import { Plane, Truck, Train } from 'lucide-svelte';
	import { browser } from '$app/environment';

	const SECTION_HEIGHT = 3500;
	const START_OFFSET = 400;

	let windowWidth = $state(1920);
	let windowHeight = $state(1080);

	$effect(() => {
		if (browser) {
			windowWidth = window.innerWidth;
			windowHeight = window.innerHeight;
			
			const handleResize = () => {
				windowWidth = window.innerWidth;
				windowHeight = window.innerHeight;
			};
			
			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
	});

	let progress = $derived.by(() => {
		const scrollInSection = $scrollY - START_OFFSET;
		return Math.max(0, Math.min(1, scrollInSection / (SECTION_HEIGHT - START_OFFSET)));
	});

	let airplaneTransform = $derived.by(() => {
		const p = progress;
		const startX = -200;
		const endX = windowWidth + 200;
		const startY = windowHeight + 100;
		const endY = -windowHeight * 0.6;
		const x = startX + (endX - startX) * p;
		const y = startY + (endY - startY) * p;
		const rotate = -30 + p * 15;
		return `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`;
	});

	let truckTransform = $derived.by(() => {
		const p = Math.max(0, Math.min(1, (progress - 0.1) / 0.6));
		const startX = -150;
		const endX = windowWidth + 150;
		return `translate3d(${startX + (endX - startX) * p}px, 0, 0)`;
	});

	let trainTransform = $derived.by(() => {
		const p = Math.max(0, Math.min(1, (progress - 0.2) / 0.5));
		const startX = windowWidth + 150;
		const endX = -200;
		return `translate3d(${startX + (endX - startX) * p}px, 0, 0)`;
	});

	let text1Transform = $derived.by(() => {
		const p = Math.max(0, Math.min(1, (progress - 0.05) / 0.7));
		return `translate3d(${-20 + p * 40}px, 0, 0)`;
	});

	let text2Transform = $derived.by(() => {
		const p = Math.max(0, Math.min(1, (progress - 0.15) / 0.6));
		return `translate3d(${30 - p * 60}px, 0, 0)`;
	});

	let airplaneSize = $derived(Math.min(400, windowWidth * 0.4));

	let glowTransform = $derived.by(() => {
		return `translate3d(${(-200 + progress * (windowWidth + 400))}px, ${(-100 + progress * (windowHeight + 200))}px, 0)`;
	});
</script>

<section class="relative h-[{SECTION_HEIGHT}px] w-full bg-slate-900 text-white overflow-hidden" id="logistics">
	<div class="sticky top-0 h-screen w-full overflow-hidden">
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="relative w-full h-full">
				<div class="absolute inset-0 flex items-center justify-center overflow-hidden will-change-transform" style="transform: {text1Transform};">
					<span class="text-[20vw] font-black tracking-tighter text-white/[0.03] select-none pointer-events-none whitespace-nowrap">
						GLOBAL REACH
					</span>
				</div>
				<div class="absolute inset-0 flex items-center justify-center overflow-hidden will-change-transform" style="transform: {text2Transform};">
					<span class="text-[15vw] font-black tracking-tighter text-red-600/[0.04] select-none pointer-events-none whitespace-nowrap">
						EPIC LOGISTICS
					</span>
				</div>

				<div 
					class="absolute top-1/2 -translate-y-1/2 will-change-transform"
					style="transform: {trainTransform};"
				>
					<div class="flex items-center gap-3">
						<Train size={56} class="text-red-500" />
						<div class="flex flex-col">
							<span class="text-xs font-bold uppercase tracking-tighter text-red-400">Rail Freight</span>
							<span class="text-xs text-slate-500">Heavy cargo, stable routes</span>
						</div>
					</div>
				</div>

				<div 
					class="absolute bottom-[25%] will-change-transform"
					style="transform: {truckTransform};"
				>
					<div class="flex items-center gap-3">
						<div class="flex flex-col items-end">
							<span class="text-xs font-bold uppercase tracking-tighter text-red-400">Road Transport</span>
							<span class="text-xs text-slate-500">Last mile delivery</span>
						</div>
						<Truck size={48} class="text-red-600" />
					</div>
				</div>

				<div 
					class="absolute will-change-transform"
					style="transform: {airplaneTransform};"
				>
					<div class="relative">
						<div class="flex items-center gap-4">
							<Plane size={airplaneSize} class="text-red-500 drop-shadow-2xl" />
						</div>
						<div class="absolute top-8 left-24 flex flex-col">
							<span class="text-sm font-bold uppercase tracking-tighter text-red-300">Air Freight</span>
							<span class="text-xs text-slate-400">Express delivery worldwide</span>
						</div>
					</div>
				</div>

				<div 
					class="absolute w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] will-change-transform pointer-events-none"
					style="transform: {glowTransform};"
				></div>
			</div>
</section>