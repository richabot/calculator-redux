import { COUNTER_DECREMENT, COUNTER_INCREMENT ,ADD1,SUB1,MUL1,DIV1} from "./action.types";

export const reducer =(state,action)=>{
    switch(action.type)
    {
        case COUNTER_INCREMENT:{
            state.count++;
            return {...state};
        }
        case COUNTER_DECREMENT:{
            state.count--;
            return {...state};

        }
        case ADD1:{
            state.count=parseInt(state.count) + parseInt(action.payload);
            return {...state};
        }
        case SUB1:{
            state.count=(state.count-action.payload);
            return {...state}
        }
        case MUL1:{
            state.count=parseInt(state.count) * parseInt(action.payload);
            return {...state};
        }
        case DIV1:{
            if(state.count==0)
            {
                console.log("not possible")
            }
            state.count=(state.count/action.payload);
            
            return {...state}
        }

        default:{
            return state
        }
    }
   
};