'use client'

import { useCreatUserData } from "../hooks/useCreatUserData"
import '@/app/globals.scss'
import Link from "next/link";
import Styles from "@/app/app.module.scss"



export default function Home() {
  useCreatUserData();
  return (
    <>
      <div className="mainInner">
        <h1 className={Styles.appName}>
          <span className={Styles.textBlue}>b</span>
          <span className={Styles.textYellow}>i</span>
          <span className={Styles.textRed}>z</span>
          <span className={Styles.textGreen}>q</span>
          <span className={Styles.textYellow}>u</span>
          <span className={Styles.textBlue}>i</span>
          <span className={Styles.textRed}>z</span>
        </h1>
        <p className={Styles.text}>クイズのカテゴリを選択してください。</p>
        <ul className={Styles.modeList}>
          <li className={Styles.modeItem}><Link href='/countDown' className={Styles.modeLink}>SEO</Link></li>
          <li className={Styles.modeItem}><Link href='/countDown' className={Styles.modeLink}>MARKETING</Link></li>
        </ul>
      </div>




    </>
  )
}
