import supabase from "./supabase";



export default async function fetchChoice(questionId:number) {
    const { data: choices } = await supabase.from('random_seo_choice').select('*').eq('question_id', questionId)
    return choices
  }