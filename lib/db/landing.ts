import 'server-only';

// import { genSaltSync, hashSync } from 'bcrypt-ts';
// import { and, asc, desc, eq, gt, gte } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import {
  landing,
  type Landing,
} from './landingSchema';
// import { BlockKind } from '@/components/block';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle

// biome-ignore lint: Forbidden non-null assertion.
const client = postgres(process.env.POSTGRES_URL!);
const db = drizzle(client);

export async function getTitle(): Promise<Array<Landing>> {
  try {
    return await db.select().from(landing);
  } catch (error) {
    console.error('Failed to get user from database');
    throw error;
  }
}
