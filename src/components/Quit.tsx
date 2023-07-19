import { incorrectState } from '@/lib/atoms/incorrectState'
import Link from 'next/link'
import React from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { usePathname,useRouter } from 'next/navigation';

type Props = {}

export default function Quit({}: Props) {
/* 間違えた問題を記録するためのステート*/
   const [incorrectAnswer,setIncorrectAnswer] = useRecoilState(incorrectState)
   const resetIncorrectAnswer = ()=>{
    setIncorrectAnswer([])
    console.log(incorrectAnswer)
   }
   const pathname = usePathname();
  return (
    <Link href="/" className="quit" onClick={resetIncorrectAnswer}>{pathname === '/' ? '' : '戻る'}</Link>
  )
}