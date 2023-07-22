import { atom } from "recoil";

export const quizState = atom({
    key:'quizState',
    default: [[], []],
})