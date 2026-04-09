<script lang="ts">
	import { scrollY } from '$lib/stores/scroll';
	import { Plane, Truck, Train } from 'lucide-svelte';
	import { onMount } from 'svelte';

	const SECTION_HEIGHT = 1800;

	let windowWidth = $state(1920);
	let windowHeight = $state(1080);
	let sectionTop = $state(0);

	onMount(() => {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		
		const section = document.getElementById('logistics');
		if (section) {
			sectionTop = section.offsetTop;
		}
		
		const handleResize = () => {
			windowWidth = window.innerWidth;
			if (section) {
				sectionTop = section.offsetTop;
			}
		};
		
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	let progress = $derived.by(() => {
		const scrollInSection = $scrollY - sectionTop + windowHeight;
		return Math.max(0, Math.min(1, scrollInSection / SECTION_HEIGHT));
	});

	let airplaneTransform = $derived.by(() => {
		const p = progress;
		const startX = -300;
		const endX = windowWidth + 400;
		const startY = windowHeight * 0.8;
		const endY = -windowHeight * 0.3;
		const x = startX + (endX - startX) * p;
		const y = startY + (endY - startY) * p;
		const rotate = -20 + p * 15;
		return `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`;
	});

	let truckTransform = $derived.by(() => {
		const p = Math.max(0, Math.min(1, (progress - 0.2) / 0.7));
		const startX = -200;
		const endX = windowWidth + 200;
		return `translate3d(${startX + (endX - startX) * p}px, 0, 0)`;
	});

	let trainTransform = $derived.by(() => {
		const p = Math.max(0, Math.min(1, progress / 0.65));
		const startX = windowWidth + 200;
		const endX = -300;
		return `translate3d(${startX + (endX - startX) * p}px, 0, 0)`;
	});

	let text1Transform = $derived.by(() => {
		const p = Math.max(0, Math.min(1, progress / 0.8));
		return `translate3d(${-30 + p * 60}px, 0, 0)`;
	});

	let text2Transform = $derived.by(() => {
		const p = Math.max(0, Math.min(1, (progress - 0.1) / 0.7));
		return `translate3d(${40 - p * 80}px, 0, 0)`;
	});

	let isMobile = $derived(windowWidth < 768);
	let airplaneSize = $derived(isMobile ? windowWidth * 0.6 : Math.min(500, windowWidth * 0.5));
	let trainSize = $derived(isMobile ? 48 : 80);
	let truckSize = $derived(isMobile ? 44 : 72);

	let glowTransform = $derived.by(() => {
		const x = -300 + progress * (windowWidth + 600);
		const y = windowHeight * 0.5 + progress * (-windowHeight);
		return `translate3d(${x}px, ${y}px, 0)`;
	});
</script>

<section class="relative h-[{SECTION_HEIGHT}px] w-full bg-slate-900 text-white overflow-hidden" id="logistics">
	<div class="sticky top-0 h-screen w-full overflow-hidden">
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="relative w-full h-full">
				<div class="absolute inset-0 flex items-center justify-center overflow-hidden will-change-transform" style="transform: {text1Transform};">
					<span class="text-[25vw] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
						GLOBAL REACH
					</span>
				</div>
				<div class="absolute inset-0 flex items-center justify-center overflow-hidden will-change-transform" style="transform: {text2Transform};">
					<span class="text-[18vw] font-black tracking-tighter text-red-600/[0.03] select-none pointer-events-none whitespace-nowrap">
						EPIC LOGISTICS
					</span>
				</div>

				<div 
					class="absolute top-1/2 -translate-y-1/2 will-change-transform"
					style="transform: {trainTransform};"
				>
					<div class="flex items-center gap-4">
						<Train size={trainSize} class="text-red-500" />
						<div class="flex flex-col">
							<span class="text-xs sm:text-sm font-bold uppercase tracking-tighter text-red-400">Rail Freight</span>
							<span class="hidden md:inline text-xs text-slate-500">Heavy cargo, stable routes</span>
						</div>
					</div>
				</div>

				<div 
					class="absolute bottom-[25%] will-change-transform"
					style="transform: {truckTransform};"
				>
					<div class="flex items-center gap-4">
						<div class="flex flex-col items-end">
							<span class="text-xs sm:text-sm font-bold uppercase tracking-tighter text-red-400">Road Transport</span>
							<span class="hidden md:inline text-xs text-slate-500">Last mile delivery</span>
						</div>
						<Truck size={truckSize} class="text-red-600" />
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
						<div class="absolute top-8 left-20 sm:top-12 sm:left-28 flex flex-col">
							<span class="text-xs sm:text-base font-bold uppercase tracking-tighter text-red-300">Air Freight</span>
							<span class="hidden sm:inline text-xs text-slate-400">Express delivery worldwide</span>
						</div>
					</div>
				</div>

				<div 
					class="absolute w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] will-change-transform pointer-events-none"
					style="transform: {glowTransform};"
				></div>
			</div>
		</div>
	</div>
</section>