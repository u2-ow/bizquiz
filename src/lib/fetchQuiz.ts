import supabase from "./supabase";



export default async function fetchQuiz() {
  const { data: questions } = await supabase.from('randam_seo_question').select('*').limit(10);
  console.log(questions)  
  return questions;
  }