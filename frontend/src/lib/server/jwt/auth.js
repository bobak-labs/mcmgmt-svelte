// src/stores/auth.js
import { writable } from 'svelte/store';
import jwt from 'jsonwebtoken';

export const isAuthenticated = writable(false);
export const token = writable(null);

export function login(userToken) {
    token.set(userToken);
    isAuthenticated.set(true);
}

export function logout() {
    token.set(null);
    isAuthenticated.set(false);
}

export async function verifyToken(token) {
    console.log("token",token);
    if (!token) {
        console.log("Returning null");
        return null;
    }
    try {
        const SECRET_KEY = process.env.JWT_SECRET;
        if (!SECRET_KEY) throw new Error('SECRET_KEY not set');

        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}
