import supabase from "./supabase";



export default async function fetchSeoChoice(questionId:number) {
    const { data: choices } = await supabase.from('random_seo_choice').select('*').eq('question_id', questionId)
    return choices
  }