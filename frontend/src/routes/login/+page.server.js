import { redirect } from '@sveltejs/kit';
import { setJWT } from '../../lib/server/jwt/jwt';
import { apiConfig } from '$lib/server/config';

export const actions = {
    default: async ({ request, fetch, cookies }) => {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');

        const loginUrl = `${apiConfig.protocol}://${apiConfig.ip}${apiConfig.port ? `:${apiConfig.port}` : ''}/login`;

        const res = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username,password})
        });

        const data = await res.json();
        console.log(data.response);
        
        if (!res.ok) {
            return {error: 'Invalid login credentials'};
        }

        const token = data.response.token;
        setJWT(cookies, token);

        throw redirect(303,'/home');
    }
}
