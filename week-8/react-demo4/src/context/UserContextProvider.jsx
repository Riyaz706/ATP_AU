import { useState } from 'react';
import { UserContext } from './UserContext';

function UserContextProvider({ children }) {
    //state
    const [user, setUser] = useState({
        name: "riyaz",
        age: 20,
        email: "riyaz@gmail.com"
    });

    //functions
    const changeName = () =>{
        setUser({ ...user, name: "Ravi" });
    }
    const changeAge = () =>{
        setUser({ ...user, age: user.age + 1 });
    }
    const changeEmail = () =>{
        setUser({ ...user, email: "ravi@gmail.com" });
    }

    return (

        <UserContext.Provider value={{ 
            ...user, 
            changeName, 
            changeAge, 
            changeEmail 
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
