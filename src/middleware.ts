import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const cookiesStore = cookies()
    const accessToken = cookiesStore.get('accessToken')?.value

    if(accessToken){
        return NextResponse.redirect(new URL('/store', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/login/:path*', 
              '/signup/:path*'
    ]
}