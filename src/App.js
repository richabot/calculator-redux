
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line
import { add, substract,setx,ADD2,SUB2, MUL2, DIV2 } from './store/action';
import { useState } from 'react';

function App() {
  const dispatch=useDispatch();
  // eslint-disable-next-line
  const [x, setx] = useState(0)
  const count =useSelector((state)=>state.count)
  return (
    <div className="App">
    <h1>Counter :{count}</h1>
    <div>
    <input onChange={event => setx(event.target.value)} />
      <button onClick={()=>dispatch(add())}>-</button>
      <button onClick={()=>dispatch(substract())} >+</button>
      <button onClick={()=>dispatch(ADD2(x))}>Add</button>
      <button onClick={()=>dispatch(SUB2(x))}>Substract</button>
      <button onClick={()=>dispatch(MUL2(x))}>MULTIPLY</button>
      <button onClick={()=>dispatch(DIV2(x))}>DIVIDE</button>
      
    </div>
    </div>
  );
}

export default App;
