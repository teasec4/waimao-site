<script lang="ts">
	import { Share2, Globe, Mail } from 'lucide-svelte';
</script>

<footer class="py-12 w-full bg-white border-t border-slate-100">
	<div class="container mx-auto px-6">
		<div class="flex flex-col md:flex-row justify-between items-center gap-8">
			<div class="text-xl font-bold tracking-tighter text-slate-900">
				WAIMAO<span class="text-red-600">.</span>
			</div>
			
			<div class="flex gap-6 items-center text-slate-400">
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 transition-colors"><Globe size={20} /></a>
				<a href="https://github.com" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 transition-colors"><Share2 size={20} /></a>
				<a href="mailto:info@waimao.com" class="hover:text-slate-900 transition-colors"><Mail size={20} /></a>
			</div>

			<div class="text-sm text-slate-400 font-light">
				© {new Date().getFullYear()} Waimao Logistics. All rights reserved.
			</div>
		</div>
	</div>
</footer>
