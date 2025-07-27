import { createSlice } from "@reduxjs/toolkit";


let CartSlice=createSlice({
    
    name :"cart",
    initialState:[],
    reducers:{

        add:(state,action)=>{

          let item =  state.find(
                (item)=>item.id==action.payload.id
            )

            if(item){
                item.quantity +=1
            }
            else{
                let newProductCart={...action.payload,quantity:1}
                state.push(newProductCart)
            }
        },

        remove:(state,action)=>{
                return state.filter(
                    (item)=>item.id != action.payload
                )
        },

        changeQuantity:(state,action)=>{
            let {id,change}=action.payload
            let item=state.find(
                (item)=>item.id==id
            )
            item.quantity +=change
        },

        clearCart:(state)=>[]

    }


})
export default CartSlice



