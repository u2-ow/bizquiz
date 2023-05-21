'use client'
import Link from "next/link";
import { creatUserData } from "../../utils/creatUserData"





export default function Home() {
 creatUserData();
  return (
    <>
      <div>
        <h1>bizquiz</h1>
        <ul>
          <li>Marketing</li>
          <li><Link href='/countDown'>SEO</Link></li>
          <li>Programming</li>
        </ul>
      </div>
    </>
  )
}
