'use client'


import { useCreatUserData } from '@/hooks/useCreatUserData';
import '@/app/globals.scss'
import Link from "next/link";
import Styles from "@/app/app.module.scss"
import { useRecoilState } from 'recoil';

import { useEffect,useRef } from 'react';
import { incorrectState } from '@/lib/atoms/incorrectState';
import { quizState } from '@/lib/atoms/quizState';
import { choiceState } from '@/lib/atoms/choiceState';
import fetchQuiz from '@/lib/fetchQuiz';
import fetchChoice from '@/lib/fetchChoice';




export default function Home() {
  const appHowtoRef = useRef<HTMLDivElement>(null)
  useCreatUserData();
  /*問題用のグローバルステート*/
  const [globalQuiz,setGlobalquiz] = useRecoilState(quizState);
  /*選択肢用のグローバルステート*/
  const [globalFourChoices,setGlobalfourchoices] = useRecoilState(choiceState)
  /*問題と選択肢をグローバルステートに格納*/
  useEffect(() => {
    const fetchData = async () => {
      const questions = await fetchQuiz();
      //問題のidと一致する選択肢を取得できるようにここで問題のidを取得
      const questionIds = questions?.slice(0, 10).map( question => question.id );
      //問題のidを使って選択肢を取得
      if(questionIds){
        const choices = await Promise.all(questionIds.map(questionId => fetchChoice(questionId)));
        console.log(questions)
        setGlobalfourchoices(choices as [][]);
        setGlobalquiz(questions as [][])
      }
    }
    fetchData();
  }, [setGlobalfourchoices, setGlobalquiz]);
  const apperHowto =()=>{
    if(appHowtoRef.current){
      appHowtoRef.current.style.display = 'block';
    }
  }
  const disApperHowto =()=>{
    if(appHowtoRef.current){
      appHowtoRef.current.style.display = 'none';
    }
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
