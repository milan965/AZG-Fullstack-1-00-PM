import { useDispatch, useSelector } from "react-redux"
import { Increment } from "./features/counter/counterSlicer";

function App() {

  const dispatch = useDispatch();

  let cnt = useSelector(state => state.counter.value);
  
  

  return (
    <>
      <div align="center">
          <h2>Counter App</h2>
          <h2>Count :- {cnt}</h2>
          <button onClick={ () => dispatch(Increment()) }>+</button>
      </div>
    </>
  )
}

export default App
