import supabase from "./supabase";



export default async function fetchSeoChoice(questionId) {
    const { data: questions } = await supabase.from('random_seo_choice').select('*').eq('question_id', questionId)
    console.log(questionId);
    return questions
  }