'use client'


import { useEffect, useState } from "react";
import fetchSeoQuestion from "../../../../../utils/fetchSeoQuestion";
import fetchSeoChoice from "../../../../../utils/fetchSeoChoice";
import { useQuizCountDown } from "@/hooks/useQuizCountDown";


type Question = {
  id: number;
  question: string;
};
type Choice = {
  id: number;
  choice_text: string;
  is_correct:boolean;
  question_id:number;
};

export default function Page() {
  const [seoQuestions,setSeoQuestions] = useState<Question[]>([])
  const [seoChoices,setSeoChoices] = useState<Choice[]>([]);
  const quizTimer = useQuizCountDown();

  useEffect(()=>{
  const fetchData = async () => {
    const questions = await fetchSeoQuestion();
    setSeoQuestions(questions as Question[]);
    const questionId = questions[0].id;
    console.log(questionId)
    const choices = await fetchSeoChoice(questionId);
    setSeoChoices(choices as Choice[])
  };
  fetchData();
  },[])


  const judege = (e: { target: { innerHTML: string; }; })=>{
    console.log(seoChoices)
    const selectedText = e.target.innerHTML;
    const selectedChoices = seoChoices.find((item) => item.choice_text === selectedText);
    if(selectedChoices?.is_correct !== true){
      console.log('不正解')
      console.log(sessionStorage)
      const userScore = Number(sessionStorage.getItem('defaultScore') || 10);
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      console.log(sessionStorage.defaultScore)
      return

    }else{
            sessionStorage.clear();
    }
    // else{
    //   console.log('不正解')
    //   const currentScore = sessionStorage.getItem('defaultScore');
    //   const updatedScore = parseInt(currentScore, 10) - 1;
    //   console.log(updatedScore);
    //   sessionStorage.setItem('defaultScore', updatedScore.toString());
    //   console.log(sessionStorage)
    // }
  }



 
  return (
    <>
    {
           seoQuestions.map((seoQuestion) => (
            <p key={seoQuestion.id}>
              {seoQuestion.question}
            </p>
          ))
    }
       {
           seoChoices.map((seoChoice) => (
            <p key={seoChoice.id} onClick={judege}>
              {seoChoice.choice_text}
            </p>
          ))
    }
          <p>{quizTimer}</p>

    </>
  )
}
