import { useEffect, useState } from "react";
export const useQuizCountDown = ()=>{
    const [quizTimer,setQuizTimer] = useState(5);
    useEffect(()=>{
        if (quizTimer === 0) {
            console.log('HEHEHEHEH');
            return;
          }
      
          const countDown = setTimeout(() => {
            setQuizTimer((prev) => prev - 1);
          }, 1000);
      
          return () => clearTimeout(countDown);
        }, [quizTimer]);
      
        return quizTimer;   
}