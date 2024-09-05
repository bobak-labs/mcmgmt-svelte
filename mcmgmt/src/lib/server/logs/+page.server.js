export async function getLogs() {
    const headersList = {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjU0ODgwMTAsImlzcyI6InRvbW8ifQ.3keU7SsYZhuLSryOC9_ZGXGrE94Ypevz9vLkoTrarZg"
    };

    try {
        const response = await fetch('http://localhost:7777/logs', {
            headers: headersList
        });

        if (response.ok) {
            const data = await response.json(); // Correctly await and assign the response
            console.log(data); // Log the data
            return data; // Return the parsed data directly
        } else {
            console.error('Failed to fetch logs:', response.statusText);
            return null; // Or handle the error appropriately
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return null; // Handle the fetch error
    }
}
