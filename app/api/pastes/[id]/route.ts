import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const paste = await prisma.paste.findUnique({
    where: { id },
  });

  if (!paste) {
    return NextResponse.json(
      { error: "Paste not found or expired" },
      { status: 404 }
    );
  }

  // ✅ TTL CHECK (only if ttlSeconds exists)
  if (paste.ttlSeconds !== null) {
    const expiresAt =
      new Date(paste.createdAt).getTime() +
      paste.ttlSeconds * 1000;

    if (Date.now() > expiresAt) {
      return NextResponse.json(
        { error: "Paste not found or expired" },
        { status: 404 }
      );
    }
  }

  // ✅ MAX VIEWS CHECK (only if maxViews exists)
  if (paste.maxViews !== null && paste.views >= paste.maxViews) {
    return NextResponse.json(
      { error: "Paste not found or expired" },
      { status: 404 }
    );
  }

  // ✅ increment views AFTER checks
  await prisma.paste.update({
    where: { id },
    data: { views: { increment: 1 } },
  });

  return NextResponse.json({
    id: paste.id,
    content: paste.content,
  });
}

