'use client'

import { useEffect } from "react"

export const useCreatUserData = ():void=>{
    useEffect(()=>{
        sessionStorage.setItem('defaultScore','10');
        const userScore = sessionStorage.getItem('defaultScore')
        console.log(userScore)
        
    },[])
}