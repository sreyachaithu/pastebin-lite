"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [maxViews, setMaxViews] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!content.trim()) {
      setError("Paste content is required");
      return;
    }

    setError("");

    const res = await fetch("/api/pastes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        ttlSeconds: ttl ? Number(ttl) : null,
        maxViews: maxViews ? Number(maxViews) : null,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Something went wrong");
      return;
    }

    router.push(`/p/${data.id}`);
  }

  return (
    <main style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>Pastebin Lite</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your paste here..."
          rows={10}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <input
            type="number"
            placeholder="TTL (seconds)"
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Views"
            value={maxViews}
            onChange={(e) => setMaxViews(e.target.value)}
          />
        </div>

        <button type="submit">Create Paste</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </main>
  );
}
