import { NextResponse } from "next/server";

export const runtime = "edge"

export async function GET() {
    return Response.json({ status: "ok" })
}