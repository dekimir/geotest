import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(
    new URL(
      `/../?geo=${encodeURIComponent(JSON.stringify(request.geo))}&ip=${encodeURIComponent(JSON.stringify(request.ip))}`,
      request.url))
}

export const config = {
  matcher: '/ip',
}
