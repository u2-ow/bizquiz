import { atom } from "recoil";
import { Question } from "@/types/question";

export const askedQuizState = atom<Question[]>({
    key: "askedQuizState",
    default: [],
  });