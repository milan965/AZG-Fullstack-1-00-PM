import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./features/counter/counterSlice";

function App() {

  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  

  return (
    <>
      <div align="center">
          <h2>Counter App</h2>
          <h2>Count :- {count}</h2>
          <button onClick={ () => dispatch(increment()) }>+</button>
          <button onClick={ () => dispatch(decrement()) }>-</button>
      </div>
    </>
  )
}

export default App
