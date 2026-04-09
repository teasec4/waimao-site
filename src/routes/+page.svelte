<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import LogisticsScene from '$lib/components/LogisticsScene.svelte';
	import ProcessTimeline from '$lib/components/ProcessTimeline.svelte';
	import QuoteForm from '$lib/components/QuoteForm.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { scrollY } from '$lib/stores/scroll';
</script>

<div class="min-h-screen bg-slate-50">
	<Navbar scrollY={$scrollY} />
	<Hero />
	<LogisticsScene />
	<ProcessTimeline scrollY={$scrollY} />
	<QuoteForm />
	<Footer />
</div>