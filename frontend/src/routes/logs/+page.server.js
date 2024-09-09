// src/routes/logs/+page.server.js
import { error } from '@sveltejs/kit';
import { getLogs } from '$lib/server/logs/logs.js';
import { getTokenFromCookies } from '$lib/server/jwt/jwt.js'; // Adjust the import path as needed

export async function load({ request }) {
    try {
        // Extract cookies from the request
        const cookies = request.headers.get('cookie') || '';
        const token = await getTokenFromCookies(cookies);

        // Prepare headers with the token
        const headersList = {
            "Authorization": `Bearer ${token}`
        };
        console.log(headersList);

        // Fetch logs with headers
        const post = await getLogs(headersList);
        return { post };
    } catch (e) {
        console.error("Failed to fetch logs:", e);
        throw error(500, "Failed to fetch logs");
    }
}
