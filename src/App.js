 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { increment,decrement } from './counterState';
 

import './App.css';
import { getCocktailsFetch } from './cocktailState';

 

function App() {

  const counterValue = useSelector((state)=> state.counter.counterValue)
  const cocktails = useSelector ((state)=>state.cocktails.cocktails)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCocktailsFetch())
    
  },[dispatch])

  return (
    <div className="App">
      {cocktails.map((cocktail)=>{
        return <div>{cocktail.name}</div>
      })}
      <button onClick={()=>{dispatch(decrement())}}>minus</button>
      {counterValue}
      <button onClick={()=>{dispatch(increment())}}>add</button>
    </div>
  );
}

export default App;
