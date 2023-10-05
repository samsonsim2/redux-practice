import {createSlice} from '@reduxjs/toolkit'
const counterSlice = createSlice({
    //STATES
    name:"counter",
    initialState:{
        counterValue:0,        
    },

    // ACTIONS
    reducers:{

      
        increment: (state)=>{
            state.counterValue += 1            
        },
        
        decrement : (state)=>{

            if(state.counterValue<=0){
                state.counterValue = 0
            }else{
                state.counterValue -= 1               
            }
        },
        

    }
})

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;
