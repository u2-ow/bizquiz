"use client";

import '@/app/globals.scss'
import '@/styles/reset.scss'
import { DotGothic16 } from "@next/font/google";
import { RecoilRoot } from "recoil";
import Link from "next/link";
import Quit from '@/components/Quit';
import Head from './head';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{

  return (    
    <html lang="jp">
      <Head/>
      <body>      
        <RecoilRoot>
          <header>
            <Quit/>
          </header>
          <main>
            {children}
          </main>
          <footer></footer>
        </RecoilRoot>
      </body>
    </html>
  )
}
