'use client'


import { useEffect, useState,useRef } from "react";
import { useQuizCountDown } from "@/hooks/useQuizCountDown";
import { useParams, usePathname,useRouter, useSearchParams } from 'next/navigation';
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

  /*カウントダウン用のRef*/
  const quizSemiNumberCircleRef01 = useRef(null)
  const quizSemiNumberCircleRef02 = useRef(null)
  const quizSemiNumberCircleRef03 = useRef(null)

  /*正誤のRef*/
  const quizCorrectMarkRef = useRef<HTMLDivElement>(document.createElement('div'));
  const quizIncorrectMarkRef = useRef<HTMLDivElement>(document.createElement('div'));

  const quizTimer = useQuizCountDown();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
 


  /* 問題と問題に対応する選択肢を取得 */

  useEffect(() => {
   
    const fetchData = async () => {
      const questions = await fetchSeoQuestion();
      setSeoQuestions(questions as Question[]);
      if(questions && questions.length >0){
        console.log(questions)
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
    if(quizTimer === 0 && currentUrl === '/quiz/q1'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current
      inCorrectMark.style.display ='block';
      setTimeout(()=>{
          router.push('/quiz/q2')
      },500)
    
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q2'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current
      inCorrectMark.style.display ='block';
      setTimeout(()=>{
          router.push('/quiz/q3')
      },500)
    
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q3'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current
      inCorrectMark.style.display ='block';
      setTimeout(()=>{
          router.push('/quiz/q4')
      },500)
    
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q4'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current
      inCorrectMark.style.display ='block';
      setTimeout(()=>{
          router.push('/quiz/q5')
      },500)
    
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q5'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current
      inCorrectMark.style.display ='block';
      setTimeout(()=>{
          router.push('/quiz/q6')
      },500)
    
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q6'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current
      inCorrectMark.style.display ='block';
      setTimeout(()=>{
          router.push('/quiz/q7')
      },500)
    
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q7'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current
      inCorrectMark.style.display ='block';
      setTimeout(()=>{
          router.push('/quiz/q8')
      },500)
    
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q8'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current
      inCorrectMark.style.display ='block';
      setTimeout(()=>{
          router.push('/quiz/q9')
      },500)
    
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q9'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current
      inCorrectMark.style.display ='block';
      setTimeout(()=>{
          router.push('/quiz/q10')
      },500)
    
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q10'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current
      inCorrectMark.style.display ='block';
      setTimeout(()=>{
          router.push('/result')
      },500)
    
      return
    }
  },[pathname,router,currentUrl,quizTimer])

/* ユーザーが選択した選択肢に対しての処理(ページ遷移、スコアの減算)*/
  const judege = (e)=>{
    const selectedText = e.target.innerHTML;
    const selectedChoices = seoChoices.find((item) => item.choice_text === selectedText);
    if(selectedChoices?.is_correct === true){
      if(currentUrl === '/quiz/q1'){
        const correctMark = quizCorrectMarkRef.current
        correctMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q2')
        },500)
        return
      }
      if(currentUrl === '/quiz/q2'){
        const correctMark = quizCorrectMarkRef.current
        correctMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q3')
        },500)
        return
      }
      if(currentUrl === '/quiz/q3'){
        const correctMark = quizCorrectMarkRef.current
        correctMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q4')
        },500)
        return
      }
      if(currentUrl === '/quiz/q4'){
        const correctMark = quizCorrectMarkRef.current
        correctMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q5')
        },500)
        return
      }
      if(currentUrl === '/quiz/q5'){
        const correctMark = quizCorrectMarkRef.current
        correctMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q6')
        },500)
        return
      }
      if(currentUrl === '/quiz/q6'){
        const correctMark = quizCorrectMarkRef.current
        correctMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q7')
        },500)
        return
      }
      if(currentUrl === '/quiz/q7'){
        const correctMark = quizCorrectMarkRef.current
        correctMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q8')
        },500)
        return
      }
      if(currentUrl === '/quiz/q8'){
        const correctMark = quizCorrectMarkRef.current
        correctMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q9')
        },500)
        return
      }
      if(currentUrl === '/quiz/q9'){
        const correctMark = quizCorrectMarkRef.current
        correctMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q10')
        },500)
        return
      }
      if(currentUrl === '/quiz/q10'){
        const correctMark = quizCorrectMarkRef.current
        correctMark.style.display ='block';
        setTimeout(()=>{
            router.push('/result')
        },500)
        return
      }
    }else{
      const userScore = Number(sessionStorage.getItem('defaultScore') || 10);
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      if(currentUrl === '/quiz/q1'){
        console.log(quizCorrectMarkRef)
        const IncorrectMark = quizIncorrectMarkRef.current
        IncorrectMark.style.display ='block';
        setTimeout(()=>{
                  router.push('/quiz/q2')
        },500)

        return
      }
      if(currentUrl === '/quiz/q2'){
        const IncorrectMark = quizIncorrectMarkRef.current
        IncorrectMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q3')
        },500)
        return
      }
      if(currentUrl === '/quiz/q3'){
        const IncorrectMark = quizIncorrectMarkRef.current
        IncorrectMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q4')
        },500)
        return
      }
      if(currentUrl === '/quiz/q4'){
        IncorrectMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q5')
        },500)
        return
      }
      if(currentUrl === '/quiz/q5'){
        const IncorrectMark = quizIncorrectMarkRef.current
        IncorrectMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q6')
        },500)
        return
      }
      if(currentUrl === '/quiz/q6'){
        const IncorrectMark = quizIncorrectMarkRef.current
        IncorrectMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q7')
        },500)
        return
      }
      if(currentUrl === '/quiz/q7'){
        const IncorrectMark = quizIncorrectMarkRef.current
        IncorrectMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q8')
        },500)
        return
      }
      if(currentUrl === '/quiz/q8'){
        const IncorrectMark = quizIncorrectMarkRef.current
        IncorrectMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q9')
        },500)
        return
      }
      if(currentUrl === '/quiz/q9'){
        const IncorrectMark = quizIncorrectMarkRef.current
        IncorrectMark.style.display ='block';
        setTimeout(()=>{
            router.push('/quiz/q10')
        },500)
        return
      }
      if(currentUrl === '/quiz/q10'){
        const IncorrectMark = quizIncorrectMarkRef.current
        IncorrectMark.style.display ='block';
        setTimeout(()=>{
            router.push('/result')
        },500)
        return
      }

    }
  }

