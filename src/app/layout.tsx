import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Aditya Kumar — DevOps Engineer",
  description:
    "DevOps Engineer with hands-on experience in AWS, Linux, Docker, Jenkins, Terraform, and CI/CD automation. Skilled in cloud infrastructure, containerization, and Infrastructure as Code.",
  keywords: [
    "Aditya Kumar",
    "DevOps Engineer",
    "AWS",
    "Docker",
    "Jenkins",
    "Terraform",
    "CI/CD",
    "Linux",
    "Infrastructure as Code",
    "Kubernetes",
    "Cloud Engineer",
  ],
  authors: [{ name: "Aditya Kumar", url: "https://github.com/adityakumar-in" }],
  creator: "Aditya Kumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://github.com/adityakumar-in",
    title: "Aditya Kumar — DevOps Engineer",
    description:
      "DevOps Engineer with hands-on experience in AWS, Linux, Docker, Jenkins, Terraform, and CI/CD automation.",
    siteName: "Aditya Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Kumar — DevOps Engineer",
    description:
      "DevOps Engineer with hands-on experience in AWS, Linux, Docker, Jenkins, Terraform, and CI/CD automation.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* High performance font loading matching design reference */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var stored = localStorage.getItem('theme');
                if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] dark:bg-[#090D16] text-[#1C1E21] dark:text-[#F8FAFC] antialiased transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
