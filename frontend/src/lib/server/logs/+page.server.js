export async function getLogs() {
    const headersList = {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjU2NjEwNjgsImlzcyI6InRvbW8ifQ._E1K5LtRCtnrgtXw06x1fqrphYamxl4R1KdyCcbjCao"
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
