import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const display = Geist({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-face",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MobLeet",
  description:
    "MobLeet is a phone app for LeetCode-style coding practice. This website explains the app and lets you apply for internal testing on iOS or Android.",
  icons: { icon: "/logo.png" },
};

const themeBoot = `(function(){try{var t=localStorage.getItem("mobleet-theme:v1");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}if(localStorage.getItem("mobleet-banner:v1")==="closed"){document.documentElement.setAttribute("data-banner","closed")}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Script id="theme" strategy="beforeInteractive">
          {themeBoot}
        </Script>
        {children}
      </body>
    </html>
  );
}
