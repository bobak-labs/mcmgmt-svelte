// src/hooks.server.js
import { redirect } from '@sveltejs/kit';
import { getTokenFromCookies } from './lib/server/jwt/jwt';
import { verifyToken } from './lib/server/jwt/auth';

export const handle = async ({ event, resolve }) => {
    const { request, cookies, route } = event;
    
    // Public routes that don't need authentication
    const publicRoutes = ['/login', '/register', '/public','/about','/docs'];
    console.log(request.url);

    const currentRoute = '/'+ request.url.split("/")[3];
    if (currentRoute == '/') {
      return redirect(302,'/home')
    }
    // Check if the current route is public
    if (!publicRoutes.includes(currentRoute)) {
        const token = getTokenFromCookies(request);

        if (!token || token === undefined) {
            // If no token is found, redirect to the login page
            return redirect(302, '/login');
        }

        // Optionally, you could validate the token here if you want
        // e.g., check if it's expired or has the correct claims
        if (!token) {
          return redirect(302, '/login');
        }

        const result = await verifyToken(token);
        if (result === null) {
          return redirect(302, '/login');
        }

    }

    // Proceed with the request
    return resolve(event);
};


