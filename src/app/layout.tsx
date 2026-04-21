import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/provider";
import { Toaster } from "react-hot-toast";
import AuthInitializer from "@/components/auth/AuthInitializer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wedding - Nền tảng dịch vụ cưới hàng đầu Việt Nam",
  description:
    "Tìm kiếm và kết nối với hàng trăm nhà cung cấp dịch vụ cưới uy tín. Chụp ảnh, nhà hàng, trang trí, thiệp cưới - tất cả trong một nền tảng.",
  keywords: "dịch vụ cưới, wedding, chụp ảnh cưới, nhà hàng cưới, thiệp cưới, trang trí cưới",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
          <AuthInitializer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#fff',
                color: '#333',
                borderRadius: '12px',
                border: '1px solid #f3f4f6',
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                fontSize: '14px',
              },
              success: {
                iconTheme: {
                  primary: '#f59e0b',
                  secondary: '#fff',
                },
              },
            }}
          />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
