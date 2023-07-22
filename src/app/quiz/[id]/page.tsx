'use client'

import Styles from '@/app/quiz/quiz.module.scss'

import { useEffect, useState,useRef } from "react";
import { useQuizCountDown } from "@/hooks/useQuizCountDown";
import { useParams, usePathname,useRouter, useSearchParams } from 'next/navigation';
import { useRecoilState } from "recoil";
import { quizState } from "@/lib/atoms/quizState";
import { choiceState } from "@/lib/atoms/choiceState";
import { incorrectState } from '@/lib/atoms/incorrectState';



type Choice = {
  id: number;
  choice_text: string;
  is_correct:boolean;
  question_id:number;
};

export default function Page() {

  const [currentUrl,setCurretUrl] = useState('');
  const [apperTimer,setApperTimer] = useState(false)
  const [currentQuestion,setCurrentQuestion] = useState(null)


  /*選択肢用のステート*/
  const [choices,setChoices] = useState<Choice[]>([]);
  /*問題用のステート*/
  const [questions,setQuestions] = useState<any>([])
  /*現在の問題のidのステート*/
  const [currentQuizId,setCurrentQuizId] = useState<any>();
  //現在の選択肢の配列のデータを格納するためのステート
  const [curretChoiceArray,setCurretChoiceArray] = useState<any>();
  /*問題用のグローバルステート*/
  const [globalQuiz,setGlobalquiz] = useRecoilState(quizState);
  /*選択肢用のグローバルステート*/
  const [globalFourChoices,setGlobalfourchoices] = useRecoilState(choiceState);
  /* 間違えた問題を記録するためのステート*/
  const [incorrectAnswer,setIncorrectAnswer] = useRecoilState(incorrectState)

  /*カウントダウン用のRef*/
  const quizSemiNumberCircleRef01 = useRef(null)
  const quizSemiNumberCircleRef02 = useRef(null)
  const quizSemiNumberCircleRef03 = useRef(null)

  /*正誤のRef*/
  const quizCorrectMarkRef = useRef<HTMLDivElement>(null);
  const quizIncorrectMarkRef = useRef<HTMLDivElement>(null);

  const quizTimer = useQuizCountDown();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  /* グローバルステートの配列から1問ずつ取得するために現在の問題のpathnameを取得する*/
  useEffect(()=>{
    const quizId = Number(pathname.split('/q').pop());
    setCurrentQuizId(quizId)
  },[currentQuizId, pathname])

  /* グローバルステートに格納した問題と選択肢を出力するためにステートに格納 */
  useEffect(()=>{
    //出題用の問題を取得
  if( Array.isArray(globalQuiz)){
    const quesionValutes = globalQuiz.map((item:any) => item.question);
    setQuestions(quesionValutes)
  }
  //問題に対する選択肢を取得
  if(Array.isArray(globalFourChoices) && globalFourChoices.length > 0){
    if(currentQuizId){
      const firstChoices = globalFourChoices[currentQuizId - 1];
      if (firstChoices) {
        const choiceItem =firstChoices.map((item: any) => item);
        setChoices(choiceItem)
        setCurretChoiceArray(choiceItem)
      } 
    }

  }

  },[currentQuizId, globalFourChoices, globalQuiz])

  /*タイマーの表示を問題の表示に合わせて表示*/
    //とりあえずany....
  useEffect(()=>{
    setTimeout(()=>{
      setApperTimer(true)
    },150)
    setCurretUrl(pathname);

  },[pathname])

  /*カウントが0になった時にページを次の問題に遷移する*/
    //とりあえずany....
  useEffect(()=>{
    setCurretUrl(pathname);
    const userScore = Number(sessionStorage.getItem('defaultScore') || 10);
    if(quizTimer === 0 && currentUrl === '/quiz/q1'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current;
      if(inCorrectMark){
        inCorrectMark.style.display ='block';
        setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
        setTimeout(()=>{
            router.push('/quiz/q2')
        },500)
        return
      }

    }
    if(quizTimer === 0 && currentUrl === '/quiz/q2'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current;
      if(inCorrectMark){
        inCorrectMark.style.display ='block';
        setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
        setTimeout(()=>{
            router.push('/quiz/q3')
        },500)
        return
      }

    }
    if(quizTimer === 0 && currentUrl === '/quiz/q3'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current;
      if(inCorrectMark){
        inCorrectMark.style.display ='block';
        setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
        setTimeout(()=>{
            router.push('/quiz/q4')
        },500)
        return
      }
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q4'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current;
      if(inCorrectMark){
        inCorrectMark.style.display ='block';
        setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
        setTimeout(()=>{
            router.push('/quiz/q5')
        },500)
        return
      }
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q5'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current
      if(inCorrectMark){
        inCorrectMark.style.display ='block';
        setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
        setTimeout(()=>{
            router.push('/quiz/q6')
        },500)
    
      }
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q6'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current;
      if(inCorrectMark){
        inCorrectMark.style.display ='block';
        setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
        setTimeout(()=>{
            router.push('/quiz/q7')
        },500)
        return
      }
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q7'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current;
      if(inCorrectMark){
        inCorrectMark.style.display ='block';
        setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
        setTimeout(()=>{
            router.push('/quiz/q8')
        },500)
      }
      return
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q8'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current;
      if(inCorrectMark){
        inCorrectMark.style.display ='block';
        setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
        setTimeout(()=>{
            router.push('/quiz/q9')
        },500)
        return
      }
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q9'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current;
      if(inCorrectMark){
        inCorrectMark.style.display ='block';
        setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
        setTimeout(()=>{
            router.push('/quiz/q10')
        },500)
        return
      }
    }
    if(quizTimer === 0 && currentUrl === '/quiz/q10'){
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      const inCorrectMark = quizIncorrectMarkRef.current;
      if(inCorrectMark){
        inCorrectMark.style.display ='block';
        setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
        setTimeout(()=>{
            router.push('/result')
        },500)
        return
      }
    }
  },[pathname,router,currentUrl,quizTimer])

  /* ユーザーが選択した選択肢に対しての処理(ページ遷移、スコアの減算)*/
    //とりあえずany....
  const judege = (e:any)=>{
    const selectedChoice = e.target.innerHTML;
    const selectedChoices = curretChoiceArray.find((item: { choice_text: any; }) => item.choice_text === selectedChoice);     
    if(selectedChoices?.is_correct === true){
      if(currentUrl === '/quiz/q1'){
        const correctMark = quizCorrectMarkRef.current;
        if(correctMark){
          correctMark.style.display ='block';
          setTimeout(()=>{
              router.push('/quiz/q2')
          },500)
          return
        }

      }
      if(currentUrl === '/quiz/q2'){
        const correctMark = quizCorrectMarkRef.current;
        if(correctMark){
          correctMark.style.display ='block';
          setTimeout(()=>{
              router.push('/quiz/q3')
          },500)
          return
        }

      }
      if(currentUrl === '/quiz/q3'){
        const correctMark = quizCorrectMarkRef.current;
        if(correctMark){
          correctMark.style.display ='block';
          setTimeout(()=>{
              router.push('/quiz/q4')
          },500)
          return
        }

      }
      if(currentUrl === '/quiz/q4'){
        const correctMark = quizCorrectMarkRef.current;
        if(correctMark){
          correctMark.style.display ='block';
          setTimeout(()=>{
              router.push('/quiz/q5')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q5'){
        const correctMark = quizCorrectMarkRef.current;
        if(correctMark){
          correctMark.style.display ='block';
          setTimeout(()=>{
              router.push('/quiz/q6')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q6'){
        const correctMark = quizCorrectMarkRef.current;
        if(correctMark){
          correctMark.style.display ='block';
          setTimeout(()=>{
              router.push('/quiz/q7')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q7'){
        const correctMark = quizCorrectMarkRef.current;
        if(correctMark){
          correctMark.style.display ='block';
          setTimeout(()=>{
              router.push('/quiz/q8')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q8'){
        const correctMark = quizCorrectMarkRef.current;
        if(correctMark){
          correctMark.style.display ='block';
          setTimeout(()=>{
              router.push('/quiz/q9')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q9'){
        const correctMark = quizCorrectMarkRef.current;
        if(correctMark){
          correctMark.style.display ='block';
          setTimeout(()=>{
              router.push('/quiz/q10')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q10'){
        const correctMark = quizCorrectMarkRef.current
        if(correctMark){
          correctMark.style.display ='block';
          setTimeout(()=>{
              router.push('/result')
          },500)
          return
        }
      }
    }else{
      const userScore = Number(sessionStorage.getItem('defaultScore') || 10);
      sessionStorage.setItem('defaultScore', String(userScore - 1));
      if(currentUrl === '/quiz/q1'){
        const IncorrectMark = quizIncorrectMarkRef.current;
        if(IncorrectMark){
          IncorrectMark.style.display ='block';
          setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
          setTimeout(()=>{
                    router.push('/quiz/q2')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q2'){
        const IncorrectMark = quizIncorrectMarkRef.current;
        if(IncorrectMark){
          IncorrectMark.style.display ='block';
          setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
          setTimeout(()=>{
              router.push('/quiz/q3')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q3'){
        const IncorrectMark = quizIncorrectMarkRef.current;
        if(IncorrectMark){
          IncorrectMark.style.display ='block';
          setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
          setTimeout(()=>{
              router.push('/quiz/q4')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q4'){
        const IncorrectMark = quizIncorrectMarkRef.current;
        if(IncorrectMark){
          IncorrectMark.style.display ='block';
          setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
          setTimeout(()=>{
              router.push('/quiz/q5')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q5'){
        const IncorrectMark = quizIncorrectMarkRef.current;
        if(IncorrectMark){
          IncorrectMark.style.display ='block';
          setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
          setTimeout(()=>{
              router.push('/quiz/q6')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q6'){
        const IncorrectMark = quizIncorrectMarkRef.current;
        if(IncorrectMark){
          IncorrectMark.style.display ='block';
          setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
          setTimeout(()=>{
              router.push('/quiz/q7')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q7'){
        const IncorrectMark = quizIncorrectMarkRef.current;
        if(IncorrectMark){
          IncorrectMark.style.display ='block';
          setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
          setTimeout(()=>{
              router.push('/quiz/q8')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q8'){
        const IncorrectMark = quizIncorrectMarkRef.current;
        if(IncorrectMark){
          IncorrectMark.style.display ='block';
          setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
          setTimeout(()=>{
              router.push('/quiz/q9')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q9'){
        const IncorrectMark = quizIncorrectMarkRef.current;
        if(IncorrectMark){
          IncorrectMark.style.display ='block';
          setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
          setTimeout(()=>{
              router.push('/quiz/q10')
          },500)
          return
        }
      }
      if(currentUrl === '/quiz/q10'){
        const IncorrectMark = quizIncorrectMarkRef.current;
        if(IncorrectMark){
          IncorrectMark.style.display ='block';
          setIncorrectAnswer((prevIncorrectAnswer: any)=>[...prevIncorrectAnswer,questions[currentQuizId -1]]);
          setTimeout(()=>{
              router.push('/result')
          },500)
          return
        }
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

              <p  className={Styles.quizQuesion}>{questions[currentQuizId - 1 ]}</p>
              <ul className={Styles.quizChoices}>
                {
                  choices.map(choice =>(
                    <li key={choice.id} className={Styles.quizChoicesItem} onClick={judege}>{choice.choice_text}</li>
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
