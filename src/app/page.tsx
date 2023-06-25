'use client'


import { useCreatUserData } from '@/hooks/useCreatUserData';
import '@/app/globals.scss'
import Link from "next/link";
import Styles from "@/app/app.module.scss"
import { useRecoilState } from 'recoil';
import { askedQuizState } from '@/lib/atoms/askedQuizState';
import { useEffect } from 'react';




export default function Home() {
  const [askedQuestions,setAskedQuestions] = useRecoilState(askedQuizState);
  useCreatUserData();
  useEffect(()=>{
    setAskedQuestions([]);
  },[])
  useEffect(() => {
}, [askedQuestions]);
  return (
    <>
      <div className={Styles.appMainInner}>
        <h1 className={Styles.appName}>
          bizquiz
        </h1>
        <p className={Styles.appText}>SEOやマーケティングで使用される用語の4択のクイズゲーム！</p>
        <ul className={Styles.appModeList}>
          <li className={Styles.appModeItem}><Link href='/countDown' className={Styles.appModeLink}>あそぶ</Link></li>
        </ul>
      </div>


    

    </>
  )
}
