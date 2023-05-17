import { useEffect } from "react";

export const useUser =()=>{
    useEffect(()=>{
        sessionStorage.setItem('defaulScore','10');
        const userScore = sessionStorage.getItem('defaulScore')
        console.log(userScore)

    },[])
 
}