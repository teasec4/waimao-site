'use server';

import type { Actions } from './$types';

export const actions: Actions = {
	submit: async ({ request }) => {
		const data = await request.formData();
		
		const name = data.get('name') as string;
		const contact = data.get('contact') as string;
		const product = data.get('product') as string;
		const quantity = data.get('quantity') as string;

		console.log('Quote request:', { name, contact, product, quantity });

		return { success: true };
	}
};