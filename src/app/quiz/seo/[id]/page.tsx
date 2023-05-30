'use client'


import { useEffect, useState } from "react";
import fetchSeoQuestion from "../../../../../utils/fetchSeoQuestion";
import fetchSeoChoice from "../../../../../utils/fetchSeoChoice";
import { useQuizCountDown } from "@/hooks/useQuizCountDown";
import { usePathname,useRouter } from 'next/navigation';
import Link from 'next/link'


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
  const [currentUrl,setCurretUrl] = useState('');

  const quizTimer = useQuizCountDown();
  const pathname = usePathname();
  const router = useRouter();


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
  setCurretUrl(pathname);
  },[pathname])



  const judege = (e)=>{
    console.log(seoChoices)
    const selectedText = e.target.innerHTML;
    const selectedChoices = seoChoices.find((item) => item.choice_text === selectedText);
    if(selectedChoices?.is_correct === true){
      sessionStorage.clear();
      if(currentUrl === '/quiz/seo/q1'){
        router.push('/quiz/seo/q2')
        return
      }
      if(currentUrl === '/quiz/seo/q2'){
        router.push('/quiz/seo/q3')
        return
      }
      if(currentUrl === '/quiz/seo/q3'){
        router.push('/quiz/seo/q4')
        return
      }
      if(currentUrl === '/quiz/seo/q4'){
        router.push('/quiz/seo/q5')
        return
      }
      if(currentUrl === '/quiz/seo/q5'){
        router.push('/quiz/seo/q6')
        return
      }
      if(currentUrl === '/quiz/seo/q6'){
        router.push('/quiz/seo/q7')
        return
      }
      if(currentUrl === '/quiz/seo/q7'){
        router.push('/quiz/seo/q8')
        return
      }
      if(currentUrl === '/quiz/seo/q8'){
        router.push('/quiz/seo/q9')
        return
      }
      if(currentUrl === '/quiz/seo/q9'){
        router.push('/quiz/seo/q10')
        return
      }
      if(currentUrl === '/quiz/seo/q10'){
        router.push('/result')
        return
      }


    }else{
      const userScore = Number(sessionStorage.getItem('defaultScore') || 10);
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      console.log(sessionStorage.defaultScore)
      if(currentUrl === '/quiz/seo/q1'){
        router.push('/quiz/seo/q2')
        return
      }
      if(currentUrl === '/quiz/seo/q2'){
        router.push('/quiz/seo/q3')
        return
      }
      if(currentUrl === '/quiz/seo/q3'){
        router.push('/quiz/seo/q4')
        return
      }
      if(currentUrl === '/quiz/seo/q4'){
        router.push('/quiz/seo/q5')
        return
      }
      if(currentUrl === '/quiz/seo/q5'){
        router.push('/quiz/seo/q6')
        return
      }
      if(currentUrl === '/quiz/seo/q6'){
        router.push('/quiz/seo/q7')
        return
      }
      if(currentUrl === '/quiz/seo/q7'){
        router.push('/quiz/seo/q8')
        return
      }
      if(currentUrl === '/quiz/seo/q8'){
        router.push('/quiz/seo/q9')
        return
      }
      if(currentUrl === '/quiz/seo/q9'){
        router.push('/quiz/seo/q10')
        return
      }
      if(currentUrl === '/quiz/seo/q10'){
        router.push('/result')
        return
      }

    }
  }



  return (
    <>
    <div>
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
    </div>

 

    </>
  )
}
