import { NextResponse } from "next/server";
import { dbConnect } from "../lib/dbConnect";
import Contact from "../models/Contact";

export async function POST(request) {
  try {
    await dbConnect();
    const { name, email, phone } = await request.json();
    const contact = await Contact.create({ name, email, phone });
    return NextResponse.json({ success: true, contact });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
export async function GET() {
  try {
    await dbConnect();
   
    const contact = await Contact.find();
    return NextResponse.json({ success: true, contact });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
