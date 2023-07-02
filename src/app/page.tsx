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
          <span className={Styles.pinkText}>b</span>
          <span className={Styles.yellowText}>i</span>
          <span className={Styles.blueText}>z</span>
          <span className={Styles.pinkText}>q</span>
          <span className={Styles.yellowText}>u</span>
          <span className={Styles.blueText}>i</span>
          <span className={Styles.pinkText}>z</span>
        </h1>
        <p className={Styles.appText}>SEOやマーケティングで使用される用語の<span className="lf">4択のクイズゲーム！</span></p>
        <Link href='/countDown' className={Styles.appStartButton}><span className={Styles.appStartButtonText}>はじめる</span></Link>
      </div>


    

    </>
  )
}
