'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type Props = {}

export default function Page({}: Props) {
    const [count,setCount] = useState(3);
    const router = useRouter();

    useEffect(() => {
        const interval = setTimeout(() => {
          setCount((prev) => prev - 1);
        }, 1000);
        if (count === 0) {
          clearInterval(interval);
          console.log('START')
          router.push("/quiz/seo/q1")
        }
        return () => clearInterval(interval);
      }, [count,router]);

  return (
    <div>
        <p>{count}</p>
    </div>
  )
}