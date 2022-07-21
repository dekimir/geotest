import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL(`/../?geo=${JSON.stringify(request.geo)}&ip=${JSON.stringify(request.ip)}`, request.url))
}

export const config = {
  matcher: '/ip',
}
