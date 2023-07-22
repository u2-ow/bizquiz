import { atom } from "recoil";

export const choiceState = atom({
    key:'choiceState',
    default: [[], []],
})