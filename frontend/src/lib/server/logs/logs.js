import { getTokenFromCookies } from "../jwt/jwt";

export async function getLogs(headersList, protocol = 'http', ip = 'localhost', port = '7777', endpoint = 'logs') {
    try {
        const response = await fetch(`${protocol}://${ip}:${port}/${endpoint}`, {
            headers: headersList
        });

        // Check if the response is JSON
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            
            if (response.ok) {
                // Check if logs are present
                if (data.response && data.response.logs === "error reading logs") {
                    console.warn("No logs available");
                    return { logs: null, message: "No logs available" };
                }
                return data;
            } else {
                console.error('Failed to fetch logs:', data.message || response.statusText);
                return { logs: null, message: data.message || "Failed to fetch logs" };
            }
        } else {
            const text = await response.text();
            console.error('Unexpected response format:', text);
            return { logs: null, message: "Unexpected response format" };
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return { logs: null, message: `Fetch error: ${error.message}` };
    }
}
