import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterContextProvider from './context/CounterContextProvider'
import UserContextProvider from './context/UserContextProvider'

createRoot(document.getElementById('root')).render(
    //wrap the app with context provider
    <UserContextProvider>
        <CounterContextProvider>
            <App />
        </CounterContextProvider>
    </UserContextProvider>
)
