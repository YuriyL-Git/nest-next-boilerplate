import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  revalidatePath("/");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
