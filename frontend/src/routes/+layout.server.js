import { getTokenFromCookies } from '../lib/server/jwt/jwt';
import { verifyToken } from '$lib/server/jwt/auth';

export const load = async ({ request }) => {
    const token = getTokenFromCookies(request);

    let navbarType = 'normal';
    const validated = await verifyToken(token);
    if (validated) {
        navbarType = 'admin';
    }

    return {
        navbarType
    };
};
