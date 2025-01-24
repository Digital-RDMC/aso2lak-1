// app/api/emps/route.ts
 


import { NextRequest, NextResponse } from "next/server";
import {getTitle } from '@/lib/db/landing'
// import { title } from "process";

// Handle GET requests
export async function GET(request: NextRequest, { params }: { params: { title: string } }) {
    
  try {
    const value = await getTitle(params.title);
      return NextResponse.json({ record: value});

 
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve data from the database" },
      { status: 500 }
    );
  }
}
