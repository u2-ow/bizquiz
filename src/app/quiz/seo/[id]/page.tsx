'use client'


import { useEffect, useState } from "react";
import { useQuizCountDown } from "@/hooks/useQuizCountDown";
import { usePathname,useRouter } from 'next/navigation';
import { askedQuizState } from "@/lib/atoms/askedQuizState";

import Styles from '@/app/quiz/quiz.module.scss'
import fetchSeoQuestion from "@/lib/fetchSeoQuestion";
import fetchSeoChoice from "@/lib/fetchSeoChoice";
import { useRecoilState } from "recoil";
import { addQuestionsState } from "@/selectors/addAskedQuestionSelector";

import { Question } from "@/types/question";



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
  const [apperTimer,setApperTimer] = useState(false)
  const [askedQuestions,setAskedQuestions] = useRecoilState<Question[]>(askedQuizState);
  const [currentQuestion,setCurrentQuestion] = useState(null)
 
 

  const quizTimer = useQuizCountDown();
  const pathname = usePathname();
  const router = useRouter();



  /* 問題と問題に対応する選択肢を取得 */

  useEffect(() => {
    const fetchData = async () => {
      const questions = await fetchSeoQuestion();
      setSeoQuestions(questions as Question[]);
      if(questions && questions.length >0){
        const questionId = questions[0].id;
        const choices = await fetchSeoChoice(questionId);
        setSeoChoices(choices as Choice[])
        setAskedQuestions([...askedQuestions, questionId]);
        setCurrentQuestion(questionId);      
        checkQuesionFunc(questionId)
      }
      return







    };
  
    const checkQuesionFunc = (questionId:Question) => {
      if (askedQuestions.includes(questionId)) {
        fetchData();
      }
    };
  
    fetchData();
  }, []);

/*タイマーの表示を問題の表示に合わせて表示*/
  useEffect(()=>{
    setTimeout(()=>{
      setApperTimer(true)
    },150)
    setCurretUrl(pathname);

  },[pathname])

/*カウントが0になった時にページを次の問題に遷移する*/
  useEffect(()=>{
    setCurretUrl(pathname);
    const userScore = Number(sessionStorage.getItem('defaultScore') || 10);
    if(quizTimer === 0 && currentUrl === '/quiz/seo/q1'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      router.push('/quiz/seo/q2')
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/seo/q2'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      router.push('/quiz/seo/q3')
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/seo/q3'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      router.push('/quiz/seo/q4')
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/seo/q4'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      router.push('/quiz/seo/q5')
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/seo/q5'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      router.push('/quiz/seo/q6')
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/seo/q6'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      router.push('/quiz/seo/q7')
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/seo/q7'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      router.push('/quiz/seo/q8')
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/seo/q8'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      router.push('/quiz/seo/q9')
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/seo/q9'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      router.push('/quiz/seo/q10')
      return
    }
    if(currentUrl === '/quiz/seo/q10'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      router.push('/result')
      return
    }
  },[pathname,router,currentUrl,quizTimer])

/* ユーザーが選択した選択肢に対しての処理(ページ遷移、スコアの減算)*/
  const judege = (e)=>{
    console.log(seoChoices)
    const selectedText = e.target.innerHTML;
    const selectedChoices = seoChoices.find((item) => item.choice_text === selectedText);
    if(selectedChoices?.is_correct === true){
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
    <div className="mainInner">
        {apperTimer &&  <p className={Styles.questionCount}>{quizTimer}</p>}
        <div className={Styles.quizContent}>

            {
                  seoQuestions.map((seoQuestion) => (
                    <p key={seoQuestion.id} className={Styles.question}>
                      {seoQuestion.question}
                    </p>
                  ))
            }
            <ul className={Styles.choiceList}>
            {
                  seoChoices.map((seoChoice) => (
                    <li key={seoChoice.id} onClick={judege} className={Styles.choiceItem}>
                      {seoChoice.choice_text}
                    </li>
                  ))
              }
            </ul>


        </div>

    </div>
 

    </>
  )
}
