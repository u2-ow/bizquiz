'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Styles from '@/app/countDown/countDown.module.scss'





export default function Page() {
    const [count,setCount] = useState(3);
    const router = useRouter();


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
      <>
      <main className={Styles.countMain}>
        <p className={Styles.count} >{count === 0 ? "START" : count }</p>
      </main>

      </>
    )
}



