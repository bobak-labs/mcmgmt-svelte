import { error } from '@sveltejs/kit';
import { getLogs } from '$lib/server/logs/+page.server.js'

export async function load({ params }) {
    try {
        const post = await getLogs();
        return { post };
    } catch (e) {
        console.error("Failed to fetch logs:", e);
        throw error(500, "Failed to fetch logs");
    }
}