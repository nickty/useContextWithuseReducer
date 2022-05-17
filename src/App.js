
import React from "react";

function App() {

  const [input, setInput] = React.useState(0)
  
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
   </div>
 )
}

export default App;
