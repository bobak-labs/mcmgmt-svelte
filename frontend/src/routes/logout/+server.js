import { redirect } from '@sveltejs/kit';

export const POST = async ({ cookies }) => {
    // Clear the auth token or session cookie
    console.log(cookies);
    cookies.delete('jwt',{ path: '/' }); // assuming you're using cookies for auth

    // Optionally, you can also remove sessions from your database here.

    // Redirect the user back to the login page
    throw redirect(303, '/login');
};
