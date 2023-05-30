'use client'
import Link from "next/link";
import { creatUserData } from "../../utils/creatUserData"



export default function Home() {
 creatUserData();
  return (
    <>
    <header>
    <Link href="/" className="quit">やめる</Link>
    </header>
    <main >
    <h1>
      <span className="text-blue">b</span>
      <span className="text-yellow">i</span>
      <span className="text-red">z</span>
      <span className="text-green">q</span>
      <span className="text-yellow">u</span>
      <span className="text-blue">i</span>
      <span className="text-red">z</span>
    </h1>
    <p>クイズのカテゴリを選択してください。</p>
        <ul className="mode-list">
          <li className="mode-list__item"><Link href='/countDown'>SEO</Link></li>
          <li className="mode-list__item">Marketing</li>
        </ul>
    </main>

    </>
  )
}
