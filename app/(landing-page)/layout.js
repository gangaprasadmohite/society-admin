import AppLayout from "@/lib/components/layout";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "../globals.css";
import Header from "@/lib/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facility Management",
  description: "Facility management appplication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Toaster />
          <div className="min-h-full">
            <Header />

            <main>
              <div className="mx-auto max-w-screen-xl h-screen py-6  border ">
                {children}
              </div>
            </main>
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
