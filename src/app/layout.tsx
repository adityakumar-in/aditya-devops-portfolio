import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Aditya Kumar — DevOps Engineer",
  description:
    "DevOps Engineer with hands-on experience in AWS, Linux, Docker, Jenkins, Terraform, and CI/CD automation. Building reliable, repeatable infrastructure.",
  keywords: [
    "Aditya Kumar",
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "Docker",
    "Jenkins",
    "Terraform",
    "CI/CD",
    "Linux",
    "Infrastructure as Code",
  ],
  authors: [{ name: "Aditya Kumar", url: "https://github.com/adityakumar-in" }],
  creator: "Aditya Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityakumar.dev",
    title: "Aditya Kumar — DevOps Engineer",
    description:
      "DevOps Engineer specializing in AWS, Linux, Docker, Jenkins, Terraform, and CI/CD automation.",
    siteName: "Aditya Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Kumar — DevOps Engineer",
    description:
      "DevOps Engineer specializing in AWS, Linux, Docker, Jenkins, Terraform, and CI/CD automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#07090e] text-[#f3f4f6] font-sans antialiased selection:bg-emerald-500/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
