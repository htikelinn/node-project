import { createContext, useState } from 'react'
import './App.css'
import ContextCounter from './component/ContextCounter';

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
});
export default function  App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0){
    setCounter(counter - 1);
    }
  }
  const value = { counter, increment, decrement };

  return (
    <CounterContext.Provider value={value}>
      <ContextCounter />
    </CounterContext.Provider>
  )
}

