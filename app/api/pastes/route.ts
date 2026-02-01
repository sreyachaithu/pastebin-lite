import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { content, ttl, maxViews } = await req.json();

  const paste = await prisma.paste.create({
    data: {
      content,
      ttlSeconds: ttl ? Number(ttl) : null,
      maxViews: maxViews ? Number(maxViews) : null,
      views: 0,
    },
  });

  return NextResponse.json(paste);
}
