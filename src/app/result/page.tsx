'use client'
import {useEffect, useState,useRef, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactFragment, ReactPortal } from "react";
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
    const resultRef = useRef<HTMLDivElement>(null)
    const openResultRef = useRef<HTMLButtonElement>(null)
    const closeResultRef =useRef<HTMLButtonElement>(null)
    
    

    const apperResult = ()=>{
      if(resultRef.current && openResultRef.current && closeResultRef.current){
        resultRef.current.style.display = 'block';
        closeResultRef.current.style.display = 'block';
        openResultRef.current.style.display = 'none';
      }
    }
    const disApperResult =()=>{
      if(resultRef.current && openResultRef.current && closeResultRef.current){
        resultRef.current.style.display = 'none';
        closeResultRef.current.style.display = 'none';
        openResultRef.current.style.display = 'block';
      }
    }


    useEffect(()=>{
      const score = Number(sessionStorage.getItem('defaultScore'));
      setResultScore(score);
      if(score >= 8){
        rewardRight();
        rewardLeft();
      }
    },[])
  return (
    <div className={Styles.result}>
        <p className={Styles.resultText}>結果</p>
        <p className={Styles.resultScore}>{resultScore}/10</p>
        <div id="rewardRight" className={Styles.resultRewardRight} ></div>
        <div id="rewardLeft" className={Styles.resultRewardLeft} ></div>
        <button className={Styles.openResult} ref={openResultRef}  onClick={apperResult}>間違えた問題を確認する</button>
        <div className={Styles.resultQuestions} ref={resultRef}> 
          <ul className={Styles.resultQuestionsList}>
            {incorrectAnswer.map((item:any) =>(
              <li className={Styles.resultQuestionsListItem} key={item.id}> <FontAwesomeIcon icon={faXmark} className={Styles.xMark} />{item}</li>
            ))}
          </ul>

          <button className={Styles.closeResult} ref={closeResultRef} onClick={disApperResult}>閉じる</button>
        </div>
    </div>
  )
}