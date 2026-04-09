<script lang="ts">
	import { Send, CheckCircle2, ArrowLeft } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	let formData = $state({
		name: '',
		contact: '',
		product: '',
		quantity: ''
	});

	let status = $state<'idle' | 'submitting' | 'success'>('idle');
	let error = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		status = 'submitting';
		error = '';

		try {
			const response = await fetch('/api/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				await goto('/success');
			} else {
				error = 'Something went wrong. Please try again.';
				status = 'idle';
			}
		} catch (err) {
			error = 'Network error. Please try again.';
			status = 'idle';
		}
	}
</script>

<div class="min-h-screen bg-slate-50 py-12 px-6">
	<div class="max-w-xl mx-auto">
		<a href="/" class="inline-flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors mb-8">
			<ArrowLeft size={20} />
			Back to home
		</a>

		<div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100">
			<h1 class="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 mb-2">
				Request a <span class="text-red-600">Calculation</span>
			</h1>
			<p class="text-slate-500 mb-8">
				Get a detailed breakdown within 24 hours.
			</p>

			<form onsubmit={handleSubmit} class="space-y-4 md:space-y-6">
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

				{#if error}
					<p class="text-red-500 text-sm text-center">{error}</p>
				{/if}

				<button 
					type="submit" 
					disabled={status === 'submitting'} 
					class="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-red-600 transition-all duration-300 disabled:bg-slate-400 flex items-center justify-center gap-2"
				>
					{status === 'submitting' ? 'Processing...' : 'Request Calculation'}
				</button>
			</form>
		</div>
	</div>
</div>