import Openheader from "@/lib/components/layout/Openheader";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "../globals.css";

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
          <div className="min-h-full">
            <Openheader />
            <main>{children}</main>
          </div>

          <Toaster />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
