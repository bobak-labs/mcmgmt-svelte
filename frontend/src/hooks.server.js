// src/hooks.server.js
import { redirect } from '@sveltejs/kit';
import { getTokenFromCookies } from './lib/server/jwt/jwt';
import { verifyToken } from './lib/server/jwt/auth';

export const handle = async ({ event, resolve }) => {
    const { request, cookies, route } = event;
    
    // Public routes that don't need authentication
    const publicRoutes = ['/login', '/register', '/public'];

    // Check if the current route is public
    if (!publicRoutes.includes(route.id)) {
        const token = getTokenFromCookies(request);
        
        if (!token || token === undefined) {
            // If no token is found, redirect to the login page
            throw redirect(302, '/login');
        }

        // Optionally, you could validate the token here if you want
        // e.g., check if it's expired or has the correct claims
        await verifyToken(token);
    }

    // Proceed with the request
    return resolve(event);
};


