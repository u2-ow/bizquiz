import { askedQuizState } from "@/lib/atoms/askedQuizState";
import { selector } from "recoil";

export const addQuestionsState = selector({
    key:'addQuestionsState',
    //ここで出題済みのクイズのグローバルステートを取得
    get:({get}) => {
        const currentItems = get(askedQuizState);
        const updatedItems =[...currentItems]
        return updatedItems;
    },
    //グローバルステートを更新
    set:({set},updatedItems)=>{
        set(askedQuizState,updatedItems)

    }
 
})