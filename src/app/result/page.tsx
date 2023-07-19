'use client'
import {useEffect, useState } from "react";
import Styles from "@/app/result/result.module.scss";
import { useResultAnimation } from "@/hooks/useResultAnimation";
import { incorrectState } from "@/lib/atoms/incorrectState";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";



export default function Page() {
    const [resultScore,setResultScore] = useState<number | null>();
    const {rewardRight,rewardLeft} = useResultAnimation();
    const [incorrectAnswer,setIncorrectAnswer] = useRecoilState(incorrectState)

    useEffect(()=>{

        const score = Number(sessionStorage.getItem('defaultScore'));
        setResultScore(score);
        if(score >= 8){
          rewardRight();
          rewardLeft();
        }

        console.log('あなたが間違えた問題')
        console.log(incorrectAnswer)
        console.log('あなたが間違えた問題')
    },[])
  return (
    
    <div className={Styles.result}>
        <p className={Styles.resultText}>結果</p>
        <p className={Styles.resultScore}>{resultScore}/10</p>
        <div id="rewardRight" className={Styles.resultRewardRight} ></div>
        <div id="rewardLeft" className={Styles.resultRewardLeft} ></div>
        <button>間違えた問題を確認する</button>
        <div className={Styles.resultQuestions}> 
          <ul className={Styles.resultQuestionsList}>
            {incorrectAnswer.map(item =>(
              <li className={Styles.resultQuestionsListItem} key={item.id}> <FontAwesomeIcon icon={faXmark} className={Styles.xMark} />{item}</li>
            ))}
          </ul>
          <button>閉じる</button>
        </div>
    </div>
  )
}