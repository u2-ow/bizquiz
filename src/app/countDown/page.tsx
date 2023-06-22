'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Styles from '@/app/countDown/countDown.module.scss'

type Props = {}

export default function Page({}: Props) {
    const [count,setCount] = useState(3);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prev) => prev - 1);
        }, 1000);
        if (count === 0) {
          clearInterval(interval);
          setTimeout(() => {
            router.push("/quiz/seo/q1")
          }, 500); 
       
        }
        return () => clearInterval(interval);
      }, [count,router]);

    return (
      <p className={Styles.count} >{count === 0 ? "START" : count }</p>
    )
}