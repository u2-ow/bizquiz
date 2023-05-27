'use client'
import {useEffect, useState } from "react";



export default function Page() {
    const [resultScore,setResultScore] = useState<string | null>();
    useEffect(()=>{
        const score = sessionStorage.getItem('defaultScore');
        setResultScore(score);
    },[])

  return (
    
    <div>
        <h1>結果</h1>
        <p>{resultScore }</p>
    </div>
  )
}