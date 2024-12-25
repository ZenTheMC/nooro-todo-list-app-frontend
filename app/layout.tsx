import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-bodyDark text-white min-h-screen flex flex-col`}
      >
        <header className="bg-headerDark w-full text-center py-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-4xl font-bold space-x-1">
              <Image
                src="/rocket.svg"
                alt="Rocket icon"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-brandBlue">Todo</span>
              <span className="text-brandPurple">App</span>
            </div>
            <Link href="/create" className="mt-4">
              <button className="mt-4 bg-brandBlue hover:bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Create Task
              </button>
            </Link>
          </div>
        </header>
        <main className="flex-1 w-full max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
