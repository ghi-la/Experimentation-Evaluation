import clientPromise from '@/app/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const dbName = process.env.MONGODB_DB_NAME;
    const db = client.db(dbName);
    const questions = await db.collection('questions').find({}).toArray();
    return NextResponse.json(questions);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const dbName = process.env.MONGODB_DB_NAME;
    const db = client.db(dbName);
    const body = await req.json();
    const result = await db.collection('questions').insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create question' },
      { status: 500 }
    );
  }
}
