<script lang="ts">
	import { Send, CheckCircle2 } from 'lucide-svelte';

	let formData = $state({
		name: '',
		contact: '',
		product: '',
		quantity: ''
	});

	let status = $state('idle'); // 'idle' | 'submitting' | 'success'

	async function handleSubmit(e: Event) {
		e.preventDefault();
		status = 'submitting';
		
		// Mock API call
		await new Promise(resolve => setTimeout(resolve, 1500));
		
		status = 'success';
	}
</script>

<section class="py-24 w-full bg-slate-50" id="quote">
	<div class="container mx-auto px-6">
		<div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			
			<div class="space-y-8">
				<h2 class="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900">
					Request a <br />
					<span class="text-red-600">Precise Calculation</span>
				</h2>
				<p class="text-slate-500 text-lg leading-relaxed">
					Get a detailed breakdown of sourcing, quality control, and logistics costs within 24 hours.
				</p>
				
				<a 
					href="https://t.me/your_bot" 
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-3 px-6 py-3 bg-[#0088cc] text-white rounded-xl font-medium hover:bg-[#007bbd] transition-all transform hover:scale-105"
				>
					<Send size={20} />
					Contact via Telegram
				</a>
			</div>

			<div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100">
				{#if status === 'idle' || status === 'submitting'}
					<form onsubmit={handleSubmit} class="space-y-6">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div class="space-y-2">
								<label for="name" class="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
								<input 
									id="name"
									bind:value={formData.name} 
									type="text" 
									placeholder="John Doe" 
									class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
									required 
								/>
							</div>
							<div class="space-y-2">
								<label for="contact" class="text-xs font-bold uppercase tracking-widest text-slate-400">Contact (Email/TG)</label>
								<input 
									id="contact"
									bind:value={formData.contact} 
									type="text" 
									placeholder="email@example.com" 
									class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
									required 
								/>
							</div>
						</div>

						<div class="space-y-2">
							<label for="product" class="text-xs font-bold uppercase tracking-widest text-slate-400">Product Description</label>
							<textarea 
								id="product"
								bind:value={formData.product} 
								rows="4" 
								placeholder="Tell us what you're looking for..." 
								class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
								required 
							></textarea>
						</div>

						<div class="space-y-2">
							<label for="quantity" class="text-xs font-bold uppercase tracking-widest text-slate-400">Quantity</label>
							<input 
								id="quantity"
								bind:value={formData.quantity} 
								type="text" 
								placeholder="e.g. 1000 units" 
								class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
								required 
							/>
						</div>

						<button 
							type="submit" 
							disabled={status === 'submitting'} 
							class="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-red-600 transition-all duration-300 disabled:bg-slate-400 flex items-center justify-center gap-2"
						>
							{status === 'submitting' ? 'Processing...' : 'Request Calculation'}
						</button>
					</form>
				{:else}
					<div class="text-center py-12 space-y-4">
						<div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
							<CheckCircle2 size={32} />
						</div>
						<h3 class="text-2xl font-bold text-slate-900">Request Sent!</h3>
						<p class="text-slate-500">Our team will contact you shortly.</p>
						<button 
							onclick={() => status = 'idle'} 
							class="text-red-600 font-medium hover:underline"
						>
							Send another request
						</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
