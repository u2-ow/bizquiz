'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Styles from '@/app/countDown/countDown.module.scss'
import fetchQuiz from '@/lib/fetchQuiz';
import fetchChoice from '@/lib/fetchChoice';
import { quizState } from '@/lib/atoms/quizState';
import { choiceState } from '@/lib/atoms/choiceState';
import { useRecoilState, useRecoilValue } from 'recoil';




export default function Page() {
    const [count,setCount] = useState(3);
    const router = useRouter();
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
    }, []);

    /*ゲームが始まるまでのカウントダウン*/
    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prev) => prev - 1);
        }, 1000);
        if (count === 0) {
          clearInterval(interval);
          setTimeout(() => {
            router.push("/quiz/q1")
          }, 300); 
        }
        return () => clearInterval(interval);
    }, [count,router]);

    
    return (
      <p className={Styles.count} >{count === 0 ? "START" : count }</p>
    )
}



