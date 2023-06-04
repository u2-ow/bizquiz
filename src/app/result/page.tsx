'use client'
import {useEffect, useState } from "react";
import Styles from "@/app/result/result.module.scss";



export default function Page() {
    const [resultScore,setResultScore] = useState<string | null>();
    useEffect(()=>{
        const score = sessionStorage.getItem('defaultScore');
        setResultScore(score);
    },[])

  return (
    
    <div className={Styles.result}>
        <p className={Styles.resultText}>結果</p>
        <p className={Styles.resultScore}>{resultScore}/10</p>
    </div>
  )
}