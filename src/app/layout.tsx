import '@/app/globals.scss'
import '@/styles/reset.scss'
import { DotGothic16 } from "@next/font/google";
import Link from "next/link";

const DotGothic16_normal = DotGothic16({
  weight: "400",
  subsets: ["cyrillic"],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={DotGothic16_normal.className}>
    <header>
      <Link href="/" className="quit">やめる</Link>
    </header>
      {children}
      </body>
    </html>
  )
}
