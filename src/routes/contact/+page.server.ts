import { redirect } from '@sveltejs/kit';
import type { Actions } from '../company/$types';

import { MM_WEBHOOK } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name') || '-';
		const email = data.get('email') || '-';
		const company = data.get('company') || '-';
		const phone = data.get('phone') || '-';
		const message = data.get('message') || '-';

		try {
			if (!MM_WEBHOOK) {
				throw new Error('Missing webhook URL');
			}

			const res = await fetch(MM_WEBHOOK, {
				method: 'post',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					text: `**👃 New contact form submission 👃**

**Name:** ${name}
**Email:** ${email}
**Company:** ${company}
**Phone:** ${phone}
**Message:**
\`\`\`
${message}
\`\`\``
				})
			});

			if (!res.ok) {
				throw new Error('Failed to send webhook');
			}

			return { success: true };
		} catch (error) {
			console.error(`webhook submission failed: ${error}`);

			// webhook failed, let's redirect to a mailto link instead

			const params = new URLSearchParams();
			params.append('subject', 'Farad Contact Form Submission');
			params.append(
				'body',
				`${message}

---

Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}`
			);

			redirect(303, 'mailto:farad@fsektionen.se?' + params.toString());
		}
	}
} satisfies Actions;
