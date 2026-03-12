import { useContext } from "react";
import { UserContext } from "../src/context/UserContext"; 
import { CounterContext } from "../src/context/counterContext";
import { useTestStore } from "../store/TestStore";

function B() {
  const x=useTestStore((state)=>state.x);
  const incrementX=useTestStore((state)=>state.incrementX);
  const { name, age, email, changeName, changeAge, changeEmail } = useContext(UserContext);
  const { counter1, changeCounter1,counter2,changeCounter2 } = useContext(CounterContext)
  const {user,updateUser}=useTestStore()

  console.log("component B rendered")

  return (
    <div className="bg-amber-200 p-15 shadow-2xl text-center">
      <p className="text-2xl font-bold text-center">B</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      
      <button onClick={changeName} className="bg-blue-600 p-2 text-white rounded-full">Update Name</button>
      <button onClick={changeAge} className="bg-blue-600 p-2 ml-2 text-white rounded-full">Update Age</button>
      <button onClick={changeEmail} className="bg-blue-600 p-2 ml-2 text-white rounded-full">Update Email</button>

      <p className="mt-2">Counter1: {counter1}</p>
      <p>Counter2: {counter2}</p>
      <button onClick={changeCounter1} className="bg-red-600 p-2 ml-2 mt-1.5 text-white rounded-full">Update Counter1</button>
      <button onClick={changeCounter2} className="bg-red-600 p-2 ml-2 mt-1.5 text-white rounded-full">Update Counter2</button>
      <p className="text-red-500 text-center">User:{user.name}</p>
      <p className="text-red-500 text-center">Age:{user.age}</p>
      <button onClick={()=>updateUser('KiranB',21)} className="bg-blue-600 p-2 mt-4 ml-2 text-white rounded-full">Update User</button>
    </div>
  );
}

export default B;
