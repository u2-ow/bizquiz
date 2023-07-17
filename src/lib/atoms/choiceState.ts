import { atom } from "recoil";

export const choiceState = atom<number[]>({
    key:'choiceState',
    default: [],
})