<script lang="ts">
	import './layout.css';
	import { scrollY, updateScroll } from '$lib/stores/scroll';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', updateScroll);
			return () => window.removeEventListener('scroll', updateScroll);
		}
	});
</script>

{@render children()}

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>

