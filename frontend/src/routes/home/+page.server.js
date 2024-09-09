import { redirect } from '@sveltejs/kit';
import { getTokenFromCookies } from '$lib/server/jwt/jwt';

export const load = async ({ request }) => {
    const token = getTokenFromCookies(request);
    console.log("token load:", token);


    // Fetch or return additional data for the page if needed
    return {};
};
