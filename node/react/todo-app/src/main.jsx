import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import TodoList from './TodoList.jsx'
import FruitsComponent from './FruitsComponent.jsx'
import UseEffectCount from './UseEffectCount.jsx'
import PostComponent from './PostComponent.jsx'
import ContextCounter from './component/ContextCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <todolist />
    <fruitscomponent />
    <useeffectcount /> 
   <postcomponent /> */}
  </StrictMode>,
)
