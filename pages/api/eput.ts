import { NextRequest, NextResponse } from 'next/server';
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const hello = async (req: NextRequest) => {
  await open({
    filename: '/tmp/database.db',
    driver: sqlite3.Database
  });
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
};

export default hello;

export const config = {
  runtime: 'experimental-edge',
};
