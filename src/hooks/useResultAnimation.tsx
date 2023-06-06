"use client"
import { useEffect } from 'react'
import { useReward } from 'react-rewards';

export const useResultAnimation = () =>{
    const { reward:rewardRight } = useReward('rewardRight', 'confetti',
    {
      angle: 45,
    })  

    const { reward:rewardLeft } = useReward('rewardLeft', 'confetti',
    {
      angle: 135,
    })  

    return {rewardRight,rewardLeft} ;
}