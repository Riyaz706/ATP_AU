import { useContext } from "react"
import { CounterContext } from "../src/context/counterContext"


function B() {
  let { counter1, changeCounter1 } = useContext(CounterContext)
  console.log("component B rendered")

  return (
    <div className='bg-amber-200 p-20 shadow-2xl'>
      <p className="text-2xl font-bold text-center">B</p>
      <p className="text-red-500 text-center">Counter1:{counter1}</p>
      <button onClick={changeCounter1} className="bg-red-600 p-1 mt-4 text-white">ChangeCounter1</button>

    </div>

  )
}

export default B