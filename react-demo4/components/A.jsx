import { useContext } from "react"
import { CounterContext } from "../src/context/counterContext"

function A() {

  let { counter1, changeCounter1 } = useContext(CounterContext)
  console.log("component A rendered")

  return (
    <div className='bg-amber-200 p-20 shadow-2xl'>

      <p className="text-2xl font-bold text-center">A</p>
      <p className="text-red-500 text-center">Counter1:{counter1}</p>
      <button onClick={changeCounter1} className="bg-red-600 p-1 mt-4 text-white">Change Counter1</button>

    </div>
  )
}

export default A