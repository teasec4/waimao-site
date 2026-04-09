<script lang="ts">
	import { CheckCircle2 } from 'lucide-svelte';
</script>

<div class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
	<div class="max-w-md w-full text-center">
		<div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
			<CheckCircle2 size={40} />
		</div>
		
		<h1 class="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 mb-4">
			Request <span class="text-red-600">Sent!</span>
		</h1>
		
		<p class="text-slate-500 mb-10">
			Our team will contact you within 24 hours.
		</p>
		
		<a 
			href="/" 
			class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-red-600 transition-all"
		>
			
			OK
		</a>
	</div>
</div>