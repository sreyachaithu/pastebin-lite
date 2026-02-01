"use client";

import { useEffect, useState, use } from "react";

export default function PastePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ unwrap params correctly (Next.js 16)
  const { id } = use(params);

  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/pastes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Paste not found or expired");
        return res.json();
      })
      .then((data) => setContent(data.content))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <h2>{error}</h2>;
  if (!content) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Paste</h1>
      <pre
        style={{
          background: "#f4f4f4",
          padding: "15px",
          whiteSpace: "pre-wrap",
        }}
      >
        {content}
      </pre>
    </div>
  );
}
