// import { verifyToken } from '../../lib/server/jwt/auth.js';
// import { getTokenFromCookies } from '../../lib/server/jwt/jwt.js'

// export const actions = {
//     default: async ({ request,cookies }) => {
        
//         const token = getTokenFromCookies(request);
//         const verified = await verifyToken(token);

//         console.log("verified home", verified);
//         console.log("token home: ",token);

//         if (!verified || !token) {
//             console.log("not verified");
//             return new Response(null, {
//                 status: 302,
//                 headers: { Location: '/login' }
//             });
//         }

//         return new Response(null, {
//             status: 200,
//             headers: {Location: "/home"}
//         });
//     }
// }
import { redirect } from '@sveltejs/kit';
import { getTokenFromCookies } from '../../lib/server/jwt/jwt';

export const load = async ({ request }) => {
    const token = getTokenFromCookies(request);
    console.log("token load:", token);

    if (!token || token === undefined) {
        throw redirect(302, '/login'); // Redirect to login if no token is found
    }

    // Fetch or return additional data for the page if needed
    return {};
};
