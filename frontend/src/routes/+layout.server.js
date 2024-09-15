import { getTokenFromCookies } from '../lib/server/jwt/jwt';
import { verifyToken } from '$lib/server/jwt/auth';
import { redirect } from '@sveltejs/kit';
import { onMount } from 'svelte';


export const load = async ({ request }) => {
    const token = getTokenFromCookies(request);
    
    let navbarType = 'normal';
    const validated = await verifyToken(token);
    console.log("determined token:",token);
    console.log("validated?",validated)
    if (validated) {
        navbarType = 'admin';
    }

    console.log(navbarType);
    return {navbarType};
};
