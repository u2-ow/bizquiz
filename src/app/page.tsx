'use client'


import { useCreatUserData } from '@/hooks/useCreatUserData';
import '@/app/globals.scss'
import Link from "next/link";
import Styles from "@/app/app.module.scss"
import { useRecoilState } from 'recoil';

import { useEffect,useRef } from 'react';
import { incorrectState } from '@/lib/atoms/incorrectState';




export default function Home() {

  const appHowtoRef = useRef<HTMLDivElement>(document.createElement('div'))



  useCreatUserData();

  const apperHowto =()=>{
    const appearHowto =appHowtoRef.current;
    appearHowto.style.display = 'block';
  }
  const disApperHowto =()=>{
    const appearHowto =appHowtoRef.current;
      appearHowto.style.display = 'none';
  }



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
        <button className={Styles.appShowHowto} onClick={apperHowto}>
          あそび方をみる
        </button>
        <div className={Styles.appHowto} ref={appHowtoRef}>
          <p className={Styles.appHowtoTitle}><b>遊び方</b></p>
          <p className={Styles.appHowtoText}>SEOやマーケティングで使われる用語の説明文が問題として出題されますのでそれに対応する単語を4択から選択して答えるゲームです。</p>
          <button className={Styles.appCloseHowto} onClick={disApperHowto}>閉じる</button>
        </div>
      </div>


    

    </>
  )
}
