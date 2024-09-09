import { redirect } from '@sveltejs/kit';
import { getTokenFromCookies } from '../../lib/server/jwt/jwt';

export const load = async ({ request }) => {
    const token = getTokenFromCookies(request);
    console.log("token load:", token);

    if (!token || token === undefined) {
        throw redirect(302, '/login'); // Redirect to login if no token is found
    }

    // Fetch or return additional data for the page if needed
    return {};
};
