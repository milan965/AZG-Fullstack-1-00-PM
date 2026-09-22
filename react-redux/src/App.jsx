import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment } from "./redux/action/counterAction";

function App() {

  let no = useSelector(state => state.count);
  const dispatch = useDispatch();
  

  return (
    <>
      
      <div align="center">
        <h1>Count :- {no}</h1>
        <button onClick={ () => dispatch(Increment()) }>+</button>
        <button onClick={ () => dispatch(Decrement()) }>-</button>

      </div>

    </>
  )
}

export default App
