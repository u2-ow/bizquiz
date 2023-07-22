import { atom } from "recoil";

export const incorrectState = atom<any>({
    key:'incorrectState',
    default: [],
})