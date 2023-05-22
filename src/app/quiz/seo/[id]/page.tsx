'use client'


import { useEffect, useState } from "react";
import fetchSeoQuestion from "../../../../../utils/fetchSeoQuestion";
import fetchSeoChoice from "../../../../../utils/fetchSeoChoice";


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
  //setSeoQuestionsが非同期の関数じゃないからuseEffect内で非同期関数を呼び出さないといけない
  useEffect(()=>{
  const fetchData = async () => {
    const questions = await fetchSeoQuestion();

    setSeoQuestions(questions as Question[]);
    const questionId = questions[0].id
    console.log(questionId)
    const choices = await fetchSeoChoice(questionId);
    console.log(choices)

    setSeoChoices(choices as Choice[])
  };

  fetchData();
  },[])
 
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
            <p key={seoChoice.id}>
              {seoChoice.choice_text}
            </p>
          ))
    }
  

    </>
  )
}
