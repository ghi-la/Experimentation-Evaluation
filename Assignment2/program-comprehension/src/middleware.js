import { parse } from 'cookie'; // Correct import for the cookie library
import { NextResponse } from 'next/server';

export function middleware(req) {
  try {
    // Parse cookies from the request
    const cookies = parse(req.headers.get('cookie') || '');

    // Get the user cookie
    const user = cookies.user;

    // Define the protected paths
    // const protectedPaths = ['/statistics', '/survey'];
    const protectedPaths = ['/survey'];

    if (process.env.NODE_ENV !== 'development') {
      if (req.nextUrl.pathname === '/admin') {
        return NextResponse.redirect(
          new URL('https://www.youtube.com/shorts/SXHMnicI6Pg', req.url)
        );
      }
    }

    // Check if the user is trying to access a protected page and if they are not authenticated
    if (protectedPaths.includes(req.nextUrl.pathname) && !user) {
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
