// app/api/emps/route.ts
 


import {  NextRequest, NextResponse } from "next/server";
import {getTitle } from '@/lib/db/landing'
// import { title } from "process";

// Handle GET requests
export async function GET() {
    // return NextResponse.json({ record: "value"});
  try {
    const record: {title: string, value: string}[] = await getTitle();
      return NextResponse.json({ value: record});

 
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve data from the database" },
      { status: 500 }
    );
  }
}
