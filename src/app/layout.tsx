import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Provider } from "@radix-ui/react-toast";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', });

export const metadata: Metadata = {
  title: "초이스 아레나",
  description: "초이스 아레나",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <Provider>{children}</Provider>
        <Toaster />
        </body>
    </html>
  );
}
