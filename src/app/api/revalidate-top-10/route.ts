import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export function GET() {
  revalidateTag('getTop10Rackets');

  return NextResponse.json({ status: 200 });
}