/* カウントダウン用の処理*/
//とりあえずany....
useEffect(()=>{
  const quizSemiNumberCircle01:any = quizSemiNumberCircleRef01.current;
  const quizSemiNumberCircle02:any = quizSemiNumberCircleRef02.current;
  const quizSemiNumberCircle03:any = quizSemiNumberCircleRef03.current;

  if(quizSemiNumberCircle01){
    quizSemiNumberCircle01.style.transform ='rotate(180deg)';
    quizSemiNumberCircle01.style.transition ='10s linear';
  }
  if(quizSemiNumberCircle02){
    quizSemiNumberCircle02.style.transform ='rotate(360deg)';
    quizSemiNumberCircle02.style.transition ='20s linear';

  }
  if(quizSemiNumberCircle03){
    quizSemiNumberCircle03.style.opacity ='0';
    quizSemiNumberCircle03.style.transition ='opacity 0s 10s';
 
  }

},[])

  




  return (
    <>
    <div className="mainInner">
       
        <div className={Styles.quizContent}>
          <div className={Styles.quizNumberCircle}>
            
            <div className={Styles.quizSemiNumberCircle} ref={quizSemiNumberCircleRef01}></div>
            <div className={Styles.quizSemiNumberCircle} ref={quizSemiNumberCircleRef02}></div>
            <div className={Styles.quizSemiNumberCircle} ref={quizSemiNumberCircleRef03}></div>
            <div className={Styles.outerCircle}>{`${params.id.toUpperCase()}`}</div>
         
          </div>

          <div className={Styles.quizInner}>
              {
                    seoQuestions.map((seoQuestion) => (
                      <p key={seoQuestion.id} className={Styles.quizQuesion}>
                        {seoQuestion.question}
                      </p>
                    ))
              }
              <ul className={Styles.quizChoices}>
              {
                    seoChoices.map((seoChoice) => (
                      <li key={seoChoice.id} onClick={judege} className={Styles.quizChoicesItem}>
                        {seoChoice.choice_text}
                      </li>
                    ))
                }
              </ul>
              
              <div className={Styles.quizCorrectMark} ref={quizCorrectMarkRef}>
                <p className={Styles.quizCorrectMarkText}>正解</p>
              </div>
              <div className={Styles.quizIncorrectMark} ref={quizIncorrectMarkRef}>
                <p className={Styles.quizIncorrectMarkText}>不正解</p>
              </div>
          </div>



        </div>

    </div>
 

    </>
  )
}
