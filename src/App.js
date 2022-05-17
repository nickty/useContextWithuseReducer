
import React from "react";

const reducerFunction = (state, action) => {

  switch (action.type) {
    case 'increament':
      return {
        ...state, 
        count: state.count + 1
      }
      
    case 'decrement': 
      return {
      ...state, 
      count: state.count - 1
    }
  
    default:
      return state
  }

} 

const initialState = {
  count: 0
}

function App() {

  const [input, setInput] = React.useState(0)
  const [state, dispatch] = React.useReducer(reducerFunction, initialState)
  
 return (
   <div className="app">
     <h2>Reducer example</h2>
     <div>
       <label>Start Count</label>
       <input
        type='number'
        onChange={e => setInput(parseInt(e.target.value))}
       />
       <br/>
       <button>Initalize counter</button>
     </div>

     <p>{state.count}</p>

     <button onClick={() => dispatch({
       type: 'increament'
     })}>increament</button>
     <button onClick={() => dispatch({
       type: 'decrement'
     })}>decreament</button>
   </div>
 )
}

export default App;
