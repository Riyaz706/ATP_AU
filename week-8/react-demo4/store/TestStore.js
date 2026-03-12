import {create} from 'zustand'

export const useTestStore = create((set) => ({
    //state
    x:10,
    y:20,
    user:{
        name:'Riyaz',
        age:25
    },
    //function to modify state
    incrementX:()=>set(state=>({x:state.x+1})),
    decrementX:()=>set(state=>({x:state.x-1})),
    incrementY:()=>set(state=>({y:state.y+1})),
    incrementXByValue:(value)=>set(state=>({x:state.x+value})),
    updateUser:(name,age)=>set(state=>({user:{...state.user,name:name,age:age}}))
}))