import { atom } from "recoil";

export const incorrectState = atom<number[]>({
    key:'incorrectState',
    default: [],
})