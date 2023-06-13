'use client'

import { useRecoilState } from "recoil";
import { seoQuizState} from "../../lib/atoms/seoQuizState";
import fetchSeoQuestion from "../../lib/fetchSeoQuestion";
import fetchSeoChoice from "../../lib/fetchSeoChoice";
import { useEffect } from "react";
import { useCreatUserData } from '@/hooks/creatUserData';


import '@/app/globals.scss'
import Link from "next/link";
import Styles from "@/app/app.module.scss"



export default function Home() {
  useCreatUserData();
  const [seoQuiz,setSeoQuiz] =useRecoilState(seoQuizState);

  useEffect( ()=>{
    const fetchSeoQizData = async ()=>{
      const questions =  await fetchSeoQuestion();
      console.log(questions)
      setSeoQuiz(questions)
  
      const questionId = questions[0].id;
      console.log(questionId)
      const choices = await fetchSeoChoice(questionId);
      console.log(choices)
    }
    fetchSeoQizData();
  },[])
  const fetchSeoQuiz =  () => {
    console.log('グローバルステート！')
    console.log(seoQuiz)
    console.log('グローバルステート！')
  };
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
