import { atom } from "recoil";

export const quizState = atom<any>({
    key:'quizState',
    default: [[], []],
})