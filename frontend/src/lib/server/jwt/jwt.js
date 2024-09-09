// /**
//  * Retrieve JWT token from cookies.
//  * @param {Cookies} cookies - SvelteKit's cookies object
//  * @returns {string|null} JWT token if exists, otherwise null.
//  */
export function getTokenFromCookies(request) {
    // console.log(request); // Log the entire request object
    const cookieHeader = request.headers?.get('cookie') || '';
    const cookies = parseCookies(cookieHeader);
    return cookies['jwt']; // Replace 'jwt' with your actual cookie name
}

// /**
//  * Delete JWT token from cookies.
//  * @param {Cookies} cookies - SvelteKit's cookies object
//  */
// export function deleteTokenFromCookies(cookies) {
//     cookies.delete('jwt', { path: '/' });
// }

// Function to parse cookies from a request header
export function parseCookies(cookieHeader) {
    if (typeof cookieHeader !== 'string') {
        throw new TypeError('Expected a string for cookieHeader');
    }
    return cookieHeader.split(';').reduce((cookies, cookie) => {
        const [name, ...rest] = cookie.split('=');
        cookies[name.trim()] = rest.join('=').trim();
        return cookies;
    }, {});
}

// /**
//  * Store JWT token securely in an HTTP-only cookie.
//  * @param {Cookies} cookies - SvelteKit's cookies object
//  * @param {string} token - JWT token to store.
//  */
// export function setTokenInCookies(cookies, token) {
//     cookies.set('jwt', token, {
//         httpOnly: true,
//         // secure: false,
//         sameSite: 'strict',
//         path: '/',
//         maxAge: 60 * 60 * 24 // 1 day
//     });
// }

// export function attachTokenToRequest(token, options = {}) {
//     const headers = options.headers || {};
//     if (token) {
//         headers['Authorization'] = `Bearer ${token}`;
//     }
//     return {
//         ...options,
//         headers
//     };
// }


export function setJWT(cookies, token) {
    cookies.set('jwt', token, {
        httpOnly: true,  // to prevent client-side access
        secure: false,    // ensure it's sent only over HTTPS
        sameSite: 'strict', // strict cookie policy
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 1 week expiration
    });
}
