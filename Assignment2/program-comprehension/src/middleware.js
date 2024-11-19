// src/middleware.js
import { parse } from 'cookie'; // Correct import for the cookie library
import { NextResponse } from 'next/server';

export function middleware(req) {
  try {
    // Parse cookies from the request
    const cookies = parse(req.headers.get('cookie') || '');

    // Get the username cookie
    const username = cookies.username;

    // Define the protected paths
    const protectedPaths = ['/statistics', '/survey'];

    // Check if the user is trying to access a protected page and if they are authenticated
    if (protectedPaths.includes(req.nextUrl.pathname) && !username) {
      // If not authenticated, redirect to the homepage
      return NextResponse.redirect(new URL('/', req.url));
    }

    // Allow the request to continue if the user is authenticated or not accessing a protected route
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.error();
  }
}