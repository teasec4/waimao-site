<script lang="ts">
	import { Send, CheckCircle2 } from 'lucide-svelte';
	import { enhance } from '$app/forms';

	let formData = $state({
		name: '',
		contact: '',
		product: '',
		quantity: ''
	});

	let status = $state<'idle' | 'submitting' | 'success'>('idle');

	function handleSubmit() {
		status = 'submitting';
		return async ({ result, update }: { result: { type: string }, update: () => void }) => {
			if (result.type === 'success') {
				status = 'success';
			} else {
				status = 'idle';
			}
			await update();
		};
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
				<p class="text-slate-500 text-lg leading-relaxed hidden md:block">
					Get a detailed breakdown of sourcing, quality control, and logistics costs within 24 hours.
				</p>
				
				<div class="flex flex-col sm:flex-row gap-4">
					<a 
						href="https://t.me/your_bot" 
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#0088cc] text-white rounded-xl font-medium hover:bg-[#007bbd] transition-all"
					>
						<Send size={20} />
						Contact via Telegram
					</a>
					<a 
						href="/quote"
						class="md:hidden inline-flex items-center justify-center gap-3 px-6 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-medium hover:border-red-500 hover:text-red-600 transition-all"
					>
						Fill the Form
					</a>
				</div>
			</div>

			<!-- Desktop only form -->
			<div class="hidden lg:block bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100">
				{#if status === 'success'}
					<div class="text-center py-12 space-y-4">
						<div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
							<CheckCircle2 size={32} />
						</div>
						<h3 class="text-2xl font-bold text-slate-900">Request Sent!</h3>
						<p class="text-slate-500">Our team will contact you shortly.</p>
					</div>
				{:else}
					<form method="POST" action="?/submit" use:enhance={handleSubmit} class="space-y-6">
						<div class="grid grid-cols-2 gap-6">
							<div class="space-y-2">
								<label for="name" class="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
								<input 
									id="name"
									name="name"
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
									name="contact"
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
								name="product"
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
								name="quantity"
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
				{/if}
			</div>
		</div>
	</div>
</section>