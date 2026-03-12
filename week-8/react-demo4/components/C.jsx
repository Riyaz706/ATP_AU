import { useContext, useState } from "react"
import { CounterContext } from "../src/context/counterContext"
import { useTestStore } from "../store/TestStore"
import { useRef } from "react"

function C() {
  let { counter1, changeCounter1,counter2,changeCounter2 } = useContext(CounterContext)
  
  console.log("component C rendered")
  const {x,incrementX,decrementX,incrementXByValue}=useTestStore()
  console.log(useTestStore())
  const {user,updateUser}=useTestStore()
  

  return (
    <div className='bg-amber-200 p-15 shadow-2xl text-center'>
      <p className="text-2xl font-bold text-center">C</p>
      <p className="text-red-500 text-center">Counter1:{counter1}</p>
      <p className="text-red-500 text-center">Counter2:{counter2}</p>
      <button onClick={changeCounter1} className="bg-red-600 p-2 mt-4 text-white rounded-full">Change   Counter1</button>
      <button onClick={changeCounter2} className="bg-red-600 p-2 mt-4 ml-2 text-white rounded-full">Change Counter2</button>
      <p className="text-red-500 text-center">x:{x}</p>
      <button onClick={incrementX} className="bg-blue-600 p-2 mt-4 text-white rounded-full">Increment X</button>
      <button onClick={decrementX} className="bg-blue-600 p-2 mt-4 ml-2 text-white rounded-full">Decrement X</button>
      <button onClick={()=>incrementXByValue(10)} className="bg-blue-600 p-2 mt-4 ml-2 text-white rounded-full">Increment X by 10</button>
      <p className="text-red-500 text-center">User:{user.name}</p>
      <p className="text-red-500 text-center">Age:{user.age}</p>
      <button onClick={()=>updateUser('KiranC',23)} className="bg-blue-600 p-2 mt-4 ml-2 text-white rounded-full">Update User</button>
    </div>
  )
}

export default C