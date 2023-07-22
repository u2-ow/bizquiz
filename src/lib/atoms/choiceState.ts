import { atom } from "recoil";

export const choiceState = atom<any>({
    key:'choiceState',
    default: [[], []],
})