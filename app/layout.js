import "./globals.css";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
    title: "YouTube-Aigo",
    description: "AI-Powered Audio Creation Studio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased bg-gray-950 text-white min-h-screen">
                <div className="flex flex-col min-h-screen">
                    {/* We place Breadcrumbs on all pages. The component itself decides if it renders on Home (/) */}
                    <div className="pt-4">
                        <Breadcrumbs />
                    </div>
                    {children}
                </div>
            </body>
        </html>
    );
}
