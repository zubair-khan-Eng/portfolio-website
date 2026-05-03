import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zubair Khan | Full Stack Software Engineer",
  description:
    "Personal portfolio of Zubair Khan, Full Stack Software Engineer. Explore experience, projects, and professional resume.",
  openGraph: {
    title: "Zubair Khan | Full Stack Software Engineer",
    description: "Portfolio website with projects, skills, experience, and resume.",
    url: siteUrl,
    siteName: "Zubair Khan Portfolio",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
