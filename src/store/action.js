import { ADD1, COUNTER_DECREMENT, COUNTER_INCREMENT, SUB1 ,MUL1,DIV1 } from "./action.types";

export const add=()=>({type:COUNTER_INCREMENT})
export const substract=()=>({type:COUNTER_DECREMENT})
export const ADD2=(x)=>({type:ADD1,payload:x})
export const SUB2=(x)=>({type:SUB1,payload:x})
export const MUL2=(x)=>({type:MUL1,payload:x})
// export const DIV2=(x)=>({type:DIV1,payload:x})

