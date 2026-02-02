📌 Pastebin-Lite

Pastebin-Lite is a full-stack web application that allows users to create and share text pastes with expiry time (TTL) and maximum view limits, similar to Pastebin but in a simplified form.
Deployed URL (Vercel):
👉 https://pastebin-lite-puce-five.vercel.app
Source Code:
👉 https://github.com/sreyachaithu/pastebin-lite
🛠️ Tech Stack

Frontend: Next.js (App Router), React, TypeScript

Backend: Next.js API Routes (Route Handlers)

Database: PostgreSQL (Neon)

ORM: Prisma

Styling: Tailwind CSS

Deployment: Vercel

🔄 Application Flow

User enters text, TTL, and max views

Frontend sends a POST request to /api/pastes

Paste is stored in the database using Prisma

A unique URL is generated

Users can access the paste via the URL

Paste automatically expires after TTL or max views

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
