import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterContextProvider from './context/CounterContextProvider'

createRoot(document.getElementById('root')).render(
    //wrap the app with context provider
    <CounterContextProvider>
    <App />
    </CounterContextProvider>
)
