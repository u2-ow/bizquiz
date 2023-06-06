'use client'
import {useEffect, useState } from "react";
import Styles from "@/app/result/result.module.scss";
import { useResultAnimation } from "@/hooks/useResultAnimation";



export default function Page() {
    const [resultScore,setResultScore] = useState<string | null>();
    const {rewardRight,rewardLeft} = useResultAnimation();
    useEffect(()=>{
        const score = sessionStorage.getItem('defaultScore');
        setResultScore(score);
        console.log(score)
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
    </div>
  )
}