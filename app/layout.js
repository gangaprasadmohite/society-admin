import AppLayout from "@/lib/components/layout";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

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
          <AppLayout>
            {children} <Toaster />
          </AppLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
