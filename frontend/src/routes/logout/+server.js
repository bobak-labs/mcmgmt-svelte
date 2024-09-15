import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';


export const POST = async ({ cookies }) => {
    // Clear the auth token or session cookie
    cookies.delete('jwt',{ path: '/'}); // assuming you're using cookies for auth

    // Optionally, you can also remove sessions from your database here.

    // Redirect the user back to the login page
    return redirect(303, '/login');
};
